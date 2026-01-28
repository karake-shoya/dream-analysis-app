'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface VoiceInputProps {
  onTranscript: (text: string) => void;
  onStart?: () => void;
  className?: string;
}

export default function VoiceInput({ onTranscript, onStart, className }: VoiceInputProps) {
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        setSupported(true);
      }
    }
    
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = useCallback(() => {
    if (!supported) {
      toast.error('お使いのブラウザは音声入力に対応していません。');
      return;
    }

    if (isListening) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = 'ja-JP';
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onstart = () => {
      setIsListening(true);
      if (onStart) onStart();
    };

    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      let interimTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      // We send back the total transcript of this session
      // Wait, if it's continuous, we need to accumulate
      // speechRecognition doesn't store the whole history in results easily for long sessions
      // but event.results contains everything if we don't restart.
      
      let totalTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        totalTranscript += event.results[i][0].transcript;
      }
      
      onTranscript(totalTranscript);
    };

    recognition.onerror = (event: any) => {
      if (event.error !== 'no-speech') {
        console.error('Speech recognition error:', event.error);
      }
      
      setIsListening(false);

      if (event.error === 'not-allowed') {
        toast.error('マイクの使用が許可されていません。設定を確認してください。');
      } else if (event.error === 'no-speech') {
        // Ignore silent timeout
      } else {
        toast.error('音声入力中にエラーが発生しました。');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      recognition.start();
      recognitionRef.current = recognition;
    } catch (e) {
      console.error('Recognition start failed:', e);
      setIsListening(false);
    }
  }, [isListening, supported, onTranscript, onStart]);

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
