'use client';

import { useState, useRef } from 'react';
import { Loader2, Check, AlertTriangle, X, BookOpen, Tag, Plus } from 'lucide-react';

type Props = {
  dreamId: string;
  initialNotes: string;
  initialTags: string[];
};

const MAX_TAGS = 10;
const MAX_TAG_LENGTH = 20;

export default function DreamMemo({ dreamId, initialNotes, initialTags }: Props) {
  const [notes, setNotes] = useState(initialNotes);
  const [tags, setTags] = useState<string[]>(initialTags);
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const tagInputRef = useRef<HTMLInputElement>(null);

  const addTag = () => {
    const trimmed = tagInput.trim().slice(0, MAX_TAG_LENGTH);
    if (!trimmed || tags.includes(trimmed) || tags.length >= MAX_TAGS) return;
    setTags((prev) => [...prev, trimmed]);
    setTagInput('');
    tagInputRef.current?.focus();
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);

    try {
      const res = await fetch(`/api/dreams/${dreamId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes, userTags: tags }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || '保存に失敗しました');
      }

      setMessage({ type: 'success', text: '保存しました' });
    } catch (err) {
      setMessage({
        type: 'error',
        text: err instanceof Error ? err.message : '保存に失敗しました',
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10">
      <h3 className="text-sm font-bold text-gray-400 mb-6 flex items-center uppercase tracking-widest">
        <BookOpen className="w-4 h-4 mr-2 text-teal-400" />
        私のメモ
      </h3>

      <div className="space-y-6">
        {/* メモ入力 */}
        <div>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            maxLength={2000}
            rows={4}
            placeholder="この夢について気づいたこと、感想などを自由に記録してください..."
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-transparent transition-all resize-none"
          />
          <p className="text-right text-xs text-gray-600 mt-1">{notes.length} / 2000</p>
        </div>

        {/* タグ入力 */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-xs text-gray-500">マイタグ（最大{MAX_TAGS}件）</span>
          </div>

          {/* 既存タグ */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 text-xs"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:text-white transition-colors ml-0.5"
                    aria-label={`${tag}を削除`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* タグ追加入力 */}
          {tags.length < MAX_TAGS && (
            <div className="flex gap-2">
              <input
                ref={tagInputRef}
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleTagKeyDown}
                maxLength={MAX_TAG_LENGTH}
                placeholder="タグを追加..."
                className="flex-1 bg-black/20 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all"
              />
              <button
                onClick={addTag}
                disabled={!tagInput.trim()}
                className="px-3 py-2 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 rounded-xl transition-colors disabled:opacity-30 border border-emerald-500/20"
                aria-label="タグを追加"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* 結果メッセージ */}
        {message && (
          <div
            className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
              message.type === 'success'
                ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                : 'bg-red-500/10 text-red-300 border border-red-500/20'
            }`}
          >
            {message.type === 'success' ? (
              <Check className="w-4 h-4 shrink-0" />
            ) : (
              <AlertTriangle className="w-4 h-4 shrink-0" />
            )}
            {message.text}
          </div>
        )}

        {/* 保存ボタン */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center gap-2 text-sm"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Check className="w-4 h-4" />
            )}
            {saving ? '保存中...' : '保存する'}
          </button>
        </div>
      </div>
    </div>
  );
}
