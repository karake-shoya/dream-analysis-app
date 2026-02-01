'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const VOICE_HINT_STORAGE_KEY = 'voice-input-hint-shown';

/**
 * Web Speech API の型定義
 */
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
}

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  onStart?: () => void;
  className?: string;
}

export default function VoiceInput({ onTranscript, onStart, className }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const [showHint, setShowHint] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  // ステールクロージャ対策: callbackをRefで保持する
  const onTranscriptRef = useRef(onTranscript);
  const onStartRef = useRef(onStart);

  useEffect(() => {
    onTranscriptRef.current = onTranscript;
    onStartRef.current = onStart;
  }, [onTranscript, onStart]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const win = window as any;
      const isSpeechSupported = !!(win.SpeechRecognition || win.webkitSpeechRecognition);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSupported(isSpeechSupported);
      
      // 初回訪問時はヒントを表示
      if (isSpeechSupported) {
        const hintShown = localStorage.getItem(VOICE_HINT_STORAGE_KEY);
        if (!hintShown) {
          setShowHint(true);
        }
      }
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const dismissHint = useCallback(() => {
    setShowHint(false);
    localStorage.setItem(VOICE_HINT_STORAGE_KEY, 'true');
  }, []);

  const toggleListening = useCallback(() => {
    // ヒントを閉じる
    if (showHint) {
      dismissHint();
    }
    
    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    const SpeechRecognition = win.SpeechRecognition || win.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'ja-JP';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onstart = () => {
      if (onStartRef.current) onStartRef.current();
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const e = event as SpeechRecognitionEvent;
      let totalTranscript = '';
      for (let i = 0; i < e.results.length; i++) {
        totalTranscript += e.results[i][0].transcript;
      }
      
      onTranscriptRef.current(totalTranscript);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      const e = event as SpeechRecognitionErrorEvent;
      if (e.error !== 'no-speech') {
        console.error('Speech recognition error:', e.error);
      }
      
      setIsListening(false);

      if (e.error === 'not-allowed') {
        toast.error('マイクの使用が許可されていません。設定を確認してください。');
      } else if (e.error === 'no-speech') {
        // Ignore silent timeout
      } else {
        toast.error('音声入力中にエラーが発生しました。');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    setIsListening(true);
    try {
      recognition.start();
      recognitionRef.current = recognition;
    } catch (e) {
      console.error('Recognition start failed:', e);
      setIsListening(false);
    }
  }, [isListening, showHint, dismissHint]); // dependencyを最小化

  if (!supported) return null;

  return (
    <div className={cn("relative", className)}>
      {/* 初回ヒントバブル */}
      {showHint && (
        <div 
          className="absolute bottom-full right-0 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-300"
          onClick={dismissHint}
        >
          <div className="relative bg-indigo-500/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-2 rounded-lg shadow-lg whitespace-nowrap cursor-pointer hover:bg-indigo-500 transition-colors">
            🎤 音声入力
            {/* 吹き出しの矢印 */}
            <div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-indigo-500/90 rotate-45" />
          </div>
        </div>
      )}
      
      <button
        onClick={toggleListening}
        type="button"
        className={cn(
          "p-2.5 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center gap-2 border shadow-lg",
          isListening 
            ? "bg-red-500/20 text-red-400 border-red-500/40 animate-pulse ring-4 ring-red-500/10 scale-110" 
            : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 active:scale-95",
          showHint && !isListening && "ring-2 ring-indigo-400/50 animate-pulse"
        )}
        title={isListening ? "音声入力を停止" : "音声入力"}
      >
        {isListening ? (
          <>
            <MicOff className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider pr-1">Listening</span>
          </>
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}
