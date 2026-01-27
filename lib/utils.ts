import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Tailwind CSS クラス名を結合するユーティリティ
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 日付を日本語形式でフォーマット
 * @param dateString - ISO 8601形式の日付文字列
 * @returns フォーマットされた日付文字列（例：2026年1月28日 00:03）
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * AI レスポンスから Markdown コードブロックを除去
 * @param text - AI からのレスポンステキスト
 * @returns クリーンなJSON文字列
 */
export function cleanJsonText(text: string): string {
  return text.replace(/```json/g, "").replace(/```/g, "").trim();
}
