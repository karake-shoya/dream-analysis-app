export type DreamDictionaryIndexItem = {
  slug: string;
  title: string;
  summary: string;
};

export type DreamDictionaryCategoryIndex = {
  category: string;
  items: DreamDictionaryIndexItem[];
};

export const DREAM_DICTIONARY_INDEX: DreamDictionaryCategoryIndex[] = [
  {
    category: 'animals',
    items: [
      { slug: 'dog', title: '犬', summary: '信頼と支えが育つ心の兆し' },
      { slug: 'cat', title: '猫', summary: '自由さと直感が冴える兆し' },
      { slug: 'snake', title: '蛇', summary: '変化と再生を促す心のサイン' },
      { slug: 'bird', title: '鳥', summary: '視野が広がる自由への予感' },
      { slug: 'fish', title: '魚', summary: '内面の豊かさに気づく兆し' },
    ],
  },
  {
    category: 'nature',
    items: [
      { slug: 'sea', title: '海', summary: '感情の深さに向き合う兆し' },
      { slug: 'flying', title: '空を飛ぶ', summary: '解放感と挑戦心が高まる時' },
      { slug: 'rain', title: '雨', summary: '浄化と再出発へ向かう兆し' },
      { slug: 'mountain', title: '山', summary: '目標へ進む意欲が高まる時' },
    ],
  },
  {
    category: 'places',
    items: [
      { slug: 'house', title: '家', summary: '心身の土台を整えるサイン' },
      { slug: 'school', title: '学校', summary: '学び直しへの意識が高まる' },
      { slug: 'workplace', title: '職場', summary: '評価と責任の揺らぎを示す' },
      { slug: 'station', title: '駅', summary: '転機と選択が近づくサイン' },
    ],
  },
  {
    category: 'actions',
    items: [
      { slug: 'chased', title: '追いかけられる', summary: '焦りと圧力が強まる心の兆し' },
      { slug: 'falling', title: '落ちる', summary: '不安と不安定さが表れる兆し' },
      { slug: 'running', title: '走る', summary: '前進への意欲が高まる時期' },
      { slug: 'crying', title: '泣く', summary: '感情の解放と癒やしが進む' },
    ],
  },
  {
    category: 'emotions',
    items: [
      { slug: 'anger', title: '怒る', summary: '自己主張の目覚めが進む兆し' },
      { slug: 'anxiety', title: '不安になる', summary: '慎重さが増す時期のサイン' },
      { slug: 'relief', title: '安心する', summary: '緊張がほどけ回復へ向かう' },
    ],
  },
];

export type FlattenedDictionaryItem = DreamDictionaryIndexItem & {
  category: string;
};

export function getIndexByCategory(category: string): DreamDictionaryIndexItem[] {
  return DREAM_DICTIONARY_INDEX.find((item) => item.category === category)?.items ?? [];
}

export function getIndexItem(category: string, slug: string): DreamDictionaryIndexItem | undefined {
  return getIndexByCategory(category).find((item) => item.slug === slug);
}

export function getAllIndexItems(): FlattenedDictionaryItem[] {
  return DREAM_DICTIONARY_INDEX.flatMap((group) =>
    group.items.map((item) => ({ ...item, category: group.category }))
  );
}
