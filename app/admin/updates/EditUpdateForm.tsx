'use client'

import { useState } from 'react'
import { Pencil, Check, X } from 'lucide-react'
import { updateUpdate } from './actions'

interface Props {
  id: string
  date: string
  label: string
}

export function EditUpdateForm({ id, date, label }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const fd = new FormData(e.currentTarget)
    await updateUpdate(id, fd)
    setIsEditing(false)
    setIsLoading(false)
  }

  if (!isEditing) {
    return (
      <>
        <time className="shrink-0 text-[11px] text-gray-500 font-mono pt-1">{date}</time>
        <p className="flex-1 text-sm text-gray-200 leading-relaxed">{label}</p>
        <button
          type="button"
          onClick={() => setIsEditing(true)}
          className="shrink-0 p-1.5 rounded-lg text-gray-600 hover:text-purple-400 hover:bg-purple-400/10 transition-colors opacity-0 group-hover:opacity-100"
          title="編集"
        >
          <Pencil className="w-4 h-4" />
        </button>
      </>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          type="date"
          name="date"
          required
          defaultValue={date}
          className="w-40 shrink-0 rounded-lg bg-white/10 border border-purple-400/40 px-3 py-1.5 text-white text-sm focus:outline-none focus:border-purple-400/60"
        />
        <input
          type="text"
          name="label"
          required
          maxLength={200}
          defaultValue={label}
          className="flex-1 rounded-lg bg-white/10 border border-purple-400/40 px-3 py-1.5 text-white text-sm focus:outline-none focus:border-purple-400/60"
          autoFocus
        />
      </div>
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="flex items-center gap-1 px-3 py-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs"
        >
          <X className="w-3.5 h-3.5" />
          キャンセル
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors text-xs font-bold disabled:opacity-60"
        >
          <Check className="w-3.5 h-3.5" />
          {isLoading ? '保存中...' : '保存'}
        </button>
      </div>
    </form>
  )
}
