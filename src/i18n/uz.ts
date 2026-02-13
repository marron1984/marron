import type { SiteLocale } from "./types";

const uz: SiteLocale = {
  personalInfo: {
    nameJa: "吉田 俊輔",
    nameEn: "Shunsuke Yoshida",
    alias: "Marron",
    catchphrase: "Ijtimoiy muammolarni biznes orqali hal qilish.",
    subcatchphrase:
      "16 yoshdan boshlab davom etayotgan, mustaqil tadbirkorlik yo'li.",
    birthDate: "1984-yil 2-may tug'ilgan",
    origin: "Osaka, Yaponiya",
    hobby: "Poker",
    keywords: [
      "Serial Entrepreneur",
      "Social Problem Solver",
      "Poker Player",
      "Resilient Leader",
    ],
    coreIdentity:
      "16 yoshida tadbirkorlikni boshlagan, o'qituvchi bo'lishni orzu qilgan, ammo muvaffaqiyatsizlikka uchragan. Yolg'izlikni boshdan kechirib, mustaqil o'rganish orqali qayta tiklangan. Hozirda parvarish, mehmonxona, IT va xalqaro biznesni qamrab oluvchi ko'p tarmoqli portfelni boshqaruvchi mustaqil serial tadbirkor.",
    stats: [
      { value: "20+", label: "Tadbirkorlik tajribasi (yil)" },
      { value: "12", label: "Faol bizneslar soni" },
      { value: "6", label: "Sohalar bo'ylab" },
      { value: "16", label: "yoshda birinchi biznes" },
    ],
  },
  webPortfolio: [
    {
      name: "Kanoya",
      url: "https://kanoya.vercel.app/",
      domain: "kanoya.vercel.app",
      tag: "Mehmonxona",
    },
    {
      name: "Nara Kasuga",
      url: "https://www.instagram.com/stories/narakasuga/3831596670253123007?utm_source=ig_story_item_share&igsh=MWtqMnV3bjl0bDNtaw==",
      domain: "instagram.com",
      tag: "Ijtimoiy tarmoq",
    },
    {
      name: "DHP Hospitality",
      url: "https://dhp-hospi.com/ja",
      domain: "dhp-hospi.com",
      tag: "Mehmondo'stlik",
    },
    {
      name: "焼肉 Arata",
      url: "https://yakiniku-arata.com/",
      domain: "yakiniku-arata.com",
      tag: "Ovqatlanish",
    },
    {
      name: "Hero",
      url: "https://hero-tau-pink.vercel.app/",
      domain: "hero-tau-pink.vercel.app",
      tag: "LP",
    },
    {
      name: "退職サービス",
      url: "https://taishoku-delta.vercel.app/",
      domain: "taishoku-delta.vercel.app",
      tag: "Xizmat",
    },
    {
      name: "Holy Ko",
      url: "https://holy-ko.vercel.app/",
      domain: "holy-ko.vercel.app",
      tag: "LP",
    },
    {
      name: "AA Adapt",
      url: "https://aa-adapt.com/",
      domain: "aa-adapt.com",
      tag: "Korporativ",
    },
    {
      name: "IPLPF",
      url: "https://iplpf.vercel.app/",
      domain: "iplpf.vercel.app",
      tag: "Platforma",
    },
    {
      name: "AA 介護",
      url: "https://www.aa-kaigo.com/",
      domain: "aa-kaigo.com",
      tag: "Parvarish",
    },
    {
      name: "AA 求人",
      url: "https://aa-kyujin2.vercel.app/",
      domain: "aa-kyujin2.vercel.app",
      tag: "Ish o'rinlari",
    },
  ],
  portfolio: [
    {
      company: "株式会社AA",
      role: "Hammuassis va Bosh direktorning o'rinbosari",
      description: "Uy-joy muhtojlariga yordam va Myanma biznes loyihasi",
      longDescription:
        "Uy-joy ta'minoti zarur bo'lgan shaxslarga (uy-joy muhtojlari) turar joy yordamini asosiy faoliyat sifatida amalga oshiradi va Yaponiyadagi ijtimoiy muammolarni hal qiladi. Myanmadagi xalqaro biznesni rivojlantiradi, ijtimoiy ta'sir va biznesni uyg'unlashtiradi. \"Ee Kango\" va \"Ee Support\" brendlarini boshqaradi.",
      tags: ["Social Impact", "Housing Support", "International", "Myanmar"],
      accent: "marron",
      span: "wide",
    },
    {
      company: "株式会社AAウズベキスタン",
      role: "Bosh direktor",
      description:
        "O'zbekistonda parvarish xizmatlarini taqdim etish, tarqatish va maslahat berish",
      longDescription:
        "O'zbekiston ichida parvarish xizmatlarini taqdim etish, tarqatish va maslahat berish faoliyatini olib boradi. Yaponiyada to'plangan parvarish tajribasini Markaziy Osiyoga o'tkazib, mahalliy keksaygan jamiyat uchun parvarish infratuzilmasini yaratish va kadrlar tayyorlashni amalga oshiradi.",
      tags: ["Healthcare", "Uzbekistan", "Care Consulting", "International"],
      accent: "marron",
      span: "normal",
    },
    {
      company: "株式会社あん",
      role: "Asoschisi va Bosh direktor",
      description: "Gidroponika, restoran va investitsiya biznesi",
      longDescription:
        "Qishloq xo'jaligi texnologiyasi (gidroponika) dan restoran boshqaruvi va investitsiya biznesigacha ko'p tarmoqli faoliyat olib boradi. Oziq-ovqat ishlab chiqarishdan iste'molchiga yetkazib berishgacha yaxlit qiymat zanjirini yaratib, mintaqaviy iqtisodiyotni jonlantirish va barqaror biznes modelini amalga oshiradi.",
      tags: ["Agriculture", "F&B", "Investment", "Hydroponic"],
      accent: "navy",
      span: "normal",
    },
    {
      company: "dhpリゾート開発",
      role: "Ijrochi direktor",
      description:
        "Staytous brendi va Naradagi hashamatli mehmonxona boshqaruvi",
      longDescription:
        "\"Staytous\" brendini rejalashtirish va boshqarishni nazorat qiladi. Naraning tarixiy manzarasidan foydalangan holda hashamatli mehmonxonalarni ishlab chiqish va boshqarishda ishtirok etadi, kiruvchi turizm talabi va Yaponiya an'anaviy madaniyatini birlashtirgan hashamatli mehmondo'stlik xizmatini taqdim etadi.",
      tags: ["Hospitality", "Luxury Ryokan", "Staytous", "Nara"],
      accent: "marron",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "dhpケアマネジメント",
      role: "Bosh direktor",
      description: "Parvarish va turar joyning birlashtirilgan xizmati",
      longDescription:
        "O'ta keksaygan jamiyat muammolariga javob sifatida parvarish xizmatlari va turar joy ta'minotini birlashtirgan innovatsion modelni yaratadi. Parvarish boshqaruvi bo'yicha mutaxassislikdan foydalanib, keksa yoshdagi insonlar xotirjam yashashi uchun muhit yaratadi. DHP guruhining asosiy biznesi sifatida ijtimoiy infratuzilmaning bir qismini tashkil qiladi.",
      tags: ["Healthcare", "Care Management", "Real Estate", "Senior Living"],
      accent: "navy",
      span: "tall",
      group: "DHPグループ",
    },
    {
      company: "dhp都市開発",
      role: "Ijrochi direktor",
      description:
        "Marriott guruhi va boshqa hashamatli kurort loyihalarini ishlab chiqish",
      longDescription:
        "Marriott International va boshqa global brendlar bilan hamkorlikda hashamatli kurortlarni ishlab chiqish loyihalarini amalga oshiradi. Shahar rivojlantirish nuqtai nazaridan mintaqaviy qiymatni oshirish va jahon darajasidagi mehmondo'stlik muhitini yaratish ustida ishlaydi.",
      tags: ["Urban Development", "Marriott", "Luxury Resort", "Global"],
      accent: "neutral",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "株式会社DHPホスピタリティ",
      role: "Direktor",
      description:
        "O'z brendidagi turar joy ob'ektlarini boshqarish va yirik mehmonxona guruhlari uchun master-franshiza",
      longDescription:
        "O'z brendi ostida turar joy ob'ektlarini boshqarishni asosiy faoliyat sifatida olib boradi, shuningdek yirik mehmonxona guruhlarining master-franchiyzeri sifatida biznesni kengaytiradi. Brendlashtirishdan operatsion loyihalashtirishgacha yuqori sifatli mehmondo'stlikni ta'minlaydi.",
      tags: [
        "Hospitality",
        "Master Franchisee",
        "Hotel Brand",
        "Operations",
      ],
      accent: "marron",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "株式会社FUDOKI",
      role: "Direktor",
      description:
        "Birlamchi sanoat mahsulotlarini brendlashtirish va maslahat berish",
      longDescription:
        "Birlamchi sanoat mahsulotlarini brendlashtirish va maslahat berish bilan shug'ullanadi. Qishloq xo'jaligi va baliqchilik mahsulotlari qiymatini oshirish orqali ishlab chiqaruvchi va iste'molchini bog'lovchi yangi tarqatish va brend strategiyasini yaratadi. Mintaqaviy birlamchi sanoatni jahon darajasiga ko'taradi.",
      tags: ["Branding", "Consulting", "Primary Industry", "Agriculture"],
      accent: "navy",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "株式会社100doors",
      role: "Asoschisi va Bosh direktor",
      description:
        "VC/DID texnologiyalariga asoslangan navbatdagi avlod turar joy tizimini ishlab chiqish",
      longDescription:
        "Verifiable Credentials (VC) va Decentralized ID (DID) texnologiyalaridan foydalanib, mehmondo'stlik sohasida raqamli transformatsiyani amalga oshiradi. Ro'yxatdan o'tish va shaxsni tasdiqlashni uzluksiz qilish, bron boshqaruvini samarali tashkil etish uchun navbatdagi avlod platformasini ishlab chiqadi.",
      tags: ["Web3", "DID/VC", "PropTech", "Hospitality Tech"],
      accent: "marron",
      span: "wide",
      group: "DHPグループ",
    },
    {
      company: "合同会社ウニクラフトカンパニー",
      role: "Rejalashtirish bo'yicha ijrochi direktor",
      description: "Shimoliy binafsha dengiz tikanagi quruqlikda yetishtirilishi",
      longDescription:
        "Xokkaydo dengiz tikanaklarini quruqlikda yetishtiruvchi innovatsion suv xo'jaligi biznesi. Tabiiy resurslardan barqaror foydalanish va barqaror ta'minotni uyg'unlashtiradi, yuqori qo'shimcha qiymatli suv mahsulotlarining yangi ishlab chiqarish modelini yaratadi. Yetishtirish texnologiyasini tadqiq qilishdan tijoratlashtirish bosqichigacha boshqaradi.",
      tags: ["Aquaculture", "Sea Urchin", "Sustainability", "Innovation"],
      accent: "navy",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "株式会社ミッチーノ",
      role: "Direktor",
      description: "Maxsus qo'llab-quvvatlash tashkiloti",
      longDescription:
        "Maxsus qo'llab-quvvatlash tashkiloti sifatida xorijiy kadrlarni qabul qilishda yordam va yashash ruxsatnomasi bo'yicha turli xil xizmatlarni taqdim etadi. Ma'muriy tartiblardan turmush sharoitini qo'llab-quvvatlashgacha yaxlit tizimni yaratib, ko'p madaniyatli jamiyatning rivojlanishiga hissa qo'shadi.",
      tags: [
        "Support Agency",
        "Immigration",
        "Multicultural",
        "Consulting",
      ],
      accent: "marron",
      span: "normal",
      group: "DHPグループ",
    },
    {
      company: "一般財団法人国際ピース・ラビング・ピープル財団",
      role: "Kotibiyat, Myanma bo'yicha mas'ul",
      description: "Xalqaro hamkorlik va BMT qo'llab-quvvatlash loyihasi",
      longDescription:
        "Xalqaro Tinchliksevar Xalqlar Jamg'armasi (IPLPF) kotibiyatida Myanma bo'yicha mas'ul sifatida ishlaydi. Xalqaro hamkorlik va BMT qo'llab-quvvatlash loyihalari orqali Myanmada tinchlik o'rnatish va barqaror rivojlanishga hissa qo'shadi. Ijtimoiy tadbirkor sifatidagi tajribasini xalqaro maydonda qo'llaydi.",
      tags: ["International", "UN Support", "Myanmar", "Peace Building"],
      accent: "navy",
      span: "wide",
    },
  ],
  timeline: [
    {
      year: "2001",
      title: "16 yoshida \"Mash Japan\" shirkatini tashkil etdi",
      description:
        "O'rta maktabda o'qish davrida tadbirkorlikni boshladi. Shu davrda NHK \"Shinken 10-dai Shaberiba\" ko'rsatuvida doimiy ishtirok etib, butun mamlakat e'tiborini tortdi. O'smir yoshida biznes tashkil etishdan media bilan ishlashgacha tajriba orttirdi.",
      detail: "NHK \"Shinken 10-dai Shaberiba\" doimiy ishtirokchisi",
      highlight: true,
    },
    {
      year: "—",
      title: "Muvaffaqiyatsizlik va yolg'izlik, so'ngra qayta tiklanish",
      description:
        "O'qituvchi bo'lishni maqsad qilgan, ammo muvaffaqiyatsizlikka uchragan. Yolg'izlik davrini boshdan kechirib, mustaqil o'rganish orqali qayta tiklandi. Bu tajriba \"muvaffaqiyatsizlik takrorlanish xususiyatiga ega\" degan falsafasining asoschisi bo'ldi.",
      detail: "Mustaqil o'sish davri",
    },
    {
      year: "—",
      title: "Men oroli hukumati bilan moliyaviy litsenziya muzokaralari",
      description:
        "Buyuk Britaniya qirollik mulki bo'lmish Men oroli hukumati bilan bevosita muzokaralar olib borib, moliyaviy litsenziyani muvaffaqiyatli qo'lga kiritdi. Xalqaro moliya sohasida muzokaralar olib borish va biznes qurish qobiliyatini namoyish etib, xorijdagi biznes kengaytirishning poydevorini qo'ydi.",
      detail: "Xalqaro moliyaviy litsenziya olish",
      highlight: true,
    },
    {
      year: "—",
      title: "Ma'bad va ibodatxonalarga bag'ishlangan bepul jurnal \"Jisha NOW\" nashr etildi",
      description:
        "Yaponiya madaniyatini targ'ib qiluvchi media sifatida ma'bad va ibodatxonalarga bag'ishlangan bepul jurnalni nashr etdi. Ma'bad va ibodatxonalarning jozibadorligini keng omma orasida yoyib, madaniy faoliyat va media biznesini uyg'unlashtirdi.",
      detail: "Madaniyat va media biznesi",
    },
    {
      year: "—",
      title: "Parvarish ovqati va umumiy ovqatlanish operatsiyalarini yaratish",
      description:
        "Parvarish muassasalari uchun ovqatlanish operatsiyalarini yaratdi. Ozuqaviy boshqaruvdan pishirish jarayoni va yetkazib berishgacha yaxlit tizimni loyihalashtirib, parvarish sohasidagi ovqatlanish infratuzilmasini tashkil etdi. Hozirgi sog'liqni saqlash biznesining boshlang'ich nuqtasi.",
      detail: "Sog'liqni saqlash va ovqatlanish xizmati",
    },
    {
      year: "2022",
      title: "TERAS-U kompaniyasini hamkorlikda tashkil etdi",
      description:
        "Hammuassis sifatida yangi biznesni boshladi. Biznesni o'sish bosqichiga olib chiqqandan so'ng, strategik ravishda biznesni topshirishni yakunladi. Startapni tashkil etishdan EXIT bosqichigacha barcha jarayonlarni boshdan kechirdi.",
      detail: "Biznes topshirildi — EXIT tajribasi",
    },
    {
      year: "2024",
      title: "Ko'p tarmoqli portfel boshqaruvining shakllanishi",
      description:
        "DHP guruhi (kurort ishlab chiqish, parvarish boshqaruvi, shahar rivojlantirish, mehmondo'stlik, FUDOKI, 100doors, Uni Craft, Mitchino), 株式会社AA, AA O'zbekiston, 株式会社あん, IPLPF va boshqalar — 12 ta biznes tuzilmasini boshqaradi. Parvarish, mehmondo'stlik, texnologiya, birlamchi sanoat, xalqaro hamkorlik va ovqatlanish — 6 ta sohani nazorat qiladi.",
      detail: "12 ta biznes tuzilmasi va 6 ta sohani boshqarish",
      highlight: true,
    },
  ],
  philosophy: {
    mainQuote:
      "Muvaffaqiyat — omad, uchrashuvlar va vaqtga bog'liq, ammo muvaffaqiyatsizlik takrorlanish xususiyatiga ega",
    subtext:
      "16 yoshdagi muvaffaqiyatsizlik, yolg'izlik tajribasi va mustaqil o'sish. Xatolardan saboq olib, ijtimoiy muammolarni biznes orqali hal qilish.",
    beliefs: [
      {
        title: "Xatolardan o'rganish",
        text: "Muvaffaqiyatsizlik takrorlanish xususiyatiga ega. Shuning uchun muvaffaqiyatsizlik sxemalarini o'rganib, xuddi shu xatolarni takrorlamaslik — muvaffaqiyatga eng qisqa yo'ldir.",
      },
      {
        title: "Mustaqil harakat qilish kuchi",
        text: "16 yoshida tadbirkorlikni boshladi, yolg'izlikni boshdan kechirdi va mustaqil o'rganish orqali qayta tiklandi. Boshqalardan o'rganish emas, balki o'z oyog'ida yurish va o'z boshi bilan o'ylash — mustaqil tadbirkorning asosidir.",
      },
      {
        title: "Ijtimoiy muammo = biznes imkoniyati",
        text: "Uy-joy muhtojlari, keksalar parvarishi, mintaqaviy rivojlanish — jamiyatning muammolari ichida barqaror biznesning urug'lari yashiringan. Muammoni hal qilish — biznesni rivojlantirishdir.",
      },
    ],
  },
  ui: {
    scroll: "Scroll",
    portfolio: {
      label: "Portfolio",
      title: "Joriy loyihalar",
      subtitle: "2024 — 2025",
      clickHint: "DHPグループ kiritilgan · Batafsil ma'lumot uchun kartani bosing",
    },
    history: {
      label: "Tarix",
      title: "Hayot yo'li",
      subtitle: "2001 — Hozir",
    },
    philosophy: {
      label: "Falsafa",
      title: "E'tiqod",
    },
    webPortfolio: {
      badge: "AI CRAFTED",
      title: "Veb-portfolio",
      description:
        "Sun'iy intellekt yordamida yaratilgan veb-saytlar. Dizayndan amalga oshirishgacha, eng ilg'or texnologiyalar bilan qurilgan.",
      websites: "Veb-saytlar",
      powered: "Powered",
      stack: "Stack",
    },
    gallery: {
      label: "Galereya",
      title: "So'nggi suratlar",
      dragHint: "Suring · surib aylantiring",
    },
    contact: {
      label: "Aloqa",
      title: "Biz bilan bog'laning",
      subtitle: "Bemalol murojaat qiling",
      nameLabel: "Ismingiz",
      namePlaceholder: "Aziz Karimov",
      companyLabel: "Kompaniya",
      companyPlaceholder: "\"Marron\" MChJ",
      emailLabel: "Elektron pochta",
      emailPlaceholder: "your@email.com",
      messageLabel: "Xabar",
      messagePlaceholder: "Xabaringizni shu yerga yozing",
      submitButton: "Yuborish",
      submitHint: "Yuborish tugmasini bosganingizda pochta dasturi ochiladi",
    },
    footer: {
      navLinks: [
        { label: "Portfolio", href: "#portfolio" },
        { label: "Tarix", href: "#history" },
        { label: "Falsafa", href: "#philosophy" },
        { label: "Galereya", href: "#gallery" },
        { label: "Aloqa", href: "#contact" },
      ],
    },
  },
};

export default uz;
