'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

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
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = useCallback(() => {
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
  }, [isListening, supported]); // dependencyを最小化

  if (!supported) return null;

  return (
    <button
      onClick={toggleListening}
      type="button"
      className={cn(
        "p-2.5 rounded-full transition-all duration-300 focus:outline-none flex items-center justify-center gap-2 border shadow-lg",
        isListening 
          ? "bg-red-500/20 text-red-400 border-red-500/40 animate-pulse ring-4 ring-red-500/10 scale-110" 
          : "bg-white/5 text-gray-400 border-white/10 hover:text-white hover:bg-white/10 hover:border-white/20 active:scale-95",
        className
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
  );
}
