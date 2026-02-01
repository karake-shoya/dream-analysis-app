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
      { slug: 'bird', title: '鳥', summary: '視野が広がる自由への予感' },
      { slug: 'cow', title: '牛', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'dog', title: '犬', summary: '信頼と支えが育つ心の兆し' },
      { slug: 'fish', title: '魚', summary: '内面の豊かさに気づく兆し' },
      { slug: 'insect', title: '虫', summary: '小さな不満に気づく合図のサイン' },
      { slug: 'mouse', title: '鼠', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'spider', title: '蜘蛛', summary: '不安と集中が絡む兆しを示す' },
    ],
  },
  {
    category: 'nature',
    items: [
      { slug: 'earthquake', title: '地震', summary: '土台の揺らぎを示す警告サイン' },
      { slug: 'fire', title: '火', summary: '情熱と緊張の高まりを示す兆し' },
      { slug: 'flying', title: '空を飛ぶ', summary: '解放感と挑戦心が高まる時' },
      { slug: 'mountain', title: '山', summary: '目標へ進む意欲が高まる時' },
      { slug: 'rain', title: '雨', summary: '浄化と再出発へ向かう兆し' },
      { slug: 'sea', title: '海', summary: '感情の深さに向き合う兆し' },
      { slug: 'snow', title: '雪', summary: '心を冷静に整える合図です' },
      { slug: 'storm', title: '嵐', summary: '感情の揺れを知らせる兆し' },
    ],
  },
  {
    category: 'places',
    items: [
      { slug: 'hospital', title: '病院', summary: '回復への意識が高まる兆し' },
      { slug: 'house', title: '家', summary: '心身の土台を整えるサイン' },
      { slug: 'school', title: '学校', summary: '学び直しへの意識が高まる' },
      { slug: 'station', title: '駅', summary: '転機と選択が近づくサイン' },
      { slug: 'toilet', title: 'トイレ', summary: '感情を浄化したい気持ちの表れ' },
      { slug: 'workplace', title: '職場', summary: '評価と責任の揺らぎを示す' },
    ],
  },
  {
    category: 'actions',
    items: [
      { slug: 'almost-killed', title: '殺されそうになる', summary: '殺されそうになるが映す心の兆し' },
      { slug: 'chased', title: '追いかけられる', summary: '追いかけられるが映す心の兆し' },
      { slug: 'crying', title: '泣く', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'die', title: '死ぬ', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'escape', title: '逃げる', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'falling', title: '落ちる', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'falling-from-height', title: '高いところから落ちる', summary: '高いところから落ちるが映す心の兆し' },
      { slug: 'falling-teeth', title: '歯が抜ける', summary: '自信の揺らぎに気づく兆し' },
      { slug: 'fight', title: '喧嘩する', summary: '衝突の予兆と気づきを示す' },
      { slug: 'kiss', title: 'キスする', summary: '親密さへの欲求が高まる兆し' },
      { slug: 'lost', title: '迷子になる', summary: '方向性の迷いを示すサイン' },
      { slug: 'naked', title: '裸になる', summary: '無防備さを意識するサイン' },
      { slug: 'phone-broken', title: 'スマホが壊れる', summary: '連絡不安を知らせるサイン' },
      { slug: 'running', title: '走る', summary: '心の整理がゆるやかに進むサイン' },
    ],
  },
  {
    category: 'emotions',
    items: [
      { slug: 'anger', title: '怒る', summary: '自己主張の目覚めが進む兆し' },
      { slug: 'anxiety', title: '不安になる', summary: '慎重さが増す時期のサイン' },
      { slug: 'lonely', title: '孤独を感じる', summary: 'つながり不足への気づきのサイン' },
      { slug: 'relief', title: '安心する', summary: '緊張がほどけ回復へ向かう' },
    ],
  },
  {
    category: 'emotion',
    items: [
      { slug: 'anxious', title: '不安', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'happy', title: '嬉しい', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'sad', title: '悲しい', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'scared', title: '怖い', summary: '心の整理がゆるやかに進むサイン' },
    ],
  },
  {
    category: 'person',
    items: [
      { slug: 'baby', title: '赤ちゃん', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'celebrity', title: '有名人', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'child', title: '子ども', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'crush', title: '好きな人', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'ex-boyfriend', title: '元彼', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'ex-boyfriend-appears', title: '元彼が出てくる', summary: '元彼が出てくるが映す心の兆し' },
      { slug: 'family', title: '家族', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'friend', title: '友達', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'stranger', title: '知らない人', summary: '知らない人が映す心の兆し' },
      { slug: 'unknown-opposite-sex', title: '知らない異性', summary: '知らない異性が映す心の兆し' },
    ],
  },
  {
    category: 'situation',
    items: [
      { slug: 'accident', title: '事故', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'exam', title: '試験', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'fire', title: '火事', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'late', title: '遅刻', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'marriage', title: '結婚する', summary: '心の整理がゆるやかに進むサイン' },
      { slug: 'pregnancy', title: '妊娠する', summary: '心の整理がゆるやかに進むサイン' },
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
