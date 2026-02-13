import type { SiteLocale } from "./types";

const en: SiteLocale = {
  personalInfo: {
    nameJa: "吉田 俊輔",
    nameEn: "Shunsuke Yoshida",
    alias: "Marron",
    catchphrase: "Solving social issues through business.",
    subcatchphrase: "The journey of a self-driven entrepreneur, since age 16.",
    birthDate: "Born May 2, 1984",
    origin: "From Tsurumi-ku, Osaka City, Osaka",
    hobby: "Poker",
    hobbyLabel: "Hobby",
    keywords: [
      "Serial Entrepreneur",
      "Social Problem Solver",
      "Poker Player",
      "Resilient Leader",
    ],
    coreIdentity:
      "Enrolled in Kenichi Ohmae's Attackers Business School during his first year of high school and started his first business at 16. After graduating high school, he experienced six months of social withdrawal (hikikomori) but rebuilt himself through self-education. From obtaining a financial license on the Isle of Man, to launching Jisha NOW magazine, acquiring an Aeon Group restaurant business, and developing temple stay hotels with renowned temples, he has pursued a diverse range of ventures. Today, he manages a composite portfolio of 12 business entities spanning care, hospitality, IT, and international operations as a self-driven serial entrepreneur.",
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
      description: "Housing refugee support, home nursing care & Myanmar operations",
      longDescription:
        "Operates supportive housing and home nursing care services for housing refugees (elderly, disabled). Plans to open a 71-bed residential nursing home in Nishinomiya, Hyogo and a 50-room supportive housing facility in Fushimi, Kyoto during fiscal 2025. In Myanmar, established and operates a Japanese language school and a care training school for specified skilled workers, building an international business model that addresses Japan's care workforce shortage while developing local human resources. Operates the 'Ee Kaigo' and 'Ee Support' brands.",
      tags: ["Social Impact", "Housing Support", "Care", "Myanmar"],
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
      description: "Social issue-driven multi-project operations",
      longDescription:
        "Runs multiple social issue-driven projects in parallel as a personal company. Pursues a hydroponic farming project for refugee intake from various countries, a Myanmar restaurant business, a guarantor agency, and the launch of a rent guarantee company specializing in housing refugees. Also advancing the creation of a comprehensive equity fund for film investment, new business investment, and startup investment.",
      tags: ["Agriculture", "F&B", "Investment", "Guarantee"],
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
      description: "Home nursing care & elderly real estate development",
      longDescription:
        "Operates home care and home nursing services, as well as real estate development and management for the elderly and disabled. Delivers comprehensive support by integrating care and housing into a unified service offering, serving as a core business within the DHP Group and contributing to essential social infrastructure.",
      tags: ["Healthcare", "Care Management", "Real Estate", "Senior Living"],
      accent: "navy",
      span: "tall",
      group: "DHP Group",
    },
    {
      company: "dhp都市開発",
      role: "Executive Officer, New Business Development",
      description: "Marriott Group luxury resort development & villa development",
      longDescription:
        "Drives the launch of a Marriott Group hotel at Tottori Sand Dunes, development of a Marriott Group hotel in Karuizawa, and villa development on Ishigaki Island, advancing multiple luxury resort projects. Also working on building a membership organization leveraging VC/DID and developing cutting-edge accommodation booking and customer management systems.",
      tags: ["Urban Development", "Marriott", "Luxury Resort", "Villa"],
      accent: "neutral",
      span: "normal",
      group: "DHP Group",
    },
    {
      company: "株式会社DHPホスピタリティ",
      role: "Director",
      description: "Proprietary hotel brand, temple stay hotels & major hotel group MF",
      longDescription:
        "Operates proprietary-brand accommodation facilities while also serving as a master franchisee for major hotel groups. Develops temple stay Japanese-style hotel projects in collaboration with renowned temples including Horyuji, Shitennoji, Naritasan Shinshoji, and Miidera, delivering end-to-end business development from land acquisition and construction to branding and operations across multiple locations.",
      tags: ["Hospitality", "Master Franchisee", "Temple Hotel", "Operations"],
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
      year: "2000",
      title: "Enrolled in Kenichi Ohmae's Attackers Business School",
      description:
        "Enrolled in Attackers Business School, led by Kenichi Ohmae, during his first year of high school. Having spent his elementary and middle school years unable to find meaning in school and instead reading books at home, he resolved to become an entrepreneur and began learning the fundamentals of business.",
      detail: "Entered business school as a high school freshman",
    },
    {
      year: "2001",
      title: "Founded 'Mash Japan' at age 16",
      description:
        "Co-founded the company with three friends while still in high school. Ran web development and systems development services alongside a student-targeted marketing agency. During the same period, appeared as a regular on NHK's 'Shinken 10-dai Shaberiba' (a national youth debate show), gaining nationwide attention. Dissolved in August 2003.",
      detail: "Regular on NHK's national youth debate show",
      highlight: true,
    },
    {
      year: "2003",
      title: "Setback, withdrawal, and comeback",
      description:
        "Experienced complete social withdrawal (hikikomori) for six months immediately after graduating high school. Married a woman 15 years his senior at the age of 20. Later rebuilt himself through self-directed learning. This experience became the foundation of his philosophy: 'Failure is highly reproducible.'",
      detail: "Rebuilt after six months of withdrawal",
    },
    {
      year: "2017",
      title: "Financial license negotiations with the Isle of Man government",
      description:
        "As development lead, negotiated directly with the government of the Isle of Man, a British Crown Dependency. Led the comprehensive process of obtaining a financial license, establishing a company, optimizing tax structures, and developing and operating online businesses, laying the foundation for international business.",
      detail: "Led end-to-end from company establishment to tax optimization",
      highlight: true,
    },
    {
      year: "2016",
      title: "Launched 'Jisha NOW', a free magazine for temples and shrines",
      description:
        "Founded a free publication dedicated to Japanese temples and shrines as planning, editorial, and publishing director. Oversaw monthly distribution to 15,000 temples and shrines nationwide, broadly communicating the appeal of Japan's sacred sites. Also involved in establishing and operating a temple and shrine tourism association, pioneering a fusion of cultural programming and media business.",
      detail: "Monthly distribution to 15,000 locations nationwide",
    },
    {
      year: "2010",
      title: "Multi-business expansion: F&B, real estate & hotels",
      description:
        "Acquired and operated Aeon Group restaurant businesses, launched a bento delivery service for care facilities, and built care food operations. Engaged in income property trading, overseas coworking space development (Hong Kong, Manila, Osaka, Tokyo, etc.), and participated in temple stay Japanese-style hotel projects in collaboration with Horyuji, Shitennoji, and other renowned temples.",
      detail: "F&B x Real Estate x Hospitality",
    },
    {
      year: "2022",
      title: "Co-founded TERAS-U LLC",
      description:
        "Co-founded as co-founder and deputy representative in July 2022, launching a sublease business and home care service for housing refugees (elderly, disabled). Built a business model specializing in support for socially vulnerable populations, drove the venture through its growth phase, then completed a strategic business transfer in August 2024.",
      detail: "Aug 2024 Business transfer \u2014 Exit experience",
    },
    {
      year: "2024",
      title: "Established a diversified portfolio management model",
      description:
        "Founded 株式会社AA (Aug) and 株式会社あん (Sep). Now manages 12 business entities across 6 industries, including the DHP Group (resort development, care management, urban development, hospitality, FUDOKI, 100doors, Uni Craft, Mitchino), AA Uzbekistan, IPLPF, and more. Spans care, hospitality, technology, primary industries, international cooperation, and food & beverage.",
      detail: "12 entities x 6 industries under unified management",
      highlight: true,
    },
    {
      year: "2025",
      title: "Care worker certification & business expansion",
      description:
        "Obtained the Practical Care Worker Training certification, establishing a framework to apply frontline knowledge to management. Appointed CEO of dhp Care Management (Jan) and Executive Officer of dhp Urban Development (Feb). Currently driving Marriott Group hotel developments at Tottori Sand Dunes and Karuizawa, Ishigaki Island villa development, and the opening of a 71-bed nursing home in Nishinomiya, Hyogo and 50-room supportive housing in Fushimi, Kyoto.",
      detail: "Care certification x Multiple major projects launched",
      highlight: true,
    },
  ],
  achievements: [
    {
      category: "Isle of Man",
      items: [
        "As development lead, spearheaded direct negotiations with the Isle of Man government for financial license acquisition, company establishment, tax optimization, and comprehensive online business development and operations.",
      ],
    },
    {
      category: "Itai Suit (Anime Suit)",
      items: [
        "Arranged seed-round fund investment, supported exhibition at Paris Japan Expo, and drove international business expansion.",
      ],
    },
    {
      category: "Media",
      items: [
        "Planned, launched, and operated a free paper publication.",
        "As planning, editorial, and publishing director of 'Jisha NOW', oversaw monthly distribution to 15,000 temples and shrines nationwide.",
      ],
    },
    {
      category: "Events & Organizations",
      items: [
        "Planned and launched art events in Osaka Minami; established and operated a temple and shrine tourism association.",
      ],
    },
    {
      category: "IT",
      items: [
        "Launched a rental server business and participated in managing an SEO consulting company.",
      ],
    },
    {
      category: "Finance",
      items: [
        "Developed and operated investment funds.",
      ],
    },
    {
      category: "Food & Beverage",
      items: [
        "Acquired and operated Aeon Group's F&B business.",
        "Launched a bento delivery service specializing in care facilities and home care recipients; built care food operations and supported in-facility kitchen setup.",
      ],
    },
    {
      category: "Real Estate",
      items: [
        "Bought and sold income-generating properties; developed overseas co-working spaces (Hong Kong, Manila, Osaka, Tokyo, etc.).",
      ],
    },
    {
      category: "Hotels",
      items: [
        "Developed temple-stay Japanese-style hotel business in collaboration with renowned temples (Horyuji, Shitennoji, Naritasan Shinshoji, Miidera).",
        "End-to-end business development from land acquisition to construction, branding, and operations across multiple locations.",
      ],
    },
  ],
  philosophy: {
    mainQuote: "Success depends on luck, connections, and timing \u2014 but failure is highly reproducible.",
    subtext:
      "Truancy during elementary and middle school, entrepreneurship at 16, and social withdrawal right after graduating high school. From there, he rebuilt himself through self-education and has continued solving social issues through business for over 20 years.",
    beliefs: [
      {
        title: "Learning from Failure",
        text: "Failure follows patterns. By studying those patterns and refusing to repeat the same mistakes, you find the shortest path to success.",
      },
      {
        title: "The Power of Self-Reliance",
        text: "Unable to find meaning in school during elementary and middle school, he immersed himself in reading, started a business at 16, and after a period of withdrawal, rebuilt himself through self-education. Not waiting to be taught, but walking on your own feet and thinking with your own mind \u2014 that is the origin of a self-driven entrepreneur.",
      },
      {
        title: "Social Problems = Business Opportunities",
        text: "Housing insecurity, elder care, regional revitalization \u2014 the seeds of sustainable business lie within the challenges society faces. Solving problems is growing business.",
      },
    ],
  },
  galleryImages: [
    { src: "/gallery/01.jpg", alt: "Fine dining restaurant" },
    { src: "/gallery/02.jpg", alt: "Restaurant interior" },
    { src: "/gallery/03.jpg", alt: "Dining" },
    { src: "/gallery/04.jpg", alt: "Cuisine" },
    { src: "/gallery/05.jpg", alt: "Deer in Nara" },
    { src: "/gallery/06.jpg", alt: "Ryokan" },
    { src: "/gallery/07.jpg", alt: "Business scene" },
    { src: "/gallery/08.jpg", alt: "Business scene" },
    { src: "/gallery/09.jpg", alt: "Business scene" },
    { src: "/gallery/10.png", alt: "Ee Kango AA-KANGO" },
    { src: "/gallery/11.png", alt: "Ee Support" },
    { src: "/gallery/12.png", alt: "Brand logo" },
    { src: "/gallery/13.jpg", alt: "Team members" },
    { src: "/gallery/14.jpg", alt: "Team members" },
    { src: "/gallery/15.jpg", alt: "Business scene" },
    { src: "/gallery/16.jpg", alt: "Business scene" },
    { src: "/gallery/17.png", alt: "Brand logo" },
    { src: "/gallery/18.jpg", alt: "Business scene" },
    { src: "/gallery/19.jpg", alt: "Business scene" },
    { src: "/gallery/20.jpg", alt: "Business scene" },
    { src: "/gallery/21.jpg", alt: "Team members" },
  ],
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
      subtitle: "2000 \u2014 Present",
    },
    achievements: {
      label: "Track Record",
      title: "Key Achievements",
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
      phoneLabel: "Phone",
      phone: "070-8555-5952",
      emailAddress: "yoshida@aska-g.com",
      addressLabel: "Office Address",
      address: "〒555-0022 Shanclaire 102, 2-9-3 Kashiwazato, Nishiyodogawa-ku, Osaka (AA Inc.)",
      residenceLabel: "Residence",
      residence: "Tennoji-ku, Osaka (Tsuruhashi)",
      familyLabel: "Family",
      family: "Wife (older), 1 daughter, mother-in-law, pet dog (Cavapoo)",
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
      emailSubjectTemplate: "[Inquiry] From {company}{name}",
      emailBodyNameLabel: "Name",
      emailBodyCompanyLabel: "Company",
      emailBodyEmailLabel: "Email",
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

export default en;
