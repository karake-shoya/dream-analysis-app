export type DictionaryItem = {
  keyword: string;
  summary: string;
  description: string;
  slug: string;
};

export type DictionaryCategory = {
  name: string;
  slug: string;
  emojis: string;
  items: DictionaryItem[];
};

export const DREAM_DICTIONARY: Record<string, DictionaryCategory> = {
  animals: {
    name: '動物・生き物',
    slug: 'animals',
    emojis: '🦊',
    items: [
      {
        keyword: '犬',
        slug: 'dog',
        summary: '忠誠心、友情、保護',
        description: '犬の夢は、あなたの周囲にいる信頼できる人物や、自分自身の誠実さを象徴しています。白い犬は幸運、黒い犬は対人関係のトラブルを暗示することもあります。',
      },
      {
        keyword: '猫',
        slug: 'cat',
        summary: '直感、女性性、独立心',
        description: '猫は神秘的な直感や自由な心を象徴します。また、身近な女性との関係や、あなたの中の秘密めいた部分を表すこともあります。',
      },
      {
        keyword: '蛇',
        slug: 'snake',
        summary: '再生、生命力、執着',
        description: '蛇は脱皮することから「再生」や「強い生命力」の象徴です。金運アップのサインとされることも多いですが、絡みつく蛇は強い執着心を意味します。',
      },
    ],
  },
  nature: {
    name: '自然・天候',
    slug: 'nature',
    emojis: '⛈️',
    items: [
      {
        keyword: '海',
        slug: 'sea',
        summary: '感情の深さ、潜在意識、母性',
        description: '広大な海はあなたの心の全体像を映し出します。穏やかで透き通った海は精神的な安定を、荒れ狂う海は感情の爆発や不安を象徴しています。',
      },
      {
        keyword: '空を飛ぶ',
        slug: 'flying',
        summary: '自由、解放、上昇志向',
        description: '空を飛ぶ夢は、現状からの解放や自由への渇望を意味します。気持ちよく飛んでいれば運気上昇のサインですが、うまく飛べない場合は理想と現実のギャップに悩んでいる可能性があります。',
      },
    ],
  },
  places: {
    name: '場所・建物',
    slug: 'places',
    emojis: '🏰',
    items: [
      {
        keyword: '家',
        slug: 'house',
        summary: '自分自身、生活の基盤、心身の状態',
        description: '家はあなた自身そのものを象徴します。新しい家や立派な家は自信の表れ、古い家や壊れた家は心身の疲れや過去への未練を暗示します。',
      },
      {
        keyword: '学校',
        slug: 'school',
        summary: '社会的な義務、学び、過去の葛藤',
        description: '学校は社会生活や規律を象徴します。テストを受ける夢はプレッシャーを、授業を受ける夢は新しい知識への意欲や、過去の経験から学ぶ必要性を示しています。',
      },
    ],
  },
  actions: {
    name: '行動・出来事',
    slug: 'actions',
    emojis: '🏃',
    items: [
      {
        keyword: '追いかけられる',
        slug: 'chased',
        summary: '精神的プレッシャー、不安、逃避',
        description: '何かに追われる夢は、現実世界で締め切りや人間関係の悩みにストレスを感じているサインです。逃げ切れるかどうかは、その問題を克服できるかどうかに結びついています。',
      },
      {
        keyword: '落ちる',
        slug: 'falling',
        summary: '自信の喪失、予期せぬ変化、健康不安',
        description: '高いところから落ちる夢は、現在の地位や自信を失うことへの不安を表します。また、眠りが浅い時や急激な体調の変化によって見ることも多い夢です。',
      },
    ],
  },
};
