import type { SiteLocale } from "./types";

const ja: SiteLocale = {
  personalInfo: {
    nameJa: "吉田 俊輔",
    nameEn: "Shunsuke Yoshida",
    alias: "Marron",
    catchphrase: "課題を解く。\n事業を創る。",
    subcatchphrase: "16歳で起業。20年以上、社会課題を事業で解決し続ける自走型シリアルアントレプレナー。",
    birthDate: "1984年5月2日生",
    origin: "大阪府大阪市鶴見区出身",
    hobby: "ポーカー",
    hobbyLabel: "趣味",
    keywords: [
      "Serial Entrepreneur",
      "Social Problem Solver",
      "Poker Player",
      "Resilient Leader",
    ],
    coreIdentity:
      "高校1年で大前研一のアタッカーズ・ビジネススクールに入学し、16歳で起業。高校卒業と同時に半年間の引きこもりを経験するも、独学で再起。マン島の金融ライセンス取得、寺社NOW創刊、イオングループ飲食事業買収、有名寺院との宿坊ホテル開発など多様な事業を手掛け、現在は介護・ホスピタリティ・IT・国際事業を横断する12事業体の複合ポートフォリオを経営する自走型シリアルアントレプレナー。",
    stats: [
      { value: "20+", label: "起業家歴（年）" },
      { value: "12", label: "現役事業数" },
      { value: "6", label: "業種横断" },
      { value: "16", label: "歳で初起業" },
    ],
  },
  webPortfolio: [
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
  ],
  portfolio: [
    {
      company: "株式会社あん",
      role: "創業者・代表取締役",
      description: "社会課題解決型の複合プロジェクト運営",
      longDescription:
        "個人会社として複数の社会課題解決型プロジェクトを並行展開。各国難民受け入れの水耕栽培プロジェクト、ミャンマー飲食店事業、保証人代行事業、住宅難民専門の家賃保証会社の立ち上げに取り組む。また、映画投資・新規事業投資・スタートアップ投資への総合エクイティファンドの立ち上げも推進。",
      tags: ["Agriculture", "F&B", "Investment", "Guarantee"],
      accent: "navy",
      span: "normal",
    },
    {
      company: "株式会社dhpリゾート開発",
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
      company: "株式会社dhpケアマネジメント",
      role: "代表取締役",
      description: "訪問介護看護・高齢者向け不動産開発",
      longDescription:
        "訪問介護、訪問看護事業の運営に加え、高齢者・障害者向けの不動産開発・運営を手掛ける。介護と住居を一体化したサービス提供による包括的サポートを実現し、DHPグループの中核事業として社会インフラの一端を担う。",
      tags: ["Healthcare", "Care Management", "Real Estate", "Senior Living"],
      accent: "navy",
      span: "tall",
      group: "DHPグループ",
    },
    {
      company: "株式会社dhp都市開発",
      role: "執行役員・新規事業推進担当",
      description: "マリオットグループ等の高級リゾート開発・ヴィラ開発",
      longDescription:
        "鳥取砂丘でのマリオットグループホテル立ち上げ、軽井沢でのマリオットグループホテル開発、石垣島でのヴィラ開発・立ち上げなど、複数の高級リゾート開発プロジェクトを推進。さらにVC/DIDを活用した宿泊会員組織の構築や、最新技術による宿泊予約・顧客管理システムの開発にも取り組む。",
      tags: ["Urban Development", "Marriott", "Luxury Resort", "Villa"],
      accent: "neutral",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "株式会社dhpホスピタリティ",
      role: "取締役",
      description: "独自ブランド宿泊施設運営・宿坊和風ホテル・大手MF",
      longDescription:
        "独自ブランドでの宿泊施設の運営を軸に、大手ホテルグループのマスターフランチャイザーとしても事業展開。底地購入から建築、ブランド構築、オペレーションまで一貫した事業開発と多拠点展開を実現。",
      tags: ["Hospitality", "Master Franchisee", "Temple Hotel", "Operations"],
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
  ],
  timeline: [
    {
      year: "2000",
      title: "大前研一アタッカーズ・ビジネススクール入学",
      description:
        "高校1年生にして大前研一が主宰するアタッカーズ・ビジネススクールに入学。小中学生時代は学校に行く意味を見いだせず自宅で読書の日々を過ごしていたが、起業への意志を固め、ビジネスの基礎を学び始める。",
      detail: "高校1年生でビジネススクール入学",
    },
    {
      year: "2001",
      title: "16歳で「合資会社マッシュジャパン」創業",
      description:
        "高校在学中に友人3人と共同創業。WEB制作・システム開発事業と学生向けマーケティング代行事業を展開。同時期にNHK総合「真剣10代しゃべり場」にレギュラー出演し、全国的に注目を集める。2003年8月に解散。",
      detail: "NHK「真剣10代しゃべり場」レギュラー出演",
      highlight: true,
    },
    {
      year: "2003",
      title: "挫折と引きこもり、そして再起",
      description:
        "高校卒業と同時に完全引きこもりを半年間経験。20歳のときに15歳年上の女性と入籍。その後、独学での学びを通じて再起を果たす。この経験が「失敗は再現性が高い」という哲学の原点となる。",
      detail: "半年間の引きこもりから再起",
    },
    {
      year: "2010",
      title: "飲食・不動産・ホテル事業の多角展開",
      description:
        "イオングループ飲食事業の買収・運営、介護施設向け弁当事業の立ち上げ、介護食オペレーション構築を展開。収益不動産の売買、海外コワーキング事業（香港・マニラ・大阪・東京等）の開発、法隆寺・四天王寺等と協業した宿坊和風ホテル事業にも参画。",
      detail: "飲食 × 不動産 × ホスピタリティ",
    },
    {
      year: "2017",
      title: "マン島政府との金融ライセンス交渉",
      description:
        "開発責任者として、イギリス王室属領マン島の政府と直接交渉。金融ライセンスの取得、法人設立、税務最適化、オンライン事業の包括的開発・運営を主導し、国際ビジネスの礎を築く。",
      detail: "法人設立から税務最適化まで包括的に主導",
      highlight: true,
    },
    {
      year: "2016",
      title: "寺社専門フリーペーパー「寺社NOW」創刊",
      description:
        "企画・編集・発行責任者として寺社専門フリーペーパーを創刊。全国1.5万箇所の寺社への毎月の配布を統括し、寺社仏閣の魅力を広く発信。寺社観光協会の立ち上げ・運営にも携わり、文化事業とメディアビジネスの融合を実現。",
      detail: "全国1.5万箇所へ毎月配布",
    },
    {
      year: "2022",
      title: "合同会社TERAS-U 共同創業",
      description:
        "2022年7月に共同創業者・副代表として、賃貸住宅難民（高齢者・障害者）向けサブリース事業と訪問介護事業を立ち上げ。社会的弱者支援に特化したビジネスモデルを構築し、成長フェーズまで牽引した後、2024年8月に戦略的事業譲渡を完了。",
      detail: "2024年8月 事業譲渡 — EXIT経験",
    },
    {
      year: "2024",
      title: "複合ポートフォリオ経営の確立",
      description:
        "株式会社あん（9月〜）を創業。DHPグループ（リゾート開発・ケアマネジメント・都市開発・ホスピタリティ・FUDOKI・100doors・ウニクラフト・ミッチーノ）、IPLPF等、複数の事業体を横断的に経営。介護・ホスピタリティ・テクノロジー・第一次産業・国際協力・飲食の6業種を統括。",
      detail: "12事業体 × 6業種の統括経営",
      highlight: true,
    },
    {
      year: "2025",
      title: "介護職員実務者研修取得・事業拡大",
      description:
        "介護職員実務者研修を取得し、現場知見を経営に活かす体制を確立。dhpケアマネジメント代表取締役就任（1月〜）、dhp都市開発の執行役員就任（2月〜）。鳥取砂丘・軽井沢でのマリオットグループホテル開発、石垣島ヴィラ開発、兵庫県西宮市71床老人ホーム・京都伏見50部屋サポート住宅のオープンを推進中。",
      detail: "介護資格取得 × 複数大型プロジェクト始動",
      highlight: true,
    },
  ],
  achievements: [
    {
      category: "マン島事業",
      items: [
        "開発責任者として、マン島政府との直接交渉による金融ライセンス取得、法人設立、税務最適化、オンライン事業の包括的開発・運営を主導。",
      ],
    },
    {
      category: "痛スーツ事業",
      items: [
        "シードラウンドのファンドからの出資アレンジメント、パリジャパンEXPOでの出展支援、国際ビジネス展開。",
      ],
    },
    {
      category: "メディア事業",
      items: [
        "フリーペーパーの企画・立ち上げ・運営。",
        "「寺社NOW」の企画・編集・発行責任者として、全国1.5万箇所の寺社への毎月の配布を統括。",
      ],
    },
    {
      category: "イベント・団体",
      items: [
        "大阪ミナミでのアートイベントの企画・立ち上げ、寺社観光協会の立ち上げ・運営。",
      ],
    },
    {
      category: "IT事業",
      items: [
        "レンタルサーバー事業の立ち上げ、SEO対策会社の経営参画。",
        "WEBデザイン・システム開発",
      ],
    },
    {
      category: "金融事業",
      items: [
        "投資ファンドの開発・運営。",
        "キャプティブ（自家保険）の組成・開発",
      ],
    },
    {
      category: "飲食事業",
      items: [
        "イオングループ飲食事業の買収・運営。",
        "介護施設・在宅介護者専門のお弁当事業立ち上げ、介護食オペレーション構築、施設内給食室の立ち上げ支援。",
        "エンタテイメントダイニングの立ち上げ",
      ],
    },
    {
      category: "不動産事業",
      items: [
        "収益不動産の売買、海外コワーキング事業の開発（香港・マニラ・大阪・東京等）。",
      ],
    },
    {
      category: "ホテル事業",
      items: [
        "有名寺院（法隆寺・四天王寺・成田山新勝寺・三井寺）と協業した宿坊和風ホテル事業の展開。",
        "底地購入から建築、ブランド構築、オペレーションまで一貫した事業開発と多拠点展開。",
      ],
    },
  ],
  philosophy: {
    mainQuote: "成功は運や出会い、\nタイミングだけど、\n失敗は再現性が高い",
    subtext:
      "小中学生時代の不登校、16歳での起業、高校卒業と同時の引きこもり。そこから独学で再起し、20年以上にわたり社会課題を事業で解決し続ける。",
    beliefs: [
      {
        title: "失敗からの学び",
        text: "失敗には再現性がある。だからこそ、失敗のパターンを学び、同じ過ちを繰り返さないことが成功への最短ルートになる。",
      },
      {
        title: "自走する力",
        text: "小中学校に意味を見いだせず読書に没頭し、16歳で起業、引きこもりを経て独学で再起した。誰かに教わるのではなく、自分の足で歩き、自分の頭で考える。それが自走型起業家の原点。",
      },
      {
        title: "社会課題＝事業機会",
        text: "住宅難民、高齢者介護、地方創生——社会が抱える課題の中にこそ、持続可能なビジネスの種がある。課題を解くことが、事業を育てること。",
      },
    ],
  },
  galleryImages: [
    { src: "/gallery/01.jpg", alt: "高級レストラン" },
    { src: "/gallery/02.jpg", alt: "レストラン内観" },
    { src: "/gallery/03.jpg", alt: "ダイニング" },
    { src: "/gallery/04.jpg", alt: "料理" },
    { src: "/gallery/05.jpg", alt: "奈良の鹿" },
    { src: "/gallery/06.jpg", alt: "旅館" },
    { src: "/gallery/07.jpg", alt: "事業風景" },
    { src: "/gallery/08.jpg", alt: "事業風景" },
    { src: "/gallery/09.jpg", alt: "事業風景" },
    { src: "/gallery/10.png", alt: "ええかんご AA-KANGO" },
    { src: "/gallery/11.png", alt: "ええさぽーと" },
    { src: "/gallery/12.png", alt: "ブランドロゴ" },
    { src: "/gallery/13.jpg", alt: "チームメンバー" },
    { src: "/gallery/14.jpg", alt: "チームメンバー" },
    { src: "/gallery/15.jpg", alt: "ビジネスシーン" },
    { src: "/gallery/16.jpg", alt: "事業風景" },
    { src: "/gallery/17.png", alt: "ブランドロゴ" },
    { src: "/gallery/18.jpg", alt: "事業風景" },
    { src: "/gallery/19.jpg", alt: "事業風景" },
    { src: "/gallery/20.jpg", alt: "事業風景" },
    { src: "/gallery/21.jpg", alt: "チームメンバー" },
    { src: "/gallery/IMG_1318.jpeg", alt: "インフィニティプール・夕景" },
    { src: "/gallery/IMG_1324.jpeg", alt: "松林の夕焼け" },
    { src: "/gallery/IMG_1669.jpeg", alt: "インテリア・ドライフラワー" },
    { src: "/gallery/IMG_1711.jpeg", alt: "リゾートプール" },
    { src: "/gallery/IMG_1825.jpeg", alt: "奈良の鹿" },
    { src: "/gallery/IMG_1833.jpeg", alt: "和食・刺身盛り合わせ" },
  ],
  ui: {
    scroll: "Scroll",
    portfolio: {
      label: "Portfolio",
      title: "Current Ventures",
      subtitle: "2024 — 2025",
      clickHint: "DHPグループ included · Click cards for details",
    },
    history: {
      label: "History",
      title: "The Journey",
      subtitle: "2000 — Present",
    },
    achievements: {
      label: "Track Record",
      title: "主な事業実績",
    },
    philosophy: {
      label: "Philosophy",
      title: "信念",
    },
    webPortfolio: {
      badge: "AI CRAFTED",
      title: "Web Portfolio",
      description:
        "AIを活用して制作したウェブサイト。デザインから実装まで、最先端の技術で構築。",
      websites: "Websites",
      powered: "Powered",
      stack: "Stack",
    },
    gallery: {
      label: "Gallery",
      title: "Recent Photos",
      dragHint: "Drag to scroll · ドラッグでスクロール",
    },
    contact: {
      label: "Contact",
      title: "お問い合わせ",
      subtitle: "お気軽にご連絡ください",
      phoneLabel: "電話番号",
      phone: "070-8555-5952",
      emailAddress: "yoshida@aska-g.com",
      addressLabel: "",
      address: "",
      residenceLabel: "",
      residence: "",
      familyLabel: "家族構成",
      family: "年上の妻、娘1人、義母、愛犬（キャバプー）",
      nameLabel: "お名前",
      namePlaceholder: "山田 太郎",
      companyLabel: "会社名",
      companyPlaceholder: "株式会社〇〇",
      emailLabel: "メールアドレス",
      emailPlaceholder: "your@email.com",
      messageLabel: "メッセージ",
      messagePlaceholder: "お問い合わせ内容をご記入ください",
      submitButton: "送信する",
      submitHint: "送信ボタンをクリックするとメーラーが起動します",
      emailSubjectTemplate: "【お問い合わせ】{company}{name}様より",
      emailBodyNameLabel: "お名前",
      emailBodyCompanyLabel: "会社名",
      emailBodyEmailLabel: "メール",
    },
    footer: {
      navLinks: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "History", href: "#history" },
        { label: "Track Record", href: "#achievements" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
};

export default ja;
