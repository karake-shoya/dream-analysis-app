export type DictionaryIndexItem = {
  category: string;
  slug: string;
  keyword: string;
  summary: string;
  createdAt?: string;
};

export const DICTIONARY_INDEX: DictionaryIndexItem[] = [
  // animals
  { category: 'animals', slug: 'dog', keyword: '犬', summary: '忠誠心、友情、保護', createdAt: '2026-01-30' },
  { category: 'animals', slug: 'cat', keyword: '猫', summary: '直感、女性性、独立心' },
  { category: 'animals', slug: 'snake', keyword: '蛇', summary: '再生、生命力、執着' },
  { category: 'animals', slug: 'bird', keyword: '鳥', summary: '自由、希望、視野の広がり' },
  { category: 'animals', slug: 'fish', keyword: '魚', summary: '金運、直感、潜在能力' },
  // nature
  { category: 'nature', slug: 'sea', keyword: '海', summary: '感情の深さ、潜在意識、母性' },
  { category: 'nature', slug: 'flying', keyword: '空を飛ぶ', summary: '自由、解放、上昇志向' },
  { category: 'nature', slug: 'rain', keyword: '雨', summary: '浄化、感情の発散、再スタート' },
  { category: 'nature', slug: 'mountain', keyword: '山', summary: '目標、挑戦、達成感' },
  // places
  { category: 'places', slug: 'house', keyword: '家', summary: '自分自身、生活の基盤、心身の状態' },
  { category: 'places', slug: 'school', keyword: '学校', summary: '社会的な義務、学び、過去の葛藤' },
  { category: 'places', slug: 'workplace', keyword: '職場', summary: '責任、評価、自己成長' },
  { category: 'places', slug: 'station', keyword: '駅', summary: '転機、選択、人生の節目' },
  // actions
  { category: 'actions', slug: 'chased', keyword: '追いかけられる', summary: '精神的プレッシャー、不安、逃避', createdAt: '2026-01-30' },
  { category: 'actions', slug: 'falling', keyword: '落ちる', summary: '自信の喪失、予期せぬ変化、健康不安', createdAt: '2026-01-30' },
  { category: 'actions', slug: 'running', keyword: '走る', summary: '目標への意欲、焦り、状況の変化' },
  { category: 'actions', slug: 'crying', keyword: '泣く', summary: '感情の浄化、ストレス解放、癒やし' },
  // emotions
  { category: 'emotions', slug: 'anger', keyword: '怒る', summary: '抑圧、自己主張、心の叫び' },
  { category: 'emotions', slug: 'anxiety', keyword: '不安になる', summary: '未知への恐れ、慎重さ、課題の予兆' },
  { category: 'emotions', slug: 'relief', keyword: '安心する', summary: '安定、回復、信頼関係' },
];

export function getIndexByCategory(category: string): DictionaryIndexItem[] {
  return DICTIONARY_INDEX.filter((item) => item.category === category);
}

export function getIndexItem(category: string, slug: string): DictionaryIndexItem | undefined {
  return DICTIONARY_INDEX.find((item) => item.category === category && item.slug === slug);
}

export function getRecentItems(limit: number = 6): DictionaryIndexItem[] {
  return DICTIONARY_INDEX
    .filter((item) => item.createdAt)
    .sort((a, b) => {
      if (!a.createdAt || !b.createdAt) return 0;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, limit);
}
