import type { Locale } from "./config";

export type ToursContent = {
  title: string;
  intro: string;
  recommendationsTitle: string;
  recommendations: string[];
  prohibitedTitle: string;
  prohibitedIntro: string;
  prohibited: string[];
  visaTitle: string;
  visaIntro: string;
  visaGroups: { label: string; text: string }[];
  visaNote: string;
  emergencyTitle: string;
  emergencyIntro: string;
  emergency: { label: string; number: string }[];
};

const emergencyContactsEn = [
  { label: "Emergency Ambulances", number: "118" },
  { label: "Bolivian Red Cross", number: "2226936" },
  { label: "Radio Patrol", number: "110" },
  { label: "Ambulance Network", number: "165" },
  { label: "Fire Department", number: "119" },
  { label: "Citizen Assistance Police (PAC)", number: "120" },
  { label: "Search and Rescue", number: "138" },
  { label: "Emergency Post", number: "114" },
  { label: "SAR Bolivia", number: "132" },
  { label: "Highway Patrol", number: "2334455" },
  { label: "Accidents", number: "2371230" },
];

export const toursNav: Record<Locale, string> = {
  es: "Viajes",
  en: "Travel",
  zh: "旅行",
  "zh-tw": "旅行",
  ar: "السفر",
  he: "טיולים",
  pt: "Viagens",
  ru: "Путешествия",
  id: "Perjalanan",
  uk: "Подорожі",
  sr: "Putovanja",
  hi: "यात्रा",
};

export const travelReadTime: Record<Locale, { tips: string; discover: string }> = {
  es: { tips: "1 min de lectura", discover: "3 min de lectura" },
  en: { tips: "1 min read", discover: "3 min read" },
  zh: { tips: "1 分钟阅读", discover: "3 分钟阅读" },
  "zh-tw": { tips: "1 分鐘閱讀", discover: "3 分鐘閱讀" },
  ar: { tips: "دقيقة واحدة", discover: "3 دقائق" },
  he: { tips: "דקה קריאה", discover: "3 דקות קריאה" },
  pt: { tips: "1 min de leitura", discover: "3 min de leitura" },
  ru: { tips: "1 мин", discover: "3 мин" },
  id: { tips: "1 menit baca", discover: "3 menit baca" },
  uk: { tips: "1 хв читання", discover: "3 хв читання" },
  sr: { tips: "1 min čitanja", discover: "3 min čitanja" },
  hi: { tips: "1 मिनट पढ़ें", discover: "3 मिनट पढ़ें" },
};

export const travelBackLabel: Record<Locale, string> = {
  es: "← Volver a Viajes",
  en: "← Back to Travel",
  zh: "← 返回旅行",
  "zh-tw": "← 返回旅行",
  ar: "← العودة إلى السفر",
  he: "← חזרה לטיולים",
  pt: "← Voltar a Viagens",
  ru: "← Назад к путешествиям",
  id: "← Kembali ke Perjalanan",
  uk: "← Назад до подорожей",
  sr: "← Nazad na putovanja",
  hi: "← यात्रा पर वापस",
};

export const tipsCardImage = {
  src: "/images/discover/consejos-de-viaje.png",
  alt: "Alpaca in the Bolivian highlands with a colonial church and snow-capped mountains",
};

export const travelTipsTab: Record<Locale, string> = {
  es: "Consejos de viaje",
  en: "Travel Tips",
  zh: "旅行建议",
  "zh-tw": "旅行建議",
  ar: "نصائح السفر",
  he: "טיפים לנסיעה",
  pt: "Dicas de viagem",
  ru: "Советы путешественникам",
  id: "Tips perjalanan",
  uk: "Поради мандрівникам",
  sr: "Saveti za put",
  hi: "यात्रा सुझाव",
};

export const toursMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Viajes a Bolivia | Conexión Bolivia",
    description:
      "Consejos de viaje, destinos imperdibles y todo lo que necesitas saber para visitar Bolivia: Salar de Uyuni, Lago Titicaca, visas y contactos de emergencia.",
  },
  en: {
    title: "Travel to Bolivia | Conexión Bolivia",
    description:
      "Travel tips, must-see destinations, and everything you need to know for visiting Bolivia: Salar de Uyuni, Lake Titicaca, visas, and emergency contacts.",
  },
  zh: {
    title: "玻利维亚旅行建议 | Conexión Bolivia",
    description: "玻利维亚旅行建议、限制规定、签证信息和紧急联系电话。",
  },
  "zh-tw": {
    title: "玻利維亞旅行建議 | Conexión Bolivia",
    description: "玻利維亞旅行建議、限制規定、簽證資訊和緊急聯絡電話。",
  },
  ar: {
    title: "نصائح لرحلتك إلى بوليفيا | Conexión Bolivia",
    description: "توصيات وقيود ومعلومات التأشيرة وأرقام الطوارئ لزيارة آمنة وممتعة لبوليفيا.",
  },
  he: {
    title: "טיפים לטיול בבוליביה | Conexión Bolivia",
    description: "המלצות, הגבלות, מידע על ויזה ומספרי חירום לביקור בטוח ומהנה בבוליביה.",
  },
  pt: {
    title: "Dicas para sua viagem à Bolívia | Conexión Bolivia",
    description:
      "Recomendações, restrições, informações sobre visto e contatos de emergência para uma visita segura e agradável à Bolívia.",
  },
  ru: {
    title: "Советы для поездки в Боливию | Conexión Bolivia",
    description: "Рекомендации, ограничения, информация о визе и экстренные контакты для безопасного путешествия в Боливию.",
  },
  id: {
    title: "Tips Perjalanan ke Bolivia | Conexión Bolivia",
    description: "Rekomendasi, larangan, informasi visa, dan kontak darurat untuk kunjungan aman dan menyenangkan ke Bolivia.",
  },
  uk: {
    title: "Поради для подорожі до Болівії | Conexión Bolivia",
    description: "Рекомендації, обмеження, інформація про візу та екстрені контакти для безпечної та приємної подорожі до Болівії.",
  },
  sr: {
    title: "Saveti za putovanje u Boliviju | Conexión Bolivia",
    description: "Preporuke, ograničenja, informacije o vizi i hitni kontakti za sigurnu i prijatnu posetu Boliviji.",
  },
  hi: {
    title: "बोलीविया यात्रा सुझाव | Conexión Bolivia",
    description: "बोलीविया की यात्रा के लिए सुझाव, प्रतिबंध, वीज़ा जानकारी और आपातकालीन संपर्क।",
  },
};

export const tipsMeta: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "Consejos de viaje a Bolivia 2026 | Visas, emergencias y más – Conexión Bolivia",
    description:
      "Recomendaciones, restricciones, requisitos de visa por nacionalidad y contactos de emergencia para viajar seguro a Bolivia.",
  },
  en: {
    title: "Bolivia Travel Tips 2026 | Visas, emergencies & more – Conexión Bolivia",
    description:
      "Travel recommendations, restrictions, visa requirements by nationality, and emergency contacts for a safe Bolivia trip.",
  },
  zh: {
    title: "玻利维亚旅行建议 2026 | 签证与紧急联系 – Conexión Bolivia",
    description: "玻利维亚旅行建议、限制规定、签证信息和紧急联系电话。",
  },
  "zh-tw": {
    title: "玻利維亞旅行建議 2026 | 簽證與緊急聯絡 – Conexión Bolivia",
    description: "玻利維亞旅行建議、限制規定、簽證資訊和緊急聯絡電話。",
  },
  ar: {
    title: "نصائح السفر إلى بوليفيا 2026 | التأشيرات والطوارئ – Conexión Bolivia",
    description: "توصيات وقيود ومعلومات التأشيرة وأرقام الطوارئ لزيارة آمنة لبوليفيا.",
  },
  he: {
    title: "טיפים לטיול בבולивיה 2026 | ויזות וחירום – Conexión Bolivia",
    description: "המלצות, הגבלות, מידע על ויזה ומספרי חירום לביקור בטוח בבוליביה.",
  },
  pt: {
    title: "Dicas de viagem à Bolívia 2026 | Vistos e emergências – Conexión Bolivia",
    description: "Recomendações, restrições, informações sobre visto e contatos de emergência para visita segura à Bolívia.",
  },
  ru: {
    title: "Советы для поездки в Боливию 2026 | Визы и экстренные контакты – Conexión Bolivia",
    description: "Рекомендации, ограничения, информация о визе и экстренные контакты.",
  },
  id: {
    title: "Tips Perjalanan ke Bolivia 2026 | Visa & darurat – Conexión Bolivia",
    description: "Rekomendasi, larangan, informasi visa, dan kontak darurat untuk kunjungan aman ke Bolivia.",
  },
  uk: {
    title: "Поради для подорожі до Болівії 2026 | Візи та екстрені контакти – Conexión Bolivia",
    description: "Рекомендації, обмеження, інформація про візу та екстрені контакти.",
  },
  sr: {
    title: "Saveti za putovanje u Boliviju 2026 | Vize i hitni kontakti – Conexión Bolivia",
    description: "Preporuke, ograničenja, informacije o vizi i hitni kontakti za sigurnu posetu Boliviji.",
  },
  hi: {
    title: "बोलीविया यात्रा सुझाव 2026 | वीज़ा और आपातकाल – Conexión Bolivia",
    description: "बोलीविया यात्रा के लिए सुझाव, प्रतिबंध, वीज़ा जानकारी और आपातकालीन संपर्क।",
  },
};

export const toursContent: Record<Locale, ToursContent> = {
  es: {
    title: "🗺️ Consejos para tu viaje a Bolivia",
    intro:
      "Viajar a Bolivia es una experiencia única, llena de paisajes impresionantes, cultura vibrante y rica biodiversidad. Para que tu visita sea segura y agradable, aquí tienes algunas recomendaciones, restricciones, información sobre visas y contactos importantes que debes tener a mano.",
    recommendationsTitle: "✅ Recomendaciones para viajeros",
    recommendations: [
      "Reserva siempre con agencias legalmente establecidas (SIRETUR – BOLIVIA).",
      "Intenta generar la menor cantidad de residuos posible durante tus viajes.",
      "Respeta y apoya las medidas para reducir el impacto ambiental y proteger el paisaje.",
      "Si visitas zonas tropicales o de bajura, lleva tu carnet de vacuna contra fiebre amarilla.",
      "En Áreas Protegidas, pide orientación en los centros de interpretación para aprovechar al máximo tu visita.",
      "Lleva efectivo cambiado a la moneda nacional.",
    ],
    prohibitedTitle: "🚫 Qué está prohibido",
    prohibitedIntro: "Para proteger el medio ambiente y la cultura local:",
    prohibited: [
      "No dañar ni afectar la biodiversidad.",
      "Evitar el uso de elementos que puedan poner en riesgo la vida en la zona.",
      "La adquisición de drogas o estupefacientes está estrictamente prohibida.",
      "No retirar fauna, flora o patrimonio cultural.",
    ],
    visaTitle: "🌍 Requisitos de visa",
    visaIntro: "Según tu país de origen, las condiciones de entrada a Bolivia varían:",
    visaGroups: [
      { label: "Grupo I:", text: "No se requiere visa, solo un documento de identidad o pasaporte válido." },
      { label: "Grupo II:", text: "Se requiere visa de turista o visitante." },
      {
        label: "Grupo III:",
        text: "Se requiere visa, sujeta a verificación previa de requisitos por la Dirección General de Migración.",
      },
    ],
    visaNote:
      "(Decreto Supremo N° 1923, 13 de marzo de 2014 – Reglamento de la “Ley de Migración”)",
    emergencyTitle: "📞 Contactos de emergencia en Bolivia",
    emergencyIntro: "Ten a mano estos números útiles durante tu viaje:",
    emergency: [
      { label: "Ambulancias de emergencia", number: "118" },
      { label: "Cruz Roja Boliviana", number: "2226936" },
      { label: "Radiopatrullas", number: "110" },
      { label: "Red de Ambulancias", number: "165" },
      { label: "Bomberos", number: "119" },
      { label: "Policía de Atención al Ciudadano (PAC)", number: "120" },
      { label: "Búsqueda y Rescate", number: "138" },
      { label: "Puesto de Emergencia", number: "114" },
      { label: "SAR Bolivia", number: "132" },
      { label: "Patrulla Carreteras", number: "2334455" },
      { label: "Accidentes", number: "2371230" },
    ],
  },

  en: {
    title: "🗺️ Tips for Your Trip to Bolivia",
    intro:
      "Traveling to Bolivia is a unique experience, full of breathtaking landscapes, vibrant culture, and rich biodiversity. To make your visit safe and enjoyable, here are some recommendations, restrictions, visa information, and important contacts you should keep at hand.",
    recommendationsTitle: "✅ Traveler Recommendations",
    recommendations: [
      "Always book with legally established agencies (SIRETUR – BOLIVIA).",
      "Try to generate as little waste as possible during your trips.",
      "Respect and support measures to reduce environmental impact and protect the landscape.",
      "If you visit tropical areas or lowlands, carry your yellow fever vaccination card.",
      "In Protected Areas, ask for guidance at interpretation centers to make the most of your visit.",
      "Carry cash exchanged into the national currency.",
    ],
    prohibitedTitle: "🚫 What Is Prohibited",
    prohibitedIntro: "To protect the environment and local culture:",
    prohibited: [
      "Do not harm or damage biodiversity.",
      "Avoid using items that may endanger life in the area.",
      "The acquisition of drugs or narcotics is strictly prohibited.",
      "Do not remove wildlife, plants, or cultural heritage.",
    ],
    visaTitle: "🌍 Visa Requirements",
    visaIntro: "Depending on your country of origin, the entry conditions to Bolivia vary:",
    visaGroups: [
      { label: "Group I:", text: "No visa required, only a valid ID or passport." },
      { label: "Group II:", text: "A tourist or visitor visa is required." },
      {
        label: "Group III:",
        text: "A visa is required, subject to prior verification of requirements by the General Directorate of Migration.",
      },
    ],
    visaNote:
      '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Emergency Contacts in Bolivia",
    emergencyIntro: "Keep these useful numbers handy during your trip:",
    emergency: emergencyContactsEn,
  },

  zh: {
    title: "🗺️ 玻利维亚旅行建议",
    intro:
      "玻利维亚之旅独特而难忘，拥有令人叹为观止的景观、充满活力的文化和丰富的生物多样性。为了让您的访问安全愉快，以下是一些建议、限制规定、签证信息和应备的重要联系方式。",
    recommendationsTitle: "✅ 旅行者建议",
    recommendations: [
      "始终通过合法注册的旅行社预订（SIRETUR – BOLIVIA）。",
      "旅行中尽量减少垃圾产生。",
      "尊重并支持减少环境影响和保护景观的措施。",
      "如前往热带或低地地区，请携带黄热病疫苗接种证明。",
      "在保护区，请在解说中心寻求指导以充分利用您的访问。",
      "携带已兑换为当地货币的现金。",
    ],
    prohibitedTitle: "🚫 禁止事项",
    prohibitedIntro: "为保护环境和当地文化：",
    prohibited: [
      "不得损害或破坏生物多样性。",
      "不得使用可能危及生命的物品。",
      "严禁购买毒品或麻醉品。",
      "不得带走野生动物、植物或文化遗产。",
    ],
    visaTitle: "🌍 签证要求",
    visaIntro: "根据您的国籍，进入玻利维亚的条件有所不同：",
    visaGroups: [
      { label: "第一组：", text: "无需签证，只需有效身份证或护照。" },
      { label: "第二组：", text: "需要旅游或访客签证。" },
      { label: "第三组：", text: "需要签证，须由移民总局事先核实要求。" },
    ],
    visaNote: "（最高法令 N° 1923，2014年3月13日——《移民法》条例）",
    emergencyTitle: "📞 玻利维亚紧急联系电话",
    emergencyIntro: "旅行期间请保存以下有用号码：",
    emergency: emergencyContactsEn,
  },

  "zh-tw": {
    title: "🗺️ 玻利維亞旅行建議",
    intro:
      "玻利維亞之旅獨特而難忘，擁有令人嘆為觀止的景觀、充滿活力的文化和豐富的生物多樣性。為了讓您的訪問安全愉快，以下是一些建議、限制規定、簽證資訊和應備的重要聯絡方式。",
    recommendationsTitle: "✅ 旅行者建議",
    recommendations: [
      "始終透過合法註冊的旅行社預訂（SIRETUR – BOLIVIA）。",
      "旅行中盡量減少垃圾產生。",
      "尊重並支持減少環境影響和保護景觀的措施。",
      "如前往熱帶或低地地區，請攜帶黃熱病疫苗接種證明。",
      "在保護區，請在解說中心尋求指導以充分利用您的訪問。",
      "攜帶已兌換為當地貨幣的現金。",
    ],
    prohibitedTitle: "🚫 禁止事項",
    prohibitedIntro: "為保護環境和當地文化：",
    prohibited: [
      "不得損害或破壞生物多樣性。",
      "不得使用可能危及生命的物品。",
      "嚴禁購買毒品或麻醉品。",
      "不得帶走野生動物、植物或文化遺產。",
    ],
    visaTitle: "🌍 簽證要求",
    visaIntro: "根據您的國籍，進入玻利維亞的條件有所不同：",
    visaGroups: [
      { label: "第一組：", text: "無需簽證，只需有效身份證或護照。" },
      { label: "第二組：", text: "需要旅遊或訪客簽證。" },
      { label: "第三組：", text: "需要簽證，須由移民總局事先核實要求。" },
    ],
    visaNote: "（最高法令 N° 1923，2014年3月13日——《移民法》條例）",
    emergencyTitle: "📞 玻利維亞緊急聯絡電話",
    emergencyIntro: "旅行期間請保存以下有用號碼：",
    emergency: emergencyContactsEn,
  },

  ar: {
    title: "🗺️ نصائح لرحلتك إلى بوليفيا",
    intro:
      "السفر إلى بوليفيا تجربة فريدة، مليئة بمناظر خلابة وثقافة نابضة بالحياة وتنوع biológico غني. لجعل زيارتك آمنة وممتعة، إليك بعض التوصيات والقيود ومعلومات التأشيرة وجهات الاتصال المهمة.",
    recommendationsTitle: "✅ توصيات للمسافرين",
    recommendations: [
      "احجز دائماً مع وكالات مرخصة قانونياً (SIRETUR – BOLIVIA).",
      "حاول توليد أقل قدر ممكن من النفايات أثناء رحلاتك.",
      "احترم وادعم التدابير لتقليل الأثر البيئي وحماية المناظر الطبيعية.",
      "إذا زرت مناطق استوائية أو منخفضة، احمل بطاقة تطعيم الحمى الصفراء.",
      "في المناطق المحمية، اطلب الإرشاد في مراكز التفسير.",
      "احمل نقوداً محلية.",
    ],
    prohibitedTitle: "🚫 ما هو محظور",
    prohibitedIntro: "لحماية البيئة والثقافة المحلية:",
    prohibited: [
      "عدم إلحاق الضرر بالتنوع البيولوجي.",
      "تجنب استخدام عناصر قد تعرض الحياة للخطر.",
      "شراء المخدرات أو المؤثرات العقلية محظور تماماً.",
      "عدم إزالة الحياة البرية أو النباتات أو التراث الثقافي.",
    ],
    visaTitle: "🌍 متطلبات التأشيرة",
    visaIntro: "حسب بلد منشأك، تختلف شروط الدخول إلى بوليفيا:",
    visaGroups: [
      { label: "المجموعة I:", text: "لا يلزم تأشيرة، فقط هوية أو جواز سفر ساري." },
      { label: "المجموعة II:", text: "يلزم تأشيرة سياحية أو زائر." },
      {
        label: "المجموعة III:",
        text: "يلزم تأشيرة، subject to prior verification of requirements by the General Directorate of Migration.",
      },
    ],
    visaNote: '(Decreto Supremo N° 1923, 13 de marzo de 2014 – Reglamento de la "Ley de Migración")',
    emergencyTitle: "📞 أرقام الطوارئ في بوليفيا",
    emergencyIntro: "احتفظ بهذه الأرقام المفيدة أثناء رحلتك:",
    emergency: emergencyContactsEn,
  },

  he: {
    title: "🗺️ טיפים לטיול בבוליביה",
    intro:
      "נסיעה לבוליביה היא חוויה ייחודית, מלאה בנופים מרהיבים, תרבות תוססת ומגוון ביולוגי עשיר. כדי שהביקור יהיה בטוח ומהנה, הנה המלצות, הגבלות, מידע על ויזה ואנשי קשר חשובים.",
    recommendationsTitle: "✅ המלצות למטיילים",
    recommendations: [
      "הזמינו תמיד דרך סוכנויות מורשות (SIRETUR – BOLIVIA).",
      "הפחיתו פסולת ככל האפשר במהלך הטיול.",
      "כבדו ותמכו באמצעים להפחתת השפעה סביבתית ולהגנה על הנוף.",
      "באזורים טropיים, נשאו תעודת חיסון נגד קדחת צהובה.",
      "באזורים מוגנים, בקשו הדרכה במרכזי הסברה.",
      "נשאו מזומן במטבע מקומי.",
    ],
    prohibitedTitle: "🚫 מה אסור",
    prohibitedIntro: "להגנה על הסביבה והתרבות המקומית:",
    prohibited: [
      "לא לפגוע במגוון הביולוגי.",
      "להימנע מפריטים שעלולים לסכן חיים.",
      "רכישת סמים אסורה לחלוטין.",
      "לא להסיר חיות בר, צמחים או מורשת תרבותית.",
    ],
    visaTitle: "🌍 דרישות ויזה",
    visaIntro: "בהתאם למדינת המוצא, תנאי הכניסה לבוליביה משתנים:",
    visaGroups: [
      { label: "קבוצה I:", text: "לא נדרשת ויזה, רק תעודה או דרכון בתוקף." },
      { label: "קבוצה II:", text: "נדרשת ויזת תייר או מבקר." },
      { label: "קבוצה III:", text: "נדרשת ויזה, בכפוף לאימות מוקדם על ידי הנהלת ההגירה." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 מספרי חירום בבוליביה",
    emergencyIntro: "שמרו את המספרים האלה במהלך הטיול:",
    emergency: emergencyContactsEn,
  },

  pt: {
    title: "🗺️ Dicas para sua viagem à Bolívia",
    intro:
      "Viajar à Bolívia é uma experiência única, cheia de paisagens deslumbrantes, cultura vibrante e rica biodiversidade. Para tornar sua visita segura e agradável, aqui estão algumas recomendações, restrições, informações sobre visto e contatos importantes.",
    recommendationsTitle: "✅ Recomendações para viajantes",
    recommendations: [
      "Reserve sempre com agências legalmente estabelecidas (SIRETUR – BOLIVIA).",
      "Tente gerar o mínimo de resíduos possível durante suas viagens.",
      "Respeite e apoie medidas para reduzir o impacto ambiental e proteger a paisagem.",
      "Se visitar áreas tropicais ou de baixada, leve seu cartão de vacina contra febre amarela.",
      "Em Áreas Protegidas, peça orientação nos centros de interpretação.",
      "Leve dinheiro trocado na moeda nacional.",
    ],
    prohibitedTitle: "🚫 O que é proibido",
    prohibitedIntro: "Para proteger o meio ambiente e a cultura local:",
    prohibited: [
      "Não prejudique ou danifique a biodiversidade.",
      "Evite usar itens que possam colocar vidas em risco.",
      "A aquisição de drogas ou entorpecentes é estritamente proibida.",
      "Não remova fauna, flora ou patrimônio cultural.",
    ],
    visaTitle: "🌍 Requisitos de visto",
    visaIntro: "Dependendo do seu país de origem, as condições de entrada na Bolívia variam:",
    visaGroups: [
      { label: "Grupo I:", text: "Não é necessário visto, apenas documento de identidade ou passaporte válido." },
      { label: "Grupo II:", text: "É necessário visto de turista ou visitante." },
      {
        label: "Grupo III:",
        text: "É necessário visto, sujeito à verificação prévia de requisitos pela Direção Geral de Migração.",
      },
    ],
    visaNote:
      '(Decreto Supremo N° 1923, 13 de março de 2014 – Regulamento da "Lei de Migração")',
    emergencyTitle: "📞 Contatos de emergência na Bolívia",
    emergencyIntro: "Tenha estes números úteis à mão durante sua viagem:",
    emergency: emergencyContactsEn,
  },

  ru: {
    title: "🗺️ Советы для поездки в Боливию",
    intro:
      "Путешествие в Боливию — уникальный опыт с захватывающими пейзажами, яркой культурой и богатым биоразнообразием. Чтобы ваш визит был безопасным и приятным, вот рекомендации, ограничения, информация о визе и важные контакты.",
    recommendationsTitle: "✅ Рекомендации путешественникам",
    recommendations: [
      "Бронируйте только у легально зарегистрированных агентств (SIRETUR – BOLIVIA).",
      "Старайтесь создавать как можно меньше отходов во время поездок.",
      "Уважайте меры по снижению воздействия на окружающую среду и защите ландшафта.",
      "В тропических зонах имейте при себе сертификат о прививке от жёлтой лихорадки.",
      "В заповедниках обращайтесь за консультацией в информационные центры.",
      "Имейте наличные в национальной валюте.",
    ],
    prohibitedTitle: "🚫 Что запрещено",
    prohibitedIntro: "Для защиты окружающей среды и местной культуры:",
    prohibited: [
      "Не причинять вред биоразнообразию.",
      "Не использовать предметы, угрожающие жизни.",
      "Приобретение наркотиков строго запрещено.",
      "Не забирать дикую природу, растения или культурное наследие.",
    ],
    visaTitle: "🌍 Визовые требования",
    visaIntro: "В зависимости от страны происхождения условия въезда в Боливию различаются:",
    visaGroups: [
      { label: "Группа I:", text: "Виза не требуется, только действительное удостоверение личности или паспорт." },
      { label: "Группа II:", text: "Требуется туристическая или гостевая виза." },
      { label: "Группа III:", text: "Требуется виза с предварительной проверкой требований Главным управлением миграции." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Экстренные контакты в Боливии",
    emergencyIntro: "Сохраните эти полезные номера во время поездки:",
    emergency: emergencyContactsEn,
  },

  id: {
    title: "🗺️ Tips Perjalanan ke Bolivia",
    intro:
      "Bepergian ke Bolivia adalah pengalaman unik, penuh dengan pemandangan menakjubkan, budaya yang hidup, dan keanekaragaman hayati yang kaya. Agar kunjungan Anda aman dan menyenangkan, berikut rekomendasi, larangan, informasi visa, dan kontak penting.",
    recommendationsTitle: "✅ Rekomendasi untuk wisatawan",
    recommendations: [
      "Selalu pesan melalui agensi resmi (SIRETUR – BOLIVIA).",
      "Kurangi sampah selama perjalanan.",
      "Hormati langkah perlindungan lingkungan dan lanskap.",
      "Di area tropis, bawa kartu vaksin demam kuning.",
      "Di kawasan lindung, minta panduan di pusat interpretasi.",
      "Bawa uang tunai dalam mata uang lokal.",
    ],
    prohibitedTitle: "🚫 Yang dilarang",
    prohibitedIntro: "Untuk melindungi lingkungan dan budaya lokal:",
    prohibited: [
      "Jangan merusak keanekaragaman hayati.",
      "Hindari barang yang membahayakan nyawa.",
      "Membeli narkoba sangat dilarang.",
      "Jangan mengambil satwa liar, tanaman, atau warisan budaya.",
    ],
    visaTitle: "🌍 Persyaratan visa",
    visaIntro: "Bergantung pada negara asal, syarat masuk ke Bolivia bervariasi:",
    visaGroups: [
      { label: "Grup I:", text: "Tidak perlu visa, hanya KTP atau paspor yang valid." },
      { label: "Grup II:", text: "Diperlukan visa turis atau pengunjung." },
      { label: "Grup III:", text: "Diperlukan visa, dengan verifikasi persyaratan sebelumnya oleh Direktorat Jenderal Migrasi." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Kontak darurat di Bolivia",
    emergencyIntro: "Simpan nomor-nomor berguna ini selama perjalanan:",
    emergency: emergencyContactsEn,
  },

  uk: {
    title: "🗺️ Поради для подорожі до Болівії",
    intro:
      "Подорож до Болівії — унікальний досвід з захопливими пейзажами, живою культурою та багатим біорізноманіттям. Щоб ваш візит був безпечним і приємним, ось рекомендації, обмеження, інформація про візу та важливі контакти.",
    recommendationsTitle: "✅ Поради мандрівникам",
    recommendations: [
      "Бронюйте лише у легально зареєстрованих агентствах (SIRETUR – BOLIVIA).",
      "Мінімізуйте відходи під час подорожей.",
      "Поважайте заходи захисту довкілля та ландшафту.",
      "У тропічних зонах майте сертифікат про щеплення від жовтої лихоманки.",
      "У заповідниках звертайтеся до інформаційних центрів.",
      "Майте готівку в національній валюті.",
    ],
    prohibitedTitle: "🚫 Що заборонено",
    prohibitedIntro: "Для захисту довкілля та місцевої культури:",
    prohibited: [
      "Не шкодити біорізноманіттю.",
      "Не використовувати предмети, що загрожують життю.",
      "Придбання наркотиків суворо заборонено.",
      "Не забирати дику природу, рослини або культурну спадщину.",
    ],
    visaTitle: "🌍 Вимоги до візи",
    visaIntro: "Залежно від країни походження, умови в'їзду до Болівії різняться:",
    visaGroups: [
      { label: "Група I:", text: "Віза не потрібна, лише дійсний посвідчення особи або паспорт." },
      { label: "Група II:", text: "Потрібна туристична або гостьова віза." },
      { label: "Група III:", text: "Потрібна віза з попередньою перевіркою вимог Головним управлінням міграції." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Екстрені контакти в Болівії",
    emergencyIntro: "Зберігайте ці корисні номери під час подорожі:",
    emergency: emergencyContactsEn,
  },

  sr: {
    title: "🗺️ Saveti za putovanje u Boliviju",
    intro:
      "Putovanje u Boliviju je jedinstveno iskustvo, puno zadivljujućih pejzaža, žive kulture i bogatog biodiverziteta. Da bi vaša poseta bila sigurna i prijatna, evo preporuka, ograničenja, informacija o vizi i važnih kontakata.",
    recommendationsTitle: "✅ Preporuke za putnike",
    recommendations: [
      "Uvek rezervišite kod legalno registrovanih agencija (SIRETUR – BOLIVIA).",
      "Generišite što manje otpada tokom putovanja.",
      "Poštujte mere zaštite životne sredine i pejzaža.",
      "U tropskim zonama nosite karton o vakcini protiv žute groznice.",
      "U zaštićenim područjima tražite savet u interpretacionim centrima.",
      "Nosite gotovinu u nacionalnoj valuti.",
    ],
    prohibitedTitle: "🚫 Šta je zabranjeno",
    prohibitedIntro: "Radi zaštite životne sredine i lokalne kulture:",
    prohibited: [
      "Ne oštećivati biodiverzitet.",
      "Ne koristiti predmete koji ugrožavaju život.",
      "Kupovina droge je strogo zabranjena.",
      "Ne uklanjati divlje biljke, životinje ili kulturno nasleđe.",
    ],
    visaTitle: "🌍 Zahtevi za vizu",
    visaIntro: "U zavisnosti od zemlje porekla, uslovi ulaska u Boliviju se razlikuju:",
    visaGroups: [
      { label: "Grupa I:", text: "Viza nije potrebna, samo važeća lična karta ili pasoš." },
      { label: "Grupa II:", text: "Potrebna je turistička ili posetilačka viza." },
      { label: "Grupa III:", text: "Potrebna je viza, uz prethodnu proveru uslova od strane Generalne direkcije za migracije." },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 Hitni kontakti u Boliviji",
    emergencyIntro: "Držite ove korisne brojeve pri ruci tokom putovanja:",
    emergency: emergencyContactsEn,
  },

  hi: {
    title: "🗺️ बोलीविया यात्रा सुझाव",
    intro:
      "बोलीविया की यात्रा एक अनूठा अनुभव है — शानदार परिदृश्य, जीवंत संस्कृति और समृद्ध जैव विविधता। सुरक्षित और सुखद यात्रा के लिए यहाँ सुझाव, प्रतिबंध, वीज़ा जानकारी और महत्वपूर्ण संपर्क हैं।",
    recommendationsTitle: "✅ यात्रियों के लिए सुझाव",
    recommendations: [
      "हमेशा कानूनी रूप से पंजीकृत एजेंसियों (SIRETUR – BOLIVIA) के साथ बुक करें।",
      "यात्रा के दौरान कम से कम कचरा पैदा करने का प्रयास करें।",
      "पर्यावरण संरक्षण के उपायों का सम्मान करें।",
      "उष्णकटिबंधीय क्षेत्रों में पीले बुखार का टीकाकरण प्रमाणपत्र रखें।",
      "संरक्षित क्षेत्रों में पर्यटन केंद्रों से मार्गदर्शन लें।",
      "राष्ट्रीय मुद्रा में नकदी रखें।",
    ],
    prohibitedTitle: "🚫 क्या प्रतिबंधित है",
    prohibitedIntro: "पर्यावरण और स्थानीय संस्कृति की रक्षा के लिए:",
    prohibited: [
      "जैव विविधता को नुकसान न पहुँचाएं।",
      "जीवन को खतरे में डालने वाली वस्तुओं का उपयोग न करें।",
      "ड्रग्स का अधिग्रहण सख्त वर्जित है।",
      "वन्यजीव, पौधे या सांस्कृतिक विरासत न निकालें।",
    ],
    visaTitle: "🌍 वीज़ा आवश्यकताएं",
    visaIntro: "आपके देश के अनुसार, बोलीविया में प्रवेश की शर्तें भिन्न होती हैं:",
    visaGroups: [
      { label: "समूह I:", text: "वीज़ा की आवश्यकता नहीं, केवल वैध पहचान पत्र या पासपोर्ट।" },
      { label: "समूह II:", text: "पर्यटक या आगंतुक वीज़ा आवश्यक।" },
      { label: "समूह III:", text: "वीज़ा आवश्यक, प्रवासन महानिदेशालय द्वारा पूर्व जाँच के अधीन।" },
    ],
    visaNote: '(Supreme Decree N° 1923, March 13, 2014 – Regulations of the "Migration Law")',
    emergencyTitle: "📞 बोलीविया में आपातकालीन संपर्क",
    emergencyIntro: "यात्रा के दौरान ये उपयोगी नंबर संभाल कर रखें:",
    emergency: emergencyContactsEn,
  },
};
