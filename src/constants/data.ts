export const personalInfo = {
  nameJa: "吉田 俊輔",
  nameEn: "Shunsuke Yoshida",
  alias: "Marron",
  catchphrase: "社会課題を、事業で解く。16歳から続く、自走型起業家の軌跡。",
  birthDate: "1984年5月2日生",
  origin: "大阪府出身",
  hobby: "ポーカー",
  keywords: [
    "Serial Entrepreneur",
    "Social Problem Solver",
    "Poker Player",
    "Resilient Leader",
  ],
} as const;

export interface PortfolioItem {
  company: string;
  role: string;
  description: string;
  tags: string[];
  accent: "marron" | "navy" | "neutral";
  span: "wide" | "tall" | "normal";
}

export const portfolio: PortfolioItem[] = [
  {
    company: "株式会社AA",
    role: "共同創業者・取締役副社長",
    description: "住宅難民支援 & ミャンマー事業",
    tags: ["Social Impact", "International"],
    accent: "marron",
    span: "wide",
  },
  {
    company: "株式会社あん",
    role: "創業者・代表取締役",
    description: "水耕栽培、飲食店、投資事業",
    tags: ["Agriculture", "F&B", "Investment"],
    accent: "navy",
    span: "normal",
  },
  {
    company: "dhpリゾート開発",
    role: "執行役員",
    description: "Staytousブランド、奈良の高級旅館運営",
    tags: ["Hospitality", "Luxury"],
    accent: "marron",
    span: "normal",
  },
  {
    company: "dhpケアマネジメント",
    role: "代表取締役",
    description: "介護と住居の一体化",
    tags: ["Healthcare", "Real Estate"],
    accent: "navy",
    span: "tall",
  },
  {
    company: "dhp都市開発",
    role: "執行役員",
    description: "マリオットグループ等の高級リゾート開発",
    tags: ["Development", "Luxury Resort"],
    accent: "neutral",
    span: "normal",
  },
  {
    company: "株式会社100doors",
    role: "創業者・代表取締役",
    description: "VC/DIDを活用した宿泊システム開発",
    tags: ["Tech", "Web3", "Hospitality"],
    accent: "marron",
    span: "wide",
  },
  {
    company: "合同会社ウニクラフトカンパニー",
    role: "企画執行役員",
    description: "北紫ウニ陸上養殖",
    tags: ["Aquaculture", "Innovation"],
    accent: "navy",
    span: "normal",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  highlight?: boolean;
}

export const timeline: TimelineEvent[] = [
  {
    year: "2001",
    title: "16歳で起業",
    description:
      "「合資会社マッシュジャパン」創業。NHK「真剣10代しゃべり場」レギュラー出演。",
    highlight: true,
  },
  {
    year: "2003",
    title: "初期事業展開",
    description: "若き起業家として多方面での事業開発に着手。",
  },
  {
    year: "—",
    title: "マン島政府との交渉",
    description: "マン島政府との交渉による金融ライセンス取得。",
    highlight: true,
  },
  {
    year: "—",
    title: "寺社NOW創刊",
    description: "寺社専門フリーペーパー「寺社NOW」創刊。",
  },
  {
    year: "—",
    title: "介護食・給食事業",
    description: "介護食・給食オペレーション構築。",
  },
  {
    year: "2022",
    title: "合同会社TERAS-U",
    description: "共同創業者として事業立ち上げ（後に事業譲渡済み）。",
  },
  {
    year: "2024",
    title: "現在のポートフォリオ",
    description:
      "DHPグループ、AA、100doors等、複数企業の経営に携わる。",
    highlight: true,
  },
];

export const philosophy = {
  mainQuote: "成功は運や出会い、タイミングだけど、失敗は再現性が高い",
  subtext:
    "16歳での挫折、引きこもり経験、そして独学での成長。失敗から学び、社会課題を事業で解決する。",
} as const;
