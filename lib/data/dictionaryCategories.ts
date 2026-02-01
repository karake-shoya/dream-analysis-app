export type DictionaryCategory = {
  slug: string;
  name: string;
  emojis: string;
};

export const DICTIONARY_CATEGORIES: DictionaryCategory[] = [
  { slug: 'animals', name: '動物・生き物', emojis: '🦊' },
  { slug: 'nature', name: '自然・天候', emojis: '⛈️' },
  { slug: 'places', name: '場所・建物', emojis: '🏰' },
  { slug: 'actions', name: '行動・出来事', emojis: '🏃' },
  { slug: 'emotions', name: '感情', emojis: '💓' },
  { slug: 'person', name: '人物・関係', emojis: '🧑‍🤝‍🧑' },
  { slug: 'situation', name: '状況・イベント', emojis: '📝' },
];

export function getCategoryBySlug(slug: string): DictionaryCategory | undefined {
  return DICTIONARY_CATEGORIES.find((cat) => cat.slug === slug);
}
