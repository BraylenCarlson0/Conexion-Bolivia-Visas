import type { Locale } from "./config";

export type DiscoverSection = {
  title: string;
  paragraphs: string[];
};

export type DiscoverContent = {
  title: string;
  intro: string;
  heroImage: { src: string; alt: string };
  sections: DiscoverSection[];
  landscapeImage: { src: string; alt: string };
  closingTitle: string;
  closingParagraphs: string[];
  closingQuestion: string;
};

export const discoverImages = {
  hero: {
    src: "/images/discover/copacabana.jpg",
    alt: "Copacabana on the shores of Lake Titicaca, Bolivia",
  },
  landscape: {
    src: "/images/discover/bolivia-landscape.webp",
    alt: "Salar de Uyuni salt flats reflecting the sky, Bolivia",
  },
};

const sectionsEn: DiscoverSection[] = [
  {
    title: "🏜️ Salar de Uyuni: The Mirror of the Sky",
    paragraphs: [
      "Imagine walking across an endless white plain. During the rainy season, the Uyuni Salt Flats turn into the world's largest mirror, where sky and earth merge into one reflection. It's the perfect stage for unforgettable sunsets and for feeling like you're on another planet.",
      "You can also visit the Train Cemetery, Incahuasi Island with its giant cacti, and even stay in hotels built entirely out of salt. An experience only Bolivia can offer.",
    ],
  },
  {
    title: "🏞️ Lake Titicaca: Cradle of Legends",
    paragraphs: [
      "At more than 3,800 meters above sea level, Lake Titicaca is considered the world's highest navigable lake and the sacred place where, according to Inca tradition, the sun was born. Its deep waters and history-filled islands, like Isla del Sol and Isla de la Luna, are perfect for those seeking spirituality and connection with living cultures.",
      "The communities surrounding the lake preserve ancestral traditions, colorful weavings, and warm hospitality that make every visit unforgettable.",
    ],
  },
  {
    title: "🏔️ La Paz: A City Among Mountains",
    paragraphs: [
      "La Paz is a city like no other. Located at over 3,600 meters high, it spreads across mountain valleys and offers a unique mix of modernity and Andean culture.",
      "Here you can ride the world's largest urban cable car and enjoy breathtaking views, get lost in traditional markets full of colors and aromas, and visit fascinating places like the Valley of the Moon, a surreal landscape of rock formations that looks straight out of a sci-fi movie.",
    ],
  },
  {
    title: "🏛️ Sucre: The Colonial Jewel",
    paragraphs: [
      'Known as the "White City," Sucre is a UNESCO World Heritage Site for its perfectly preserved colonial architecture. Walking its calm streets feels like traveling back in time, surrounded by churches, convents, and historic mansions.',
      "It's also an ideal place to enjoy Bolivian cuisine, learn about the country's history, and visit the Cretaceous Park, home to remarkably well-preserved dinosaur footprints.",
    ],
  },
  {
    title: "⛏️ Potosí: History in Every Corner",
    paragraphs: [
      "In the heart of the Andes, Potosí was once one of the richest cities in the world thanks to the silver of the legendary Cerro Rico. Today, its historic center keeps alive the memory of that era of splendor and sacrifice.",
      "Visiting the mines is an intense and eye-opening experience, giving you insight into the history of thousands of workers who shaped the city. Its cultural and architectural legacy makes Potosí one of Bolivia's great treasures.",
    ],
  },
  {
    title: "🦖 Torotoro: A Journey to the Past",
    paragraphs: [
      "Located in Cochabamba, Torotoro National Park is a destination that combines nature and paleontology. Here you can walk along trails marked with dinosaur footprints, explore giant caves like Umajalanta, admire the Torotoro Canyon with its stunning rock formations, and swim in crystal-clear natural pools.",
      "Torotoro is perfect for those seeking adventure, nature, and a direct trip back to prehistory.",
    ],
  },
  {
    title: "⛰️ The Cordillera Real and Bolivia's Mountains",
    paragraphs: [
      "Bolivia is a paradise for mountaineering and trekking lovers. The Cordillera Real, bordering the high plateau, is home to more than 600 snow-capped peaks, many of them over 5,000 meters high.",
      "Among the most imposing are Illimani, the eternal guardian of La Paz; Huayna Potosí, a favorite among climbers; and Illampu, a giant that challenges with its grandeur. Other breathtaking landscapes include the Cordillera de los Frailes in Chuquisaca and Sajama, the country's highest peak.",
      "For hiking, camping, or simply contemplation, Bolivia's mountains are an unforgettable spectacle.",
    ],
  },
  {
    title: "🌿 Rurrenabaque and the Bolivian Amazon",
    paragraphs: [
      "If nature is your thing, Rurrenabaque is the gateway to Bolivia's Amazon. Here you can explore the jungle, sail along rivers, spot pink dolphins, and discover the incredible biodiversity of flora and fauna.",
      "It's the perfect destination for those seeking disconnection, adventure, and direct contact with one of the most diverse ecosystems on the planet.",
    ],
  },
];

const closingEn = {
  closingTitle: "🎉 Bolivia, A Journey That Transforms",
  closingParagraphs: [
    "Traveling to Bolivia is not just about visiting places—it's about living experiences that stay with you forever. Every corner holds magic: from the high Andes to the Amazon jungle, through colonial cities and tradition-filled towns.",
    "Bolivia is not a destination to rush through; it's a country to feel, explore, and discover slowly. Here, every traveler finds something unique: the thrill of an extreme landscape, the peace of a lagoon, the power of its mountains, the warmth of its people, or the trace of a history that still lives on.",
  ],
  closingQuestion: "✨ And you, are you ready to let Bolivia surprise you?",
};

function buildContent(
  title: string,
  intro: string,
  sections: DiscoverSection[] = sectionsEn,
  closing = closingEn,
): DiscoverContent {
  return {
    title,
    intro,
    heroImage: discoverImages.hero,
    sections,
    landscapeImage: discoverImages.landscape,
    ...closing,
  };
}

export const discoverNav: Record<Locale, string> = {
  es: "Descubre Bolivia",
  en: "Discover Bolivia",
  zh: "探索玻利维亚",
  "zh-tw": "探索玻利維亞",
  ar: "اكتشف بوليفيا",
  he: "גלו את בוליביה",
  pt: "Descubra a Bolívia",
  ru: "Откройте Боливию",
  id: "Jelajahi Bolivia",
  uk: "Відкрийте Болівію",
  sr: "Otkrijte Boliviju",
};

export const discoverMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Descubre Bolivia: Un viaje al corazón de Sudamérica | Conexión Bolivia",
    description:
      "Bolivia sorprende en cada rincón. Salar de Uyuni, Lago Titicaca, La Paz, Sucre, Potosí y más. Un destino de autenticidad y aventura.",
  },
  en: {
    title: "Discover Bolivia: A Journey to the Heart of South America | Conexión Bolivia",
    description:
      "Bolivia surprises at every turn. Salar de Uyuni, Lake Titicaca, La Paz, Sucre, Potosí, and more. A destination of authenticity and adventure.",
  },
  zh: {
    title: "探索玻利维亚：南美之心之旅 | Conexión Bolivia",
    description: "玻利维亚在每个角落都令人惊喜。乌尤尼盐沼、的的喀喀湖、拉巴斯、苏克雷、波托西等。",
  },
  "zh-tw": {
    title: "探索玻利維亞：南美之心之旅 | Conexión Bolivia",
    description: "玻利維亞在每個角落都令人驚喜。烏尤尼鹽沼、的的喀喀湖、拉巴斯、蘇克雷、波托西等。",
  },
  ar: {
    title: "اكتشف بوليفيا: رحلة إلى قلب أمريكا الجنوبية | Conexión Bolivia",
    description: "بوليفيا تفاجئك في كل زاوية. سالار دي أيويوني، بحيرة Titicaca، La Paz، Sucre، Potosí والمزيد.",
  },
  he: {
    title: "גלו את בוליביה: מסע אל לב דרום אמריקה | Conexión Bolivia",
    description: "בוליביה מפתיעה בכל פינה. Salar de Uyuni, אגם Titicaca, La Paz, Sucre, Potosí ועוד.",
  },
  pt: {
    title: "Descubra a Bolívia: Uma viagem ao coração da América do Sul | Conexión Bolivia",
    description:
      "A Bolívia surpreende a cada canto. Salar de Uyuni, Lago Titicaca, La Paz, Sucre, Potosí e mais.",
  },
  ru: {
    title: "Откройте Боливию: Путешествие в сердце Южной Америки | Conexión Bolivia",
    description: "Боливия удивляет на каждом шагу. Сalar de Uyuni, Titicaca, La Paz, Sucre, Potosí и другие.",
  },
  id: {
    title: "Jelajahi Bolivia: Perjalanan ke Jantung Amerika Selatan | Conexión Bolivia",
    description: "Bolivia mengejutkan di setiap sudut. Salar de Uyuni, Danau Titicaca, La Paz, Sucre, Potosí, dan lainnya.",
  },
  uk: {
    title: "Відкрийте Болівію: Подорож у серце Південної Америки | Conexión Bolivia",
    description: "Болівія дивує на кожному кроці. Сalar de Uyuni, Titicaca, La Paz, Sucre, Potosí та інші.",
  },
  sr: {
    title: "Otkrijte Boliviju: Putovanje u srce Južne Amerike | Conexión Bolivia",
    description: "Bolivija iznenađuje na svakom koraku. Salar de Uyuni, jezero Titicaca, La Paz, Sucre, Potosí i više.",
  },
};

export const discoverContent: Record<Locale, DiscoverContent> = {
  es: buildContent(
    "🌟 Descubre Bolivia: Un viaje al corazón de Sudamérica",
    "Bolivia es un país que sorprende en cada rincón. Con paisajes que parecen de otro planeta, una cultura viva que late en sus calles y tradiciones que se mantienen desde tiempos ancestrales, este destino es ideal para los viajeros que buscan autenticidad y aventura. Si alguna vez soñaste con un lugar donde la naturaleza y la historia se entrelazan, Bolivia te está esperando.",
  ),
  en: buildContent(
    "🌟 Discover Bolivia: A Journey to the Heart of South America",
    "Bolivia is a country that surprises at every turn. With otherworldly landscapes, a living culture pulsing through its streets, and traditions preserved since ancient times, this destination is ideal for travelers seeking authenticity and adventure. If you've ever dreamed of a place where nature and history intertwine, Bolivia is waiting for you.",
  ),
  zh: buildContent(
    "🌟 探索玻利维亚：南美之心之旅",
    "玻利维亚在每个角落都令人惊喜。超凡脱俗的景观、充满活力的文化和自古传承的传统，使其成为寻求真实与冒险的旅行者的理想目的地。",
  ),
  "zh-tw": buildContent(
    "🌟 探索玻利維亞：南美之心之旅",
    "玻利維亞在每個角落都令人驚喜。超凡脫俗的景觀、充滿活力的文化和自古傳承的傳統，使其成為尋求真實與冒險的旅行者的理想目的地。",
  ),
  ar: buildContent(
    "🌟 اكتشف بوليفيا: رحلة إلى قلب أمريكا الجنوبية",
    "بوليفيا بلد يفاجئك في كل زاوية. مناظر خيالية وثقافة حية وتقاليد أ ancestral — وجهة مثالية للباحثين عن الأصالة والمغامرة.",
  ),
  he: buildContent(
    "🌟 גלו את בוליביה: מסע אל לב דרום אמריקה",
    "בוליביה היא מדינה שמפתיעה בכל פינה. נופים מדהימים, תרבות חיה ומסורות עתיקות — יעד אידיאלי למחפשי אותנטיות והרפתקה.",
  ),
  pt: buildContent(
    "🌟 Descubra a Bolívia: Uma viagem ao coração da América do Sul",
    "A Bolívia é um país que surpreende a cada canto. Com paisagens de outro mundo, cultura viva e tradições ancestrais, este destino é ideal para viajantes que buscam autenticidade e aventura.",
  ),
  ru: buildContent(
    "🌟 Откройте Боливию: Путешествие в сердце Южной Америки",
    "Боливия — страна, которая удивляет на каждом шагу. Невероятные пейзажи, живая культура и древние традиции — идеальное направление для искателей приключений.",
  ),
  id: buildContent(
    "🌟 Jelajahi Bolivia: Perjalanan ke Jantung Amerika Selatan",
    "Bolivia adalah negara yang mengejutkan di setiap sudut. Lanskap luar biasa, budaya hidup, dan tradisi kuno — destinasi ideal bagi pelancong yang mencari keaslian dan petualangan.",
  ),
  uk: buildContent(
    "🌟 Відкрийте Болівію: Подорож у серце Південної Америки",
    "Болівія — країна, яка дивує на кожному кроці. Неймовірні пейзажі, жива культура та давні традиції — ідеальний напрямок для мандрівників.",
  ),
  sr: buildContent(
    "🌟 Otkrijte Boliviju: Putovanje u srce Južne Amerike",
    "Bolivija je zemlja koja iznenađuje na svakom koraku. Neverovatni pejzaži, živa kultura i drevne tradicije — idealna destinacija za avanturu.",
  ),
};
