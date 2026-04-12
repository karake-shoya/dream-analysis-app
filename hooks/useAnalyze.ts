'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ERROR_MESSAGES } from '@/lib/constants';

interface Question {
  question: string;
  options: string[];
}

export function useAnalyze() {
  const router = useRouter();

  const [dream, setDream] = useState('');
  const baseTextRef = useRef('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [needsMoreInfo, setNeedsMoreInfo] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [moreInfo, setMoreInfo] = useState('');
  const moreInfoBaseTextRef = useRef('');
  const [resultId, setResultId] = useState<string | null>(null);
  const [resultShareToken, setResultShareToken] = useState<string | null>(null);
  const questionsSectionRef = useRef<HTMLDivElement>(null);

  const buildResultPath = (id: string, shareToken?: string | null) => {
    const params = new URLSearchParams();
    if (shareToken) params.set('token', shareToken);
    params.set('ref', 'app');
    return `/result/${id}?${params.toString()}`;
  };

  const handleAnalyze = async (isFollowUp = false) => {
    const inputText = isFollowUp ? `${dream}\n\n【追加情報】\n${moreInfo}` : dream;
    if (!inputText.trim()) return;

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dream: inputText }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || ERROR_MESSAGES.ANALYSIS_FAILED);
      }

      if (data.needsMoreInfo && !isFollowUp) {
        setNeedsMoreInfo(true);
        setQuestions(data.missingInfoQuestions || []);
        if (data.id) {
          setResultId(data.id);
          setResultShareToken(data.shareToken || null);
        }
        setLoading(false);

        setTimeout(() => {
          if (questionsSectionRef.current) {
            const yOffset = -80;
            const y =
              questionsSectionRef.current.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 150);
        return;
      }

      if (data.id) {
        router.push(buildResultPath(data.id, data.shareToken));
      } else {
        setLoading(false);
        setError('解析は完了しましたが、結果の保存に失敗しました。もう一度お試しください。');
      }
    } catch (err: unknown) {
      setLoading(false);
      const errorMessage = err instanceof Error ? err.message : ERROR_MESSAGES.UNEXPECTED_ERROR;
      setError(errorMessage);
    }
  };

  const handleAddOption = (option: string) => {
    setMoreInfo((prev) => {
      const trimmed = prev.trim();
      if (!trimmed) return option;
      if (/[、。]$/.test(trimmed)) return trimmed + option;
      return trimmed + '、' + option;
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, isFollowUp: boolean) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      if (!isFollowUp && needsMoreInfo) return;
      e.preventDefault();
      handleAnalyze(isFollowUp);
    }
  };

  return {
    dream,
    setDream,
    baseTextRef,
    loading,
    error,
    needsMoreInfo,
    questions,
    moreInfo,
    setMoreInfo,
    moreInfoBaseTextRef,
    resultId,
    resultShareToken,
    questionsSectionRef,
    handleAnalyze,
    handleAddOption,
    handleKeyDown,
  };
}
