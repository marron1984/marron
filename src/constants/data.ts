export const personalInfo = {
  nameJa: "吉田 俊輔",
  nameEn: "Shunsuke Yoshida",
  alias: "Marron",
  catchphrase: "社会課題を、事業で解く。",
  subcatchphrase: "16歳から続く、自走型起業家の軌跡。",
  birthDate: "1984年5月2日生",
  origin: "大阪府出身",
  hobby: "ポーカー",
  keywords: [
    "Serial Entrepreneur",
    "Social Problem Solver",
    "Poker Player",
    "Resilient Leader",
  ],
  coreIdentity:
    "16歳で起業し、教師を目指すも挫折。引きこもりを経て独学で再起。現在は介護・ホテル・IT・国際事業を横断する複合ポートフォリオを経営する、自走型シリアルアントレプレナー。",
  stats: [
    { value: "20+", label: "起業家歴（年）" },
    { value: "12", label: "現役事業数" },
    { value: "6", label: "業種横断" },
    { value: "16", label: "歳で初起業" },
  ],
} as const;

export interface WebSite {
  name: string;
  url: string;
  domain: string;
  tag: string;
}

export const webPortfolio: WebSite[] = [
  { name: "Kanoya", url: "https://kanoya.vercel.app/", domain: "kanoya.vercel.app", tag: "旅館" },
  { name: "Nara Kasuga", url: "https://www.instagram.com/stories/narakasuga/3831596670253123007?utm_source=ig_story_item_share&igsh=MWtqMnV3bjl0bDNtaw==", domain: "instagram.com", tag: "SNS" },
  { name: "DHP Hospitality", url: "https://dhp-hospi.com/ja", domain: "dhp-hospi.com", tag: "ホスピタリティ" },
  { name: "焼肉 Arata", url: "https://yakiniku-arata.com/", domain: "yakiniku-arata.com", tag: "飲食" },
  { name: "Hero", url: "https://hero-tau-pink.vercel.app/", domain: "hero-tau-pink.vercel.app", tag: "LP" },
  { name: "退職サービス", url: "https://taishoku-delta.vercel.app/", domain: "taishoku-delta.vercel.app", tag: "サービス" },
  { name: "Holy Ko", url: "https://holy-ko.vercel.app/", domain: "holy-ko.vercel.app", tag: "LP" },
  { name: "AA Adapt", url: "https://aa-adapt.com/", domain: "aa-adapt.com", tag: "コーポレート" },
  { name: "IPLPF", url: "https://iplpf.vercel.app/", domain: "iplpf.vercel.app", tag: "プラットフォーム" },
  { name: "AA 介護", url: "https://www.aa-kaigo.com/", domain: "aa-kaigo.com", tag: "介護" },
  { name: "AA 求人", url: "https://aa-kyujin2.vercel.app/", domain: "aa-kyujin2.vercel.app", tag: "求人" },
];

export interface PortfolioItem {
  company: string;
  role: string;
  description: string;
  longDescription: string;
  tags: string[];
  accent: "marron" | "navy" | "neutral";
  span: "wide" | "tall" | "normal";
  group?: string;
}

export const portfolio: PortfolioItem[] = [
  {
    company: "株式会社AA",
    role: "共同創業者・取締役副社長",
    description: "住宅難民支援 & ミャンマー事業",
    longDescription:
      "住宅確保要配慮者（住宅難民）への住居支援を中核とし、日本国内での社会課題に取り組む。ミャンマーにおける国際事業展開も推進し、社会的インパクトとビジネスの両立を追求。「ええかんご」「ええさぽーと」ブランドを展開。",
    tags: ["Social Impact", "Housing Support", "International", "Myanmar"],
    accent: "marron",
    span: "wide",
  },
  {
    company: "株式会社AAウズベキスタン",
    role: "代表取締役",
    description: "ウズベキスタン国内の介護事業提供・普及・コンサルティング",
    longDescription:
      "ウズベキスタン国内における介護事業の提供、普及及びコンサルティングを展開。日本で培った介護ノウハウを中央アジアに移転し、現地の高齢化社会に向けた介護インフラの構築と人材育成を推進する。",
    tags: ["Healthcare", "Uzbekistan", "Care Consulting", "International"],
    accent: "marron",
    span: "normal",
  },
  {
    company: "株式会社あん",
    role: "創業者・代表取締役",
    description: "水耕栽培、飲食店、投資事業",
    longDescription:
      "農業テック（水耕栽培）から飲食店運営、投資事業まで多角的に展開。食の生産から消費者への提供まで一貫したバリューチェーンを構築し、地域経済の活性化と持続可能な事業モデルを実現。",
    tags: ["Agriculture", "F&B", "Investment", "Hydroponic"],
    accent: "navy",
    span: "normal",
  },
  {
    company: "dhpリゾート開発",
    role: "執行役員",
    description: "Staytousブランド・奈良の高級旅館運営",
    longDescription:
      "「Staytous」ブランドの企画・運営を統括。奈良の歴史的景観を活かした高級旅館の開発・運営に携わり、インバウンド需要と日本の伝統文化を融合したラグジュアリーホスピタリティを提供。",
    tags: ["Hospitality", "Luxury Ryokan", "Staytous", "Nara"],
    accent: "marron",
    span: "normal",
    group: "DHPグループ",
  },
  {
    company: "dhpケアマネジメント",
    role: "代表取締役",
    description: "介護と住居の一体化サービス",
    longDescription:
      "超高齢社会の課題に対し、介護サービスと住居提供を一体化した革新的モデルを構築。ケアマネジメントの専門性を活かし、高齢者が安心して暮らせる環境を創出。DHPグループの中核事業として社会インフラの一端を担う。",
    tags: ["Healthcare", "Care Management", "Real Estate", "Senior Living"],
    accent: "navy",
    span: "tall",
    group: "DHPグループ",
  },
  {
    company: "dhp都市開発",
    role: "執行役員",
    description: "マリオットグループ等の高級リゾート開発",
    longDescription:
      "マリオット・インターナショナル等のグローバルブランドと連携し、高級リゾートの開発プロジェクトを推進。都市開発の観点から地域の価値向上と世界水準のホスピタリティ空間の創造に取り組む。",
    tags: ["Urban Development", "Marriott", "Luxury Resort", "Global"],
    accent: "neutral",
    span: "normal",
    group: "DHPグループ",
  },
  {
    company: "株式会社DHPホスピタリティ",
    role: "取締役",
    description: "独自ブランド宿泊施設運営・大手ホテルグループMF",
    longDescription:
      "独自ブランドでの宿泊施設の運営を軸に、大手ホテルグループのマスターフランチャイザーとしても事業展開。ブランディングからオペレーション設計まで一貫した高品質ホスピタリティを実現。",
    tags: ["Hospitality", "Master Franchisee", "Hotel Brand", "Operations"],
    accent: "marron",
    span: "normal",
    group: "DHPグループ",
  },
  {
    company: "株式会社FUDOKI",
    role: "取締役",
    description: "一次産業品のブランディング及びコンサルティング",
    longDescription:
      "一次産業品のブランディング及びコンサルティングを手掛ける。農産物・水産物の価値向上を通じて、生産者と消費者を結ぶ新しい流通・ブランド戦略を構築。地域の一次産業を世界基準へ引き上げる。",
    tags: ["Branding", "Consulting", "Primary Industry", "Agriculture"],
    accent: "navy",
    span: "normal",
    group: "DHPグループ",
  },
  {
    company: "株式会社100doors",
    role: "創業者・代表取締役",
    description: "VC/DIDを活用した次世代宿泊システム開発",
    longDescription:
      "Verifiable Credentials（VC）とDecentralized ID（DID）技術を活用し、宿泊業界のDXを推進。チェックイン・本人確認のシームレス化、予約管理の効率化を実現する次世代プラットフォームを開発。",
    tags: ["Web3", "DID/VC", "PropTech", "Hospitality Tech"],
    accent: "marron",
    span: "wide",
    group: "DHPグループ",
  },
  {
    company: "合同会社ウニクラフトカンパニー",
    role: "企画執行役員",
    description: "北紫ウニ陸上養殖事業",
    longDescription:
      "北海道産の北紫ウニを陸上養殖する革新的な水産事業。天然資源の持続可能な利用と安定供給を両立し、高付加価値な水産物の新しい生産モデルを確立。養殖技術の研究開発から商品化まで一貫して手掛ける。",
    tags: ["Aquaculture", "Sea Urchin", "Sustainability", "Innovation"],
    accent: "navy",
    span: "normal",
    group: "DHPグループ",
  },
  {
    company: "株式会社ミッチーノ",
    role: "取締役",
    description: "特定支援機関",
    longDescription:
      "特定支援機関として、外国人材の受入れ支援や在留資格に関する各種サポートを提供。行政手続きから生活支援まで一貫した支援体制を構築し、多文化共生社会の実現に貢献する。",
    tags: ["Support Agency", "Immigration", "Multicultural", "Consulting"],
    accent: "marron",
    span: "normal",
    group: "DHPグループ",
  },
  {
    company: "一般財団法人国際ピース・ラビング・ピープル財団",
    role: "事務局 ミャンマー担当",
    description: "国際協力・国連支援事業",
    longDescription:
      "一般財団法人国際ピース・ラビング・ピープル財団（IPLPF）の事務局としてミャンマー担当を務める。国際協力および国連支援事業を通じて、ミャンマーの平和構築と持続可能な発展に貢献。社会起業家としての知見を国際舞台で活かす。",
    tags: ["International", "UN Support", "Myanmar", "Peace Building"],
    accent: "navy",
    span: "wide",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail?: string;
  highlight?: boolean;
}

export const timeline: TimelineEvent[] = [
  {
    year: "2001",
    title: "16歳で「合資会社マッシュジャパン」創業",
    description:
      "高校在学中に起業。同時期にNHK「真剣10代しゃべり場」にレギュラー出演し、全国的に注目を集める。10代にして事業の立ち上げからメディア対応まで経験。",
    detail: "NHK「真剣10代しゃべり場」レギュラー出演",
    highlight: true,
  },
  {
    year: "—",
    title: "挫折と引きこもり、そして再起",
    description:
      "教師を目指すも挫折。引きこもりの時期を経験するが、独学での学びを通じて再起を果たす。この経験が「失敗は再現性が高い」という哲学の原点となる。",
    detail: "独学での成長期",
  },
  {
    year: "—",
    title: "マン島政府との金融ライセンス交渉",
    description:
      "イギリス王室属領マン島の政府と直接交渉し、金融ライセンスの取得に成功。国際金融の世界での交渉力と事業構築能力を発揮し、海外事業展開の礎を築く。",
    detail: "国際金融ライセンス取得",
    highlight: true,
  },
  {
    year: "—",
    title: "寺社専門フリーペーパー「寺社NOW」創刊",
    description:
      "日本文化の発信メディアとして寺社専門フリーペーパーを創刊。寺社仏閣の魅力を広く発信し、文化事業とメディアビジネスの融合を実現。",
    detail: "文化 × メディア事業",
  },
  {
    year: "—",
    title: "介護食・給食オペレーション構築",
    description:
      "介護施設向けの食事提供オペレーションを構築。栄養管理から調理工程、配送まで一貫したシステムを設計し、介護業界における食のインフラを整備。現在のヘルスケア事業の原点。",
    detail: "ヘルスケア × フードサービス",
  },
  {
    year: "2022",
    title: "合同会社TERAS-U 共同創業",
    description:
      "共同創業者として新事業を立ち上げ。事業の成長フェーズまで牽引した後、戦略的に事業譲渡を完了。スタートアップの立ち上げからEXITまでの全工程を経験。",
    detail: "事業譲渡済み — EXIT経験",
  },
  {
    year: "2024",
    title: "複合ポートフォリオ経営の確立",
    description:
      "DHPグループ（リゾート開発・ケアマネジメント・都市開発・ホスピタリティ・FUDOKI・100doors・ウニクラフト・ミッチーノ）、株式会社AA、AAウズベキスタン、株式会社あん、IPLPF等、12の事業体を横断的に経営。介護・ホスピタリティ・テクノロジー・第一次産業・国際協力・飲食の6業種を統括。",
    detail: "12事業体 × 6業種の統括経営",
    highlight: true,
  },
];

export const philosophy = {
  mainQuote: "成功は運や出会い、タイミングだけど、失敗は再現性が高い",
  subtext:
    "16歳での挫折、引きこもり経験、そして独学での成長。失敗から学び、社会課題を事業で解決する。",
  beliefs: [
    {
      title: "失敗からの学び",
      text: "失敗には再現性がある。だからこそ、失敗のパターンを学び、同じ過ちを繰り返さないことが成功への最短ルートになる。",
    },
    {
      title: "自走する力",
      text: "16歳で起業し、引きこもりを経験し、独学で再起した。誰かに教わるのではなく、自分の足で歩き、自分の頭で考える。それが自走型起業家の原点。",
    },
    {
      title: "社会課題＝事業機会",
      text: "住宅難民、高齢者介護、地方創生——社会が抱える課題の中にこそ、持続可能なビジネスの種がある。課題を解くことが、事業を育てること。",
    },
  ],
} as const;
