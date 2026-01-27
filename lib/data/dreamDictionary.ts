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
      {
        keyword: '鳥',
        slug: 'bird',
        summary: '自由、希望、視野の広がり',
        description: '鳥の夢は、心の解放や新しい目標への意欲を表します。空高く飛ぶ鳥は運気上昇の兆しであり、巣に戻る鳥は家庭や安心感を象徴します。',
      },
      {
        keyword: '魚',
        slug: 'fish',
        summary: '金運、直感、潜在能力',
        description: '魚は水中にいることから潜在意識や金運を象徴します。大きな魚はチャンスや豊かさの兆し、小さな魚は日常の小さな幸運を表します。',
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
      {
        keyword: '雨',
        slug: 'rain',
        summary: '浄化、感情の発散、再スタート',
        description: '雨の夢は心の浄化や感情の整理を象徴します。心地よい雨は癒やしのサイン、強い雨は溜め込んだ感情が噴き出す兆候です。',
      },
      {
        keyword: '山',
        slug: 'mountain',
        summary: '目標、挑戦、達成感',
        description: '山は大きな目標や課題を表します。登山の夢は努力や成長の過程を示し、山頂に辿り着く夢は目標達成の兆しを意味します。',
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
      {
        keyword: '職場',
        slug: 'workplace',
        summary: '責任、評価、自己成長',
        description: '職場の夢は仕事への意識や評価への不安を表します。忙しく動き回る夢は責任感の高まり、職場で迷う夢は方向性の再確認を示唆します。',
      },
      {
        keyword: '駅',
        slug: 'station',
        summary: '転機、選択、人生の節目',
        description: '駅は人生の分岐点や新しい旅立ちを象徴します。乗り換えが多い夢は迷いを、スムーズに乗れる夢は良い流れが来ている兆しです。',
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
      {
        keyword: '走る',
        slug: 'running',
        summary: '目標への意欲、焦り、状況の変化',
        description: '走る夢は目的に向かうエネルギーを示します。気持ちよく走れるなら前向きな変化、息切れする夢は焦りや負担の増加を意味します。',
      },
      {
        keyword: '泣く',
        slug: 'crying',
        summary: '感情の浄化、ストレス解放、癒やし',
        description: '泣く夢は心の浄化やストレスの解放を表します。大声で泣く夢は溜め込んだ感情を手放すサインであり、静かに涙を流す夢は癒やしの必要性を示します。',
      },
    ],
  },
  emotions: {
    name: '感情・心理',
    slug: 'emotions',
    emojis: '💓',
    items: [
      {
        keyword: '怒る',
        slug: 'anger',
        summary: '抑圧、自己主張、心の叫び',
        description: '怒る夢は、普段我慢している感情が表面化しているサインです。相手に怒る夢は本音を伝えたい気持ち、怒りを抑える夢はストレスの蓄積を示します。',
      },
      {
        keyword: '不安になる',
        slug: 'anxiety',
        summary: '未知への恐れ、慎重さ、課題の予兆',
        description: '不安を感じる夢は、現実の心配事や準備不足へのサインです。対処できている夢は成長の兆し、動けない夢は休息や計画の見直しを促しています。',
      },
      {
        keyword: '安心する',
        slug: 'relief',
        summary: '安定、回復、信頼関係',
        description: '安心する夢は心身の回復や安定感を象徴します。誰かと安心する夢は信頼関係の深まり、安心できない夢はまだ不安が残っていることを示します。',
      },
    ],
  },
};
