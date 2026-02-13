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
    origin: "Osaka shahrining Tsurumi tumanidan",
    hobby: "Poker",
    hobbyLabel: "Sevimli mashg'ulot",
    keywords: [
      "Serial Entrepreneur",
      "Social Problem Solver",
      "Poker Player",
      "Resilient Leader",
    ],
    coreIdentity:
      "Litseyning 1-kursida Ohmae Kenichi rahbarligidagi Attackers Business School ga kirgan va 16 yoshida tadbirkorlikni boshlagan. Litsey bitirishi bilan bir vaqtda yarim yillik hikikomori (uydan chiqmaslik) davrini boshdan kechirgan, ammo mustaqil o'rganish orqali qayta tiklangan. Men orolida moliyaviy litsenziya olish, Jisha NOW jurnalini nashr etish, Aeon Group ovqatlanish biznesini sotib olish, mashhur ma'badlar bilan hamkorlikda shukubo (ma'bad mehmonxonasi) loyihalarini ishlab chiqish kabi turli xil faoliyatlarni amalga oshirib, hozirda parvarish, mehmondo'stlik, IT va xalqaro biznesni qamrab oluvchi 12 ta biznes tuzilmasidan iborat ko'p tarmoqli portfelni boshqaruvchi mustaqil serial tadbirkor.",
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
      description: "Uy-joy muhtojlariga yordam, parvarish xizmati va Myanma loyihasi",
      longDescription:
        "Uy-joy muhtojlari (keksalar, nogironlar) uchun qo'llab-quvvatlanadigan turar joy va uyga tashrif buyuruvchi parvarish-hamshiralik xizmatini boshqaradi. 2025-yilda Hyogo viloyati Nishinomiya shahrida 71 o'rinli turar joy tipidagi keksalar uyi va Kyoto Fushimida 50 xonali qo'llab-quvvatlanadigan turar joyni ochish rejalashtirilgan. Myanmada yapon tili maktabi va maxsus ko'nikma (tokutei gino) parvarish maktabini tashkil etib, Yaponiyadagi parvarish kadrlarini ta'minlash va mahalliy kadrlar tayyorlashni uyg'unlashtirgan xalqaro biznes modelini yaratgan. \"Ee Kango\" va \"Ee Support\" brendlarini boshqaradi.",
      tags: ["Social Impact", "Housing Support", "Care", "Myanmar"],
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
      description: "Ijtimoiy muammolarni hal qiluvchi ko'p tarmoqli loyihalarni boshqarish",
      longDescription:
        "Shaxsiy kompaniya sifatida bir nechta ijtimoiy muammolarni hal qiluvchi loyihalarni parallel ravishda amalga oshiradi. Turli mamlakatlardan kelgan qochqinlarni qabul qilib gidroponika loyihasi, Myanma restoran biznesi, kafil vakilligi xizmati, uy-joy muhtojlari uchun ijaraga kafolat kompaniyasini tashkil etish ustida ishlaydi. Shuningdek, kino investitsiyalari, yangi biznes investitsiyalari va startap investitsiyalari uchun umumiy kapital fondini yaratishni ham amalga oshirmoqda.",
      tags: ["Agriculture", "F&B", "Investment", "Guarantee"],
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
      group: "DHP guruhi",
    },
    {
      company: "dhpケアマネジメント",
      role: "Bosh direktor",
      description: "Uyga tashrif buyuruvchi parvarish-hamshiralik xizmati va keksalar uchun ko'chmas mulk",
      longDescription:
        "Uyga tashrif buyuruvchi parvarish va hamshiralik xizmatini boshqarishga qo'shimcha ravishda, keksalar va nogironlar uchun ko'chmas mulk ishlab chiqish va boshqarish bilan shug'ullanadi. Parvarish va turar joyni birlashtirgan xizmat ko'rsatish orqali keng qamrovli qo'llab-quvvatlashni amalga oshiradi va DHP guruhining asosiy biznesi sifatida ijtimoiy infratuzilmaning bir qismini tashkil qiladi.",
      tags: ["Healthcare", "Care Management", "Real Estate", "Senior Living"],
      accent: "navy",
      span: "tall",
      group: "DHP guruhi",
    },
    {
      company: "dhp都市開発",
      role: "Ijrochi direktor, yangi biznes rivojlantirish bo'yicha mas'ul",
      description:
        "Marriott guruhi va boshqa hashamatli kurort va villa loyihalarini ishlab chiqish",
      longDescription:
        "Tottori qum tepaliklarida Marriott guruhi mehmonxonasini ochish, Karuizawada Marriott guruhi mehmonxonasini ishlab chiqish, Ishigaki orolida villa loyihasini ishlab chiqish va ochish kabi bir nechta hashamatli kurort loyihalarini amalga oshirmoqda. Shuningdek, VC/DID texnologiyalaridan foydalangan turar joy a'zolik tashkilotini yaratish va zamonaviy texnologiyalar yordamida bron boshqaruvi va mijozlar bilan ishlash tizimini ishlab chiqish ustida ham ishlaydi.",
      tags: ["Urban Development", "Marriott", "Luxury Resort", "Villa"],
      accent: "neutral",
      span: "normal",
      group: "DHP guruhi",
    },
    {
      company: "株式会社DHPホスピタリティ",
      role: "Direktor",
      description:
        "O'z brendidagi turar joy boshqaruvi, shukubo yapon uslubidagi mehmonxona, yirik master-franshiza",
      longDescription:
        "O'z brendi ostida turar joy ob'ektlarini boshqarishni asosiy faoliyat sifatida olib boradi, shuningdek yirik mehmonxona guruhlarining master-franchiyzeri sifatida biznesni kengaytiradi. Horyuji, Shitennoji, Naritasan Shinshoji, Miidera kabi mashhur ma'badlar bilan hamkorlikda shukubo yapon uslubidagi mehmonxona biznesini ham amalga oshiradi. Yer sotib olishdan qurilish, brendlashtirish va operatsiyalargacha yaxlit biznes rivojlantirish va ko'p joylarda kengayishni ta'minlaydi.",
      tags: ["Hospitality", "Master Franchisee", "Temple Hotel", "Operations"],
      accent: "marron",
      span: "normal",
      group: "DHP guruhi",
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
      group: "DHP guruhi",
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
      group: "DHP guruhi",
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
      group: "DHP guruhi",
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
      group: "DHP guruhi",
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
      year: "2000",
      title: "Ohmae Kenichi Attackers Business School ga kirish",
      description:
        "Litseyning 1-kursida Ohmae Kenichi rahbarligidagi Attackers Business School ga kirdi. Boshlang'ich va o'rta maktab davrlarida maktabga borishning ma'nosini topa olmay, uyda kitob o'qish bilan kun o'tkazgan, ammo tadbirkorlik yo'lini tanlash qarorini qat'iy qilib, biznesning asoslarini o'rganishni boshladi.",
      detail: "Litsey 1-kursida biznes maktabiga kirish",
    },
    {
      year: "2001",
      title: "16 yoshida \"合資会社マッシュジャパン\" ni tashkil etdi",
      description:
        "Litseyda o'qish davrida 3 nafar do'sti bilan hamkorlikda tashkil etdi. Veb-sayt yaratish, tizim ishlab chiqish va talabalar uchun marketing vakilligi xizmatini amalga oshirdi. Shu davrda NHK \"Shinken 10-dai Shaberiba\" ko'rsatuvida doimiy ishtirok etib, butun mamlakat e'tiborini tortdi. 2003-yil avgust oyida tarqatib yuborildi.",
      detail: "NHK \"Shinken 10-dai Shaberiba\" doimiy ishtirokchisi",
      highlight: true,
    },
    {
      year: "2003",
      title: "Muvaffaqiyatsizlik va hikikomori, so'ngra qayta tiklanish",
      description:
        "Litsey bitirishi bilan bir vaqtda yarim yillik to'liq hikikomori (uydan chiqmaslik) davrini boshdan kechirdi. 20 yoshida o'zidan 15 yosh katta ayolga uylanib nikoh qo'ydi. Shundan so'ng mustaqil o'rganish orqali qayta tiklandi. Bu tajriba \"muvaffaqiyatsizlik takrorlanish xususiyatiga ega\" degan falsafasining boshlang'ich nuqtasi bo'ldi.",
      detail: "Yarim yillik hikikomori davridan qayta tiklanish",
    },
    {
      year: "2017",
      title: "Men oroli hukumati bilan moliyaviy litsenziya muzokaralari",
      description:
        "Ishlab chiqish rahbari sifatida Buyuk Britaniya qirollik mulki bo'lmish Men oroli hukumati bilan bevosita muzokaralar olib bordi. Moliyaviy litsenziyani olish, kompaniya tashkil etish, soliq optimallashtirish va onlayn biznesni keng qamrovli ishlab chiqish va boshqarishni amalga oshirib, xalqaro biznesning poydevorini qo'ydi.",
      detail: "Kompaniya tashkil etishdan soliq optimallashtirish gacha keng qamrovli rahbarlik",
      highlight: true,
    },
    {
      year: "2016",
      title: "Ma'bad va ibodatxonalarga bag'ishlangan bepul jurnal \"Jisha NOW\" nashr etildi",
      description:
        "Rejalashtirish, tahrirlash va nashr etish mas'uli sifatida ma'bad va ibodatxonalarga bag'ishlangan bepul jurnalni nashr etdi. Butun Yaponiya bo'ylab 15,000 ta ma'bad va ibodatxonaga har oylik tarqatishni boshqarib, ma'bad va ibodatxonalarning jozibadorligini keng omma orasida yoydi. Ma'bad turizm assotsiatsiyasini tashkil etish va boshqarishda ham ishtirok etib, madaniy faoliyat va media biznesini uyg'unlashtirdi.",
      detail: "Butun mamlakat bo'ylab 15,000 joyga har oy tarqatish",
    },
    {
      year: "2010",
      title: "Ovqatlanish, ko'chmas mulk va mehmonxona biznesining ko'p tarmoqli kengayishi",
      description:
        "Aeon Group ovqatlanish biznesini sotib olish va boshqarish, parvarish muassasalari uchun bento (ovqat) xizmatini tashkil etish, parvarish ovqati operatsiyasini yaratish kabi faoliyatlarni amalga oshirdi. Daromad keltiradigan ko'chmas mulk savdosi, xorijdagi kovorking bizneslarini (Gonkong, Manila, Osaka, Tokyo va boshqalar) ishlab chiqish, Horyuji va Shitennoji kabi mashhur ma'badlar bilan hamkorlikda shukubo yapon uslubidagi mehmonxona loyihasida ham ishtirok etdi.",
      detail: "Ovqatlanish x ko'chmas mulk x mehmondo'stlik",
    },
    {
      year: "2022",
      title: "合同会社TERAS-U hamkorlikda tashkil etildi",
      description:
        "2022-yil iyul oyida hammuassis va bosh direktorning o'rinbosari sifatida uy-joy muhtojlari (keksalar, nogironlar) uchun subliz biznesi va uyga tashrif buyuruvchi parvarish xizmatini boshladi. Ijtimoiy zaif qatlamlarni qo'llab-quvvatlashga yo'naltirilgan biznes modelini yaratib, o'sish bosqichiga olib chiqqandan so'ng, 2024-yil avgust oyida strategik biznes topshirishni yakunladi.",
      detail: "2024-yil avgust — biznes topshirildi — EXIT tajribasi",
    },
    {
      year: "2024",
      title: "Ko'p tarmoqli portfel boshqaruvining shakllanishi",
      description:
        "株式会社AA (avgust~) va 株式会社あん (sentabr~) ni tashkil etdi. DHP guruhi (kurort ishlab chiqish, parvarish boshqaruvi, shahar rivojlantirish, mehmondo'stlik, FUDOKI, 100doors, Uni Craft, Mitchino), AA O'zbekiston, IPLPF va boshqalar — 12 ta biznes tuzilmasini boshqaradi. Parvarish, mehmondo'stlik, texnologiya, birlamchi sanoat, xalqaro hamkorlik va ovqatlanish — 6 ta sohani nazorat qiladi.",
      detail: "12 ta biznes tuzilmasi x 6 ta sohani boshqarish",
      highlight: true,
    },
    {
      year: "2025",
      title: "Parvarish xodimi amaliyot malaka guvohnomasi olish va biznesni kengaytirish",
      description:
        "Parvarish xodimi amaliyot malaka guvohnomasini olib, amaliy tajribani boshqaruvga tatbiq etish tizimini yaratdi. dhpケアマネジメント bosh direktori lavozimiga tayinlandi (yanvardan~), dhp都市開発 ijrochi direktori lavozimiga tayinlandi (fevraldan~). Tottori qum tepaliklari va Karuizawada Marriott guruhi mehmonxonalarini ishlab chiqish, Ishigaki orolida villa loyihasi, Hyogo viloyati Nishinomiya shahrida 71 o'rinli keksalar uyi va Kyoto Fushimida 50 xonali qo'llab-quvvatlanadigan turar joyni ochishni amalga oshirmoqda.",
      detail: "Parvarish malakasi olish x bir nechta yirik loyihalar boshlandi",
      highlight: true,
    },
  ],
  philosophy: {
    mainQuote:
      "Muvaffaqiyat — omad, uchrashuvlar va vaqtga bog'liq, ammo muvaffaqiyatsizlik takrorlanish xususiyatiga ega",
    subtext:
      "Boshlang'ich va o'rta maktab davrlarida maktabga bormaslik, 16 yoshida tadbirkorlik, litsey bitirishi bilan bir vaqtda hikikomori. Shundan mustaqil o'rganish orqali qayta tiklanib, 20 yildan ortiq vaqt davomida ijtimoiy muammolarni biznes orqali hal qilib kelmoqda.",
    beliefs: [
      {
        title: "Xatolardan o'rganish",
        text: "Muvaffaqiyatsizlik takrorlanish xususiyatiga ega. Shuning uchun muvaffaqiyatsizlik sxemalarini o'rganib, xuddi shu xatolarni takrorlamaslik — muvaffaqiyatga eng qisqa yo'ldir.",
      },
      {
        title: "Mustaqil harakat qilish kuchi",
        text: "Boshlang'ich va o'rta maktabda ma'no topa olmay kitob o'qishga berilgan, 16 yoshida tadbirkorlikni boshlagan, hikikomori davridan o'tib mustaqil o'rganish orqali qayta tiklangan. Boshqalardan o'rganish emas, balki o'z oyog'ida yurish va o'z boshi bilan o'ylash — mustaqil tadbirkorning asosidir.",
      },
      {
        title: "Ijtimoiy muammo = biznes imkoniyati",
        text: "Uy-joy muhtojlari, keksalar parvarishi, mintaqaviy rivojlanish — jamiyatning muammolari ichida barqaror biznesning urug'lari yashiringan. Muammoni hal qilish — biznesni rivojlantirishdir.",
      },
    ],
  },
  galleryImages: [
    { src: "/gallery/01.jpg", alt: "Hashamatli restoran" },
    { src: "/gallery/02.jpg", alt: "Restoran ichki ko'rinishi" },
    { src: "/gallery/03.jpg", alt: "Ovqatlanish" },
    { src: "/gallery/04.jpg", alt: "Taomlar" },
    { src: "/gallery/05.jpg", alt: "Naradagi kiyiklar" },
    { src: "/gallery/06.jpg", alt: "Mehmonxona" },
    { src: "/gallery/07.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/08.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/09.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/10.png", alt: "Ee Kango AA-KANGO" },
    { src: "/gallery/11.png", alt: "Ee Support" },
    { src: "/gallery/12.png", alt: "Brend logotipi" },
    { src: "/gallery/13.jpg", alt: "Jamoa a'zolari" },
    { src: "/gallery/14.jpg", alt: "Jamoa a'zolari" },
    { src: "/gallery/15.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/16.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/17.png", alt: "Brend logotipi" },
    { src: "/gallery/18.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/19.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/20.jpg", alt: "Biznes manzarasi" },
    { src: "/gallery/21.jpg", alt: "Jamoa a'zolari" },
  ],
  ui: {
    scroll: "Scroll",
    portfolio: {
      label: "Portfolio",
      title: "Joriy loyihalar",
      subtitle: "2024 — 2025",
      clickHint: "DHP guruhi kiritilgan · Batafsil ma'lumot uchun kartani bosing",
    },
    history: {
      label: "Tarix",
      title: "Hayot yo'li",
      subtitle: "2000 — Hozir",
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
      emailSubjectTemplate: "[So'rov] {company}{name} dan",
      emailBodyNameLabel: "Ism",
      emailBodyCompanyLabel: "Kompaniya",
      emailBodyEmailLabel: "Elektron pochta",
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
