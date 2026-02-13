import type { SiteLocale } from "./types";

const en: SiteLocale = {
  personalInfo: {
    nameJa: "吉田 俊輔",
    nameEn: "Shunsuke Yoshida",
    alias: "Marron",
    catchphrase: "Solving social issues through business.",
    subcatchphrase: "The journey of a self-driven entrepreneur, since age 16.",
    birthDate: "Born May 2, 1984",
    origin: "From Osaka, Japan",
    hobby: "Poker",
    keywords: [
      "Serial Entrepreneur",
      "Social Problem Solver",
      "Poker Player",
      "Resilient Leader",
    ],
    coreIdentity:
      "Started his first business at 16, aspired to become a teacher but faced setbacks. After a period of withdrawal, he rebuilt himself through self-education. Today, he manages a diversified portfolio spanning care, hospitality, IT, and international operations as a self-driven serial entrepreneur.",
    stats: [
      { value: "20+", label: "Years as Entrepreneur" },
      { value: "12", label: "Active Businesses" },
      { value: "6", label: "Industries Spanned" },
      { value: "16", label: "Age at First Venture" },
    ],
  },
  webPortfolio: [
    { name: "Kanoya", url: "https://kanoya.vercel.app/", domain: "kanoya.vercel.app", tag: "Ryokan" },
    { name: "Nara Kasuga", url: "https://www.instagram.com/stories/narakasuga/3831596670253123007?utm_source=ig_story_item_share&igsh=MWtqMnV3bjl0bDNtaw==", domain: "instagram.com", tag: "SNS" },
    { name: "DHP Hospitality", url: "https://dhp-hospi.com/ja", domain: "dhp-hospi.com", tag: "Hospitality" },
    { name: "焼肉 Arata", url: "https://yakiniku-arata.com/", domain: "yakiniku-arata.com", tag: "Restaurant" },
    { name: "Hero", url: "https://hero-tau-pink.vercel.app/", domain: "hero-tau-pink.vercel.app", tag: "LP" },
    { name: "退職サービス", url: "https://taishoku-delta.vercel.app/", domain: "taishoku-delta.vercel.app", tag: "Service" },
    { name: "Holy Ko", url: "https://holy-ko.vercel.app/", domain: "holy-ko.vercel.app", tag: "LP" },
    { name: "AA Adapt", url: "https://aa-adapt.com/", domain: "aa-adapt.com", tag: "Corporate" },
    { name: "IPLPF", url: "https://iplpf.vercel.app/", domain: "iplpf.vercel.app", tag: "Platform" },
    { name: "AA 介護", url: "https://www.aa-kaigo.com/", domain: "aa-kaigo.com", tag: "Care" },
    { name: "AA 求人", url: "https://aa-kyujin2.vercel.app/", domain: "aa-kyujin2.vercel.app", tag: "Recruitment" },
  ],
  portfolio: [
    {
      company: "株式会社AA",
      role: "Co-founder & Executive Vice President",
      description: "Housing refugee support & Myanmar operations",
      longDescription:
        "Focused on providing housing support for people in need of housing security (housing refugees), tackling critical social challenges in Japan. Also drives international business expansion in Myanmar, pursuing both social impact and sustainable business growth. Operates the 'Ee Kaigo' and 'Ee Support' brands.",
      tags: ["Social Impact", "Housing Support", "International", "Myanmar"],
      accent: "marron",
      span: "wide",
    },
    {
      company: "株式会社AAウズベキスタン",
      role: "CEO & Representative Director",
      description: "Care services, outreach & consulting in Uzbekistan",
      longDescription:
        "Provides care services, promotes awareness, and delivers consulting in Uzbekistan. Transfers care expertise cultivated in Japan to Central Asia, building care infrastructure and developing human resources to address the country's aging population.",
      tags: ["Healthcare", "Uzbekistan", "Care Consulting", "International"],
      accent: "marron",
      span: "normal",
    },
    {
      company: "株式会社あん",
      role: "Founder & CEO",
      description: "Hydroponic farming, restaurants & investment",
      longDescription:
        "Operates a diversified portfolio spanning agricultural technology (hydroponics), restaurant management, and investment. Builds an integrated value chain from food production to consumer delivery, driving regional economic revitalization and sustainable business models.",
      tags: ["Agriculture", "F&B", "Investment", "Hydroponic"],
      accent: "navy",
      span: "normal",
    },
    {
      company: "dhpリゾート開発",
      role: "Executive Officer",
      description: "Staytous brand & luxury ryokan operations in Nara",
      longDescription:
        "Oversees planning and operations of the 'Staytous' brand. Develops and manages luxury ryokan (traditional Japanese inns) that leverage Nara's historic landscape, delivering premium hospitality that blends inbound tourism demand with traditional Japanese culture.",
      tags: ["Hospitality", "Luxury Ryokan", "Staytous", "Nara"],
      accent: "marron",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "dhpケアマネジメント",
      role: "CEO & Representative Director",
      description: "Integrated care and housing services",
      longDescription:
        "Addresses the challenges of a super-aging society by building an innovative model that integrates care services with housing provision. Leverages care management expertise to create environments where elderly residents can live with peace of mind. Serves as a core business within the DHP Group, contributing to essential social infrastructure.",
      tags: ["Healthcare", "Care Management", "Real Estate", "Senior Living"],
      accent: "navy",
      span: "tall",
      group: "DHP Group",
    },
    {
      company: "dhp都市開発",
      role: "Executive Officer",
      description: "Luxury resort development with Marriott and others",
      longDescription:
        "Advances luxury resort development projects in partnership with global brands such as Marriott International. Takes an urban development perspective to enhance regional value and create world-class hospitality destinations.",
      tags: ["Urban Development", "Marriott", "Luxury Resort", "Global"],
      accent: "neutral",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "株式会社DHPホスピタリティ",
      role: "Director",
      description: "Proprietary hotel brand operations & major hotel group MF",
      longDescription:
        "Operates proprietary-brand accommodation facilities while also serving as a master franchisee for major hotel groups. Delivers consistently high-quality hospitality across the entire chain, from branding to operational design.",
      tags: ["Hospitality", "Master Franchisee", "Hotel Brand", "Operations"],
      accent: "marron",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "株式会社FUDOKI",
      role: "Director",
      description: "Branding & consulting for primary industries",
      longDescription:
        "Specializes in branding and consulting for primary industry products. Elevates the value of agricultural and marine products by developing new distribution and brand strategies that connect producers with consumers, raising regional primary industries to global standards.",
      tags: ["Branding", "Consulting", "Primary Industry", "Agriculture"],
      accent: "navy",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "株式会社100doors",
      role: "Founder & CEO",
      description: "Next-gen hospitality systems using VC/DID technology",
      longDescription:
        "Drives digital transformation in the hospitality industry using Verifiable Credentials (VC) and Decentralized ID (DID) technology. Develops a next-generation platform that enables seamless check-in, identity verification, and streamlined reservation management.",
      tags: ["Web3", "DID/VC", "PropTech", "Hospitality Tech"],
      accent: "marron",
      span: "wide",
      group: "DHP Group",
    },
    {
      company: "合同会社ウニクラフトカンパニー",
      role: "Executive Officer, Planning",
      description: "Land-based sea urchin aquaculture",
      longDescription:
        "An innovative aquaculture venture specializing in land-based farming of Hokkaido purple sea urchin (Kita-murasaki uni). Balances sustainable use of natural resources with stable supply, establishing a new production model for high-value marine products. Manages the entire process from R&D in aquaculture technology to commercialization.",
      tags: ["Aquaculture", "Sea Urchin", "Sustainability", "Innovation"],
      accent: "navy",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "株式会社ミッチーノ",
      role: "Director",
      description: "Registered support organization for foreign nationals",
      longDescription:
        "Operates as a registered support organization, providing comprehensive assistance for the acceptance of foreign workers, including visa and residency status support. Builds a seamless support framework from administrative procedures to daily life assistance, contributing to the realization of a multicultural society.",
      tags: ["Support Agency", "Immigration", "Multicultural", "Consulting"],
      accent: "marron",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "一般財団法人国際ピース・ラビング・ピープル財団",
      role: "Secretariat, Myanmar Division",
      description: "International cooperation & UN support programs",
      longDescription:
        "Serves as the Myanmar Division lead in the secretariat of the International Peace Loving People Foundation (IPLPF). Contributes to peacebuilding and sustainable development in Myanmar through international cooperation and UN support programs, bringing social entrepreneurship expertise to the global stage.",
      tags: ["International", "UN Support", "Myanmar", "Peace Building"],
      accent: "navy",
      span: "wide",
    },
  ],
  timeline: [
    {
      year: "2001",
      title: "Founded 'Mash Japan' at age 16",
      description:
        "Launched his first business while still in high school. During the same period, appeared as a regular on NHK's 'Shinken 10-dai Shaberiba' (a national youth debate show), gaining nationwide attention. Gained hands-on experience in both business operations and media relations as a teenager.",
      detail: "Regular on NHK's national youth debate show",
      highlight: true,
    },
    {
      year: "\u2014",
      title: "Setback, withdrawal, and comeback",
      description:
        "Aspired to become a teacher but faced a major setback. Went through a period of social withdrawal (hikikomori), then rebuilt himself through self-directed learning. This experience became the foundation of his philosophy: 'Failure is highly reproducible.'",
      detail: "A period of self-directed growth",
    },
    {
      year: "\u2014",
      title: "Financial license negotiations with the Isle of Man government",
      description:
        "Negotiated directly with the government of the Isle of Man, a British Crown Dependency, and successfully obtained a financial license. Demonstrated international negotiation skills and business-building capabilities, laying the foundation for overseas expansion.",
      detail: "International financial license acquisition",
      highlight: true,
    },
    {
      year: "\u2014",
      title: "Launched 'Jisha NOW', a free magazine for temples and shrines",
      description:
        "Founded a free publication dedicated to Japanese temples and shrines as a platform for cultural outreach. Broadly communicated the appeal of Japan's sacred sites, pioneering a fusion of cultural programming and media business.",
      detail: "Culture x Media venture",
    },
    {
      year: "\u2014",
      title: "Built care meal & catering operations",
      description:
        "Designed and built food service operations for care facilities. Created an end-to-end system covering nutrition management, cooking processes, and delivery, establishing food infrastructure for the care industry. This became the origin of his current healthcare ventures.",
      detail: "Healthcare x Food Service",
    },
    {
      year: "2022",
      title: "Co-founded TERAS-U LLC",
      description:
        "Co-founded a new venture and led it through its growth phase before completing a strategic business transfer. Gained full-cycle startup experience from launch to exit.",
      detail: "Business transferred \u2014 Exit experience",
    },
    {
      year: "2024",
      title: "Established a diversified portfolio management model",
      description:
        "Now manages 12 business entities across 6 industries, including the DHP Group (resort development, care management, urban development, hospitality, FUDOKI, 100doors, Uni Craft, Mitchino), 株式会社AA, AA Uzbekistan, 株式会社あん, IPLPF, and more. Spans care, hospitality, technology, primary industries, international cooperation, and food & beverage.",
      detail: "12 entities x 6 industries under unified management",
      highlight: true,
    },
  ],
  philosophy: {
    mainQuote: "Success depends on luck, connections, and timing \u2014 but failure is highly reproducible.",
    subtext:
      "Setbacks at 16, a period of withdrawal, and growth through self-education. Learning from failure to solve social issues through business.",
    beliefs: [
      {
        title: "Learning from Failure",
        text: "Failure follows patterns. By studying those patterns and refusing to repeat the same mistakes, you find the shortest path to success.",
      },
      {
        title: "The Power of Self-Reliance",
        text: "Starting a business at 16, going through withdrawal, and rebuilding through self-education. Not waiting to be taught, but walking on your own feet and thinking with your own mind \u2014 that is the origin of a self-driven entrepreneur.",
      },
      {
        title: "Social Problems = Business Opportunities",
        text: "Housing insecurity, elder care, regional revitalization \u2014 the seeds of sustainable business lie within the challenges society faces. Solving problems is growing business.",
      },
    ],
  },
  ui: {
    scroll: "Scroll",
    portfolio: {
      label: "Portfolio",
      title: "Current Ventures",
      subtitle: "2024 \u2014 2025",
      clickHint: "DHP Group included \u00b7 Click cards for details",
    },
    history: {
      label: "History",
      title: "The Journey",
      subtitle: "2001 \u2014 Present",
    },
    philosophy: {
      label: "Philosophy",
      title: "Beliefs",
    },
    webPortfolio: {
      badge: "AI CRAFTED",
      title: "Web Portfolio",
      description:
        "Websites built with AI. Designed and developed using cutting-edge technology, from concept to deployment.",
      websites: "Websites",
      powered: "Powered",
      stack: "Stack",
    },
    gallery: {
      label: "Gallery",
      title: "Recent Photos",
      dragHint: "Drag to scroll",
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      subtitle: "Feel free to reach out",
      nameLabel: "Name",
      namePlaceholder: "John Doe",
      companyLabel: "Company",
      companyPlaceholder: "Company Inc.",
      emailLabel: "Email Address",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Please enter your message here",
      submitButton: "Send Message",
      submitHint: "Clicking the send button will open your email client",
    },
    footer: {
      navLinks: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "History", href: "#history" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Gallery", href: "#gallery" },
        { label: "Contact", href: "#contact" },
      ],
    },
  },
};

export default en;
