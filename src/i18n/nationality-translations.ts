import type { Locale } from "./config";
import type { NationalityId } from "../data/nationalities";

export type NationalityContent = {
  meta: { title: string; description: string };
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  requirementsTitle: string;
  requirements: string[];
  processTitle: string;
  processSteps: { title: string; text: string }[];
  whyCuscoTitle: string;
  whyCusco: string[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  relatedTitle: string;
};

type NationalityLocaleMap = Partial<Record<Locale, NationalityContent>> & { en: NationalityContent };

const india: NationalityLocaleMap = {
  en: {
    meta: {
      title: "Bolivia Visa for Indian Citizens in Cusco | Conexión Bolivia",
      description:
        "Indian passport holders need a visa for Bolivia. Get yours fast in Cusco, Peru — across from the Bolivian consulate. Same-day processing available.",
    },
    eyebrow: "India → Bolivia",
    title: "Bolivia Visa for Indian Citizens",
    subtitle: "Fast, reliable visa processing in Cusco for Indian travelers",
    intro:
      "Indian citizens require a tourist visa to enter Bolivia. If you're traveling through Cusco on your way to Salar de Uyuni or the Bolivian altiplano, our office — directly across from the Bolivian Consulate — is the fastest and safest place to get your visa processed.",
    requirementsTitle: "Documents Indian citizens need",
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Passport-size photo with white background",
      "Yellow fever vaccination certificate (required for Bolivia)",
      "Travel itinerary or flight reservations",
      "Hotel booking confirmation",
      "Bank statement showing sufficient funds",
      "Completed visa application form",
    ],
    processTitle: "How to get your Bolivia visa in Cusco",
    processSteps: [
      { title: "Contact us on WhatsApp", text: "Send your passport details and travel dates. We confirm requirements and processing time within minutes." },
      { title: "Visit our office or send documents", text: "Come to our office in Cusco with your documents, or send them in advance via WhatsApp or email." },
      { title: "We handle the consulate submission", text: "We review your documents, submit to the Bolivian consulate, and notify you when your visa is ready." },
      { title: "Pick up your visa — often same day", text: "With documents prepared in advance, pickup takes about 10 minutes. Full process can be completed the same day." },
    ],
    whyCuscoTitle: "Why Indian travelers choose Cusco over the border",
    whyCusco: [
      "Personal assistance in English — no language barriers at the border",
      "Document review before submission prevents costly mistakes",
      "Office located directly across from the Bolivian Consulate",
      "Same-day processing — no waiting days at a remote border crossing",
      "Trusted by thousands of international travelers including many from India",
    ],
    faqTitle: "Common questions from Indian travelers",
    faqs: [
      { q: "Do Indian citizens need a visa for Bolivia?", a: "Yes. Indian passport holders require a tourist visa to enter Bolivia. Contact us on WhatsApp with your passport details and we'll confirm the exact requirements." },
      { q: "Can I get my Bolivia visa on the same day in Cusco?", a: "Yes. If you visit our office with all documents ready, processing takes approximately 30 minutes. With documents sent in advance, pickup takes about 10 minutes." },
      { q: "Should I get my visa in Cusco or at the Bolivia border?", a: "Cusco is strongly recommended. You get personal guidance, document review, and a faster process. At the border there's no assistance and errors can delay or deny entry." },
      { q: "I'm going to Salar de Uyuni — do I need the visa first?", a: "Yes. Process your visa in Cusco before crossing into Bolivia. This ensures a smooth trip to Salar de Uyuni without border delays." },
    ],
    ctaTitle: "Ready to get your Bolivia visa?",
    ctaText: "Message us on WhatsApp with your nationality and travel dates. We respond immediately.",
    relatedTitle: "Visa guides for other nationalities",
  },
  es: {
    meta: {
      title: "Visa Bolivia para Ciudadanos Indios en Cusco | Conexión Bolivia",
      description:
        "Los ciudadanos indios necesitan visa para Bolivia. Tramítala rápido en Cusco, frente al consulado boliviano. Procesamiento el mismo día.",
    },
    eyebrow: "India → Bolivia",
    title: "Visa Bolivia para Ciudadanos Indios",
    subtitle: "Trámite rápido y confiable en Cusco para viajeros de India",
    intro:
      "Los ciudadanos de India requieren visa turística para ingresar a Bolivia. Si pasas por Cusco rumbo al Salar de Uyuni o el altiplano boliviano, nuestra oficina — frente al Consulado de Bolivia — es el lugar más rápido y seguro para tramitar tu visa.",
    requirementsTitle: "Documentos que necesitan ciudadanos indios",
    requirements: [
      "Pasaporte vigente (mínimo 6 meses de validez)",
      "Foto tipo pasaporte con fondo blanco",
      "Certificado de vacuna contra fiebre amarilla",
      "Itinerario de viaje o reservas de vuelo",
      "Confirmación de reserva de hotel",
      "Estado de cuenta bancario con fondos suficientes",
      "Formulario de solicitud de visa completado",
    ],
    processTitle: "Cómo obtener tu visa en Cusco",
    processSteps: [
      { title: "Escríbenos por WhatsApp", text: "Envía los datos de tu pasaporte y fechas de viaje. Confirmamos requisitos en minutos." },
      { title: "Visita nuestra oficina o envía documentos", text: "Acude a nuestra oficina en Cusco o envía tus documentos con anticipación." },
      { title: "Gestionamos el trámite consular", text: "Revisamos tus documentos, los presentamos al consulado y te avisamos cuando esté lista." },
      { title: "Recoge tu visa — a menudo el mismo día", text: "Con documentos preparados, la recogida toma unos 10 minutos." },
    ],
    whyCuscoTitle: "Por qué viajeros de India eligen Cusco",
    whyCusco: [
      "Asistencia personalizada — sin barreras de idioma en la frontera",
      "Revisión de documentos antes de la presentación",
      "Oficina frente al Consulado de Bolivia",
      "Trámite el mismo día — sin esperas en la frontera",
      "Confianza de miles de viajeros internacionales",
    ],
    faqTitle: "Preguntas frecuentes de viajeros de India",
    faqs: [
      { q: "¿Los ciudadanos de India necesitan visa para Bolivia?", a: "Sí. Los titulares de pasaporte indio requieren visa turística. Escríbenos por WhatsApp y confirmamos los requisitos exactos." },
      { q: "¿Puedo obtener la visa el mismo día en Cusco?", a: "Sí. Con todos los documentos listos, el trámite toma aproximadamente 30 minutos." },
      { q: "¿Me conviene tramitar en Cusco o en la frontera?", a: "Cusco es muy recomendable. Obtienes asesoría personalizada y un proceso más rápido y seguro." },
      { q: "Voy al Salar de Uyuni — ¿necesito la visa antes?", a: "Sí. Tramita tu visa en Cusco antes de cruzar a Bolivia para evitar demoras en la frontera." },
    ],
    ctaTitle: "¿Listo para tu visa a Bolivia?",
    ctaText: "Escríbenos por WhatsApp con tu nacionalidad y fechas de viaje. Respondemos de inmediato.",
    relatedTitle: "Guías de visa para otras nacionalidades",
  },
  hi: {
    meta: {
      title: "कुस्को में भारतीय नागरिकों के लिए बोलीविया वीज़ा | Conexión Bolivia",
      description:
        "भारतीय पासपोर्ट धारकों को बोलीविया के लिए वीज़ा चाहिए। कुस्को, पेरू में तेज़ प्रोसेसिंग — बोलीवियाई वाणिज्य दूतावास के सामने।",
    },
    eyebrow: "भारत → बोलीविया",
    title: "भारतीय नागरिकों के लिए बोलीविया वीज़ा",
    subtitle: "भारतीय यात्रियों के लिए कुस्को में तेज़ और विश्वसनीय वीज़ा प्रोसेसिंग",
    intro:
      "भारतीय नागरिकों को बोलीविया में प्रवेश के लिए पर्यटक वीज़ा की आवश्यकता होती है। यदि आप Salar de Uyuni या बोलीवियाई पठार की ओर कुस्को से होकर जा रहे हैं, तो हमारा कार्यालय — बोलीवियाई वाणिज्य दूतावास के ठीक सामने — वीज़ा प्राप्त करने का सबसे तेज़ और सुरक्षित स्थान है।",
    requirementsTitle: "भारतीय नागरिकों के लिए आवश्यक दस्तावेज़",
    requirements: [
      "वैध पासपोर्ट (न्यूनतम 6 महीने की वैधता)",
      "सफेद पृष्ठभूमि के साथ पासपोर्ट आकार की फोटो",
      "पीला बुखार टीकाकरण प्रमाणपत्र",
      "यात्रा कार्यक्रम या उड़ान आरक्षण",
      "होटल बुकिंग पुष्टि",
      "पर्याप्त धन दिखाने वाला बैंक स्टेटमेंट",
      "पूर्ण वीज़ा आवेदन फॉर्म",
    ],
    processTitle: "कुस्को में अपना बोलीविया वीज़ा कैसे प्राप्त करें",
    processSteps: [
      { title: "WhatsApp पर संपर्क करें", text: "अपने पासपोर्ट विवरण और यात्रा तिथियां भेजें। हम मिनटों में आवश्यकताओं की पुष्टि करते हैं।" },
      { title: "कार्यालय आएं या दस्तावेज़ भेजें", text: "कुस्को में हमारे कार्यालय में आएं या WhatsApp/ईमेल से पहले से दस्तावेज़ भेजें।" },
      { title: "हम वाणिज्य दूतावास में जमा करते हैं", text: "हम आपके दस्तावेज़ों की समीक्षा करते हैं, जमा करते हैं, और तैयार होने पर सूचित करते हैं।" },
      { title: "वीज़ा प्राप्त करें — अक्सर उसी दिन", text: "पहले से तैयार दस्तावेज़ों के साथ, पिकअप लगभग 10 मिनट लेता है।" },
    ],
    whyCuscoTitle: "भारतीय यात्री कुस्को क्यों चुनते हैं",
    whyCusco: [
      "अंग्रेजी में व्यक्तिगत सहायता — सीमा पर भाषा की बाधा नहीं",
      "जमा करने से पहले दस्तावेज़ समीक्षा",
      "बोलीवियाई वाणिज्य दूतावास के सामने स्थित कार्यालय",
      "उसी दिन प्रोसेसिंग — सीमा पर दिनों इंतज़ार नहीं",
      "हजारों अंतर्राष्ट्रीय यात्रियों का भरोसा",
    ],
    faqTitle: "भारतीय यात्रियों के सामान्य प्रश्न",
    faqs: [
      { q: "क्या भारतीय नागरिकों को बोलीविया के लिए वीज़ा चाहिए?", a: "हाँ। भारतीय पासपोर्ट धारकों को पर्यटक वीज़ा की आवश्यकता है। WhatsApp पर संपर्क करें।" },
      { q: "क्या मैं कुस्को में उसी दिन वीज़ा प्राप्त कर सकता हूँ?", a: "हाँ। सभी दस्तावेज़ तैयार होने पर, प्रक्रिया लगभग 30 मिनट लेती है।" },
      { q: "कुस्को या सीमा — कहाँ बेहतर?", a: "कुस्को की सिफारिश की जाती है। व्यक्तिगत मार्गदर्शन और तेज़, सुरक्षित प्रक्रिया मिलती है।" },
      { q: "Salar de Uyuni जा रहा हूँ — पहले वीज़ा चाहिए?", a: "हाँ। बोलीविया में प्रवेश से पहले कुस्को में वीज़ा प्राप्त करें।" },
    ],
    ctaTitle: "बोलीविया वीज़ा के लिए तैयार?",
    ctaText: "WhatsApp पर अपनी राष्ट्रीयता और यात्रा तिथियां भेजें। हम तुरंत जवाब देते हैं।",
    relatedTitle: "अन्य राष्ट्रीयताओं के लिए वीज़ा गाइड",
  },
};

const china: NationalityLocaleMap = {
  en: {
    meta: {
      title: "Bolivia Visa for Chinese Citizens in Cusco | Conexión Bolivia",
      description:
        "Chinese passport holders need a visa for Bolivia. Process yours in Cusco across from the consulate. WeChat support available for mainland China travelers.",
    },
    eyebrow: "China → Bolivia",
    title: "Bolivia Visa for Chinese Citizens",
    subtitle: "Visa assistance in Cusco with WeChat support for travelers from China",
    intro:
      "Chinese citizens require a tourist visa to enter Bolivia. Our office in Cusco — directly across from the Bolivian Consulate — helps Chinese travelers obtain their visa quickly and safely before heading to Salar de Uyuni and beyond.",
    requirementsTitle: "Documents Chinese citizens need",
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Passport-size photo with white background",
      "Yellow fever vaccination certificate",
      "Travel itinerary",
      "Hotel booking confirmation",
      "Bank statement showing sufficient funds",
      "Completed visa application form",
    ],
    processTitle: "How to get your Bolivia visa in Cusco",
    processSteps: [
      { title: "Contact us via WeChat or WhatsApp", text: "Mainland China travelers can reach us on WeChat. HK/TW/overseas travelers can use WhatsApp." },
      { title: "Prepare and submit documents", text: "Visit our Cusco office or send documents in advance for review." },
      { title: "Consulate submission", text: "We handle the full consulate process on your behalf." },
      { title: "Collect your visa — often same day", text: "With documents ready in advance, pickup takes about 10 minutes." },
    ],
    whyCuscoTitle: "Why Chinese travelers choose our Cusco office",
    whyCusco: [
      "WeChat support — easy contact from mainland China where WhatsApp is blocked",
      "Chinese-language assistance available",
      "Office directly across from the Bolivian Consulate",
      "Same-day processing available",
      "Trusted by international travelers from China and Taiwan",
    ],
    faqTitle: "Common questions from Chinese travelers",
    faqs: [
      { q: "Do Chinese citizens need a visa for Bolivia?", a: "Yes. Chinese passport holders require a tourist visa. Contact us via WeChat or WhatsApp to confirm requirements." },
      { q: "How can I contact you from mainland China?", a: "Use WeChat — scan our QR code on the contact page or search ID: VisasBoliviaCusco. WhatsApp works for HK, Taiwan, and overseas travelers." },
      { q: "Can I get my visa the same day?", a: "Yes, with all documents prepared. Full process takes about 30 minutes; advance submission reduces pickup to ~10 minutes." },
      { q: "Should I process my visa before Salar de Uyuni?", a: "Absolutely. Get your visa in Cusco before crossing into Bolivia to avoid border complications." },
    ],
    ctaTitle: "Ready for your Bolivia visa?",
    ctaText: "Contact us via WeChat or WhatsApp with your travel dates.",
    relatedTitle: "Visa guides for other nationalities",
  },
  es: {
    meta: {
      title: "Visa Bolivia para Ciudadanos Chinos en Cusco | Conexión Bolivia",
      description: "Ciudadanos chinos necesitan visa para Bolivia. Trámite en Cusco frente al consulado. Soporte WeChat disponible.",
    },
    eyebrow: "China → Bolivia",
    title: "Visa Bolivia para Ciudadanos Chinos",
    subtitle: "Asistencia con visa en Cusco y soporte WeChat para viajeros de China",
    intro: "Los ciudadanos chinos requieren visa turística para Bolivia. Nuestra oficina en Cusco, frente al Consulado de Bolivia, ayuda a obtener la visa de forma rápida y segura.",
    requirementsTitle: "Documentos para ciudadanos chinos",
    requirements: [
      "Pasaporte vigente (mínimo 6 meses)",
      "Foto tipo pasaporte fondo blanco",
      "Certificado vacuna fiebre amarilla",
      "Itinerario de viaje",
      "Reserva de hotel",
      "Estado de cuenta bancario",
      "Formulario de visa completado",
    ],
    processTitle: "Cómo obtener tu visa en Cusco",
    processSteps: [
      { title: "Contáctanos por WeChat o WhatsApp", text: "Viajeros de China continental pueden usar WeChat. HK/TW/overseas pueden usar WhatsApp." },
      { title: "Prepara y envía documentos", text: "Visita nuestra oficina o envía documentos con anticipación." },
      { title: "Trámite consular", text: "Gestionamos todo el proceso ante el consulado." },
      { title: "Recoge tu visa", text: "Con documentos listos, la recogida toma unos 10 minutos." },
    ],
    whyCuscoTitle: "Por qué viajeros chinos eligen Cusco",
    whyCusco: [
      "Soporte WeChat para contacto desde China continental",
      "Asistencia disponible",
      "Oficina frente al Consulado de Bolivia",
      "Trámite el mismo día",
      "Confianza de viajeros de China y Taiwán",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Los ciudadanos chinos necesitan visa?", a: "Sí. Contáctanos por WeChat o WhatsApp para confirmar requisitos." },
      { q: "¿Cómo contactar desde China continental?", a: "Usa WeChat — ID: VisasBoliviaCusco. WhatsApp funciona para HK, Taiwán y el extranjero." },
      { q: "¿Puedo obtener la visa el mismo día?", a: "Sí, con todos los documentos preparados." },
      { q: "¿Debo tramitar antes del Salar de Uyuni?", a: "Sí. Tramita en Cusco antes de cruzar a Bolivia." },
    ],
    ctaTitle: "¿Listo para tu visa?",
    ctaText: "Contáctanos por WeChat o WhatsApp con tus fechas de viaje.",
    relatedTitle: "Guías para otras nacionalidades",
  },
  zh: {
    meta: {
      title: "库斯科中国公民玻利维亚签证 | Conexión Bolivia",
      description: "中国公民需要玻利维亚签证。在库斯科领事馆对面快速办理。提供微信支持。",
    },
    eyebrow: "中国 → 玻利维亚",
    title: "中国公民玻利维亚签证",
    subtitle: "库斯科签证协助，支持微信联系中国大陆旅客",
    intro: "中国公民需要旅游签证才能进入玻利维亚。我们的办公室位于库斯科玻利维亚领事馆对面，帮助中国游客在前往乌尤尼盐沼等地之前快速、安全地获得签证。",
    requirementsTitle: "中国公民所需文件",
    requirements: ["有效护照（至少6个月）", "白底护照照片", "黄热病疫苗接种证明", "旅行行程", "酒店预订确认", "银行流水证明", "填写完整的签证申请表"],
    processTitle: "如何在库斯科获得玻利维亚签证",
    processSteps: [
      { title: "通过微信或WhatsApp联系我们", text: "中国大陆旅客可使用微信。香港/台湾/海外旅客可使用WhatsApp。" },
      { title: "准备并提交文件", text: "前往库斯科办公室或提前发送文件审核。" },
      { title: "领事馆提交", text: "我们代您处理完整的领事馆流程。" },
      { title: "领取签证——通常当天", text: "文件提前准备好，领取约需10分钟。" },
    ],
    whyCuscoTitle: "中国游客选择库斯科的原因",
    whyCusco: ["微信支持——中国大陆WhatsApp被屏蔽", "中文协助", "领事馆对面", "当天办理", "受到来自中国和台湾旅客的信赖"],
    faqTitle: "中国游客常见问题",
    faqs: [
      { q: "中国公民需要玻利维亚签证吗？", a: "是的。请通过微信或WhatsApp联系我们确认要求。" },
      { q: "如何从中国大陆联系？", a: "使用微信——ID: VisasBoliviaCusco。WhatsApp适用于香港、台湾和海外。" },
      { q: "可以当天拿到签证吗？", a: "可以，文件齐全约30分钟完成。" },
      { q: "去乌尤尼盐沼前需要签证吗？", a: "是的。请在入境玻利维亚前在库斯科办理。" },
    ],
    ctaTitle: "准备好办理玻利维亚签证了吗？",
    ctaText: "通过微信或WhatsApp发送您的旅行日期。",
    relatedTitle: "其他国家签证指南",
  },
  "zh-tw": {
    meta: {
      title: "庫斯科中國公民玻利維亞簽證 | Conexión Bolivia",
      description: "中國公民需要玻利維亞簽證。在庫斯科領事館對面快速辦理。提供微信支援。",
    },
    eyebrow: "中國 → 玻利維亞",
    title: "中國公民玻利維亞簽證",
    subtitle: "庫斯科簽證協助，支援微信聯繫",
    intro: "中國公民需要旅遊簽證才能進入玻利維亞。我們的辦公室位於庫斯科玻利維亞領事館對面，協助在前往烏尤尼鹽沼前快速取得簽證。",
    requirementsTitle: "所需文件",
    requirements: ["有效護照（至少6個月）", "白底護照照片", "黃熱病疫苗證明", "旅行行程", "酒店預訂", "銀行流水", "簽證申請表"],
    processTitle: "如何在庫斯科取得簽證",
    processSteps: [
      { title: "微信或WhatsApp聯繫", text: "大陸旅客可用微信，港台及海外可用WhatsApp。" },
      { title: "準備文件", text: "前往辦公室或提前發送文件。" },
      { title: "領事館提交", text: "我們代辦完整流程。" },
      { title: "領取簽證", text: "文件齊全，約10分鐘領取。" },
    ],
    whyCuscoTitle: "為何選擇庫斯科",
    whyCusco: ["微信支援", "中文協助", "領事館對面", "當天辦理", "受旅客信賴"],
    faqTitle: "常見問題",
    faqs: [
      { q: "中國公民需要簽證嗎？", a: "是的。請微信或WhatsApp聯繫確認。" },
      { q: "如何從大陸聯繫？", a: "微信 ID: VisasBoliviaCusco。" },
      { q: "可以當天拿到嗎？", a: "可以，文件齊全即可。" },
      { q: "去烏尤尼前需要簽證嗎？", a: "是的，請在入境前於庫斯科辦理。" },
    ],
    ctaTitle: "準備好辦理簽證了嗎？",
    ctaText: "微信或WhatsApp發送旅行日期。",
    relatedTitle: "其他國家簽證指南",
  },
};

const indonesia: NationalityLocaleMap = {
  en: {
    meta: { title: "Bolivia Visa for Indonesian Citizens in Cusco | Conexión Bolivia", description: "Indonesian passport holders need a visa for Bolivia. Fast processing in Cusco across from the consulate." },
    eyebrow: "Indonesia → Bolivia", title: "Bolivia Visa for Indonesian Citizens", subtitle: "Fast visa processing in Cusco for Indonesian travelers",
    intro: "Indonesian citizens require a tourist visa to enter Bolivia. Our Cusco office — across from the Bolivian Consulate — is the best place to process your visa before visiting Salar de Uyuni.",
    requirementsTitle: "Documents Indonesian citizens need",
    requirements: ["Valid passport (6+ months)", "Passport photo white background", "Yellow fever certificate", "Travel itinerary", "Hotel booking", "Bank statement", "Visa application form"],
    processTitle: "How to get your visa in Cusco",
    processSteps: [
      { title: "Contact us on WhatsApp", text: "Send passport details and travel dates." },
      { title: "Submit documents", text: "Visit our office or send documents in advance." },
      { title: "Consulate processing", text: "We handle submission and notify you when ready." },
      { title: "Pick up your visa", text: "Same-day processing available; pickup ~10 min with advance docs." },
    ],
    whyCuscoTitle: "Why Indonesian travelers choose Cusco",
    whyCusco: ["Personal assistance", "Document review before submission", "Across from Bolivian Consulate", "Same-day processing", "Trusted by international travelers"],
    faqTitle: "FAQ for Indonesian travelers",
    faqs: [
      { q: "Do Indonesians need a Bolivia visa?", a: "Yes. Contact us on WhatsApp to confirm requirements." },
      { q: "Same-day processing?", a: "Yes, with all documents ready." },
      { q: "Cusco or border?", a: "Cusco is recommended for personal guidance and faster processing." },
      { q: "Going to Salar de Uyuni?", a: "Process your visa in Cusco before crossing into Bolivia." },
    ],
    ctaTitle: "Ready for your Bolivia visa?", ctaText: "WhatsApp us with your nationality and travel dates.", relatedTitle: "Visa guides for other nationalities",
  },
  id: {
    meta: { title: "Visa Bolivia untuk Warga Indonesia di Cusco | Conexión Bolivia", description: "Warga Indonesia memerlukan visa untuk Bolivia. Proses cepat di Cusco, di depan konsulat." },
    eyebrow: "Indonesia → Bolivia", title: "Visa Bolivia untuk Warga Indonesia", subtitle: "Proses visa cepat di Cusco untuk wisatawan Indonesia",
    intro: "Warga Indonesia memerlukan visa turis untuk masuk Bolivia. Kantor kami di Cusco — di depan Konsulat Bolivia — tempat terbaik untuk mengurus visa sebelum ke Salar de Uyuni.",
    requirementsTitle: "Dokumen yang diperlukan",
    requirements: ["Paspor valid (min. 6 bulan)", "Foto paspor latar belakang putih", "Sertifikat vaksin demam kuning", "Itinerary perjalanan", "Booking hotel", "Rekening koran", "Formulir visa"],
    processTitle: "Cara mendapatkan visa di Cusco",
    processSteps: [
      { title: "Hubungi via WhatsApp", text: "Kirim detail paspor dan tanggal perjalanan." },
      { title: "Kirim dokumen", text: "Kunjungi kantor atau kirim dokumen sebelumnya." },
      { title: "Proses konsulat", text: "Kami urus pengajuan ke konsulat." },
      { title: "Ambil visa", text: "Proses hari yang sama; pengambilan ~10 menit." },
    ],
    whyCuscoTitle: "Mengapa wisatawan Indonesia memilih Cusco",
    whyCusco: ["Bantuan personal", "Review dokumen", "Di depan konsulat", "Proses hari yang sama", "Dipercaya ribuan wisatawan"],
    faqTitle: "Pertanyaan umum",
    faqs: [
      { q: "Apakah warga Indonesia perlu visa?", a: "Ya. Hubungi WhatsApp untuk konfirmasi." },
      { q: "Bisa hari yang sama?", a: "Ya, jika dokumen lengkap." },
      { q: "Cusco atau perbatasan?", a: "Cusco direkomendasikan." },
      { q: "Ke Salar de Uyuni?", a: "Urut visa di Cusco sebelum masuk Bolivia." },
    ],
    ctaTitle: "Siap untuk visa Bolivia?", ctaText: "WhatsApp kami dengan tanggal perjalanan.", relatedTitle: "Panduan visa negara lain",
  },
};

const serbia: NationalityLocaleMap = {
  en: {
    meta: { title: "Bolivia Visa for Serbian Citizens in Cusco | Conexión Bolivia", description: "Serbian passport holders need a visa for Bolivia. Fast processing in Cusco across from the consulate." },
    eyebrow: "Serbia → Bolivia", title: "Bolivia Visa for Serbian Citizens", subtitle: "Reliable visa processing in Cusco for Serbian travelers",
    intro: "Serbian citizens require a tourist visa to enter Bolivia. Process yours at our Cusco office — directly across from the Bolivian Consulate — before your trip to Salar de Uyuni.",
    requirementsTitle: "Required documents", requirements: ["Valid passport (6+ months)", "Passport photo", "Yellow fever certificate", "Itinerary", "Hotel booking", "Bank statement", "Visa form"],
    processTitle: "How to get your visa", processSteps: [
      { title: "WhatsApp us", text: "Send passport details and dates." }, { title: "Submit documents", text: "Visit office or send in advance." },
      { title: "Consulate submission", text: "We handle the full process." }, { title: "Collect visa", text: "Same-day available; ~10 min pickup." },
    ],
    whyCuscoTitle: "Why Serbians choose Cusco", whyCusco: ["Personal guidance", "Document review", "Across from consulate", "Same-day processing", "Trusted by travelers worldwide"],
    faqTitle: "FAQ", faqs: [
      { q: "Do Serbians need a visa?", a: "Yes. WhatsApp us to confirm." }, { q: "Same day?", a: "Yes with complete documents." },
      { q: "Cusco vs border?", a: "Cusco is safer and faster." }, { q: "Salar de Uyuni?", a: "Get visa in Cusco first." },
    ],
    ctaTitle: "Ready?", ctaText: "WhatsApp us today.", relatedTitle: "Other nationality guides",
  },
  sr: {
    meta: { title: "Viza Bolivija za srpske državljane u Kusku | Conexión Bolivia", description: "Srpski državljani trebaju vizu za Boliviju. Brza obrada u Kusku, preko puta od konzulata." },
    eyebrow: "Srbija → Bolivija", title: "Viza Bolivija za srpske državljane", subtitle: "Brza i pouzdana obrada vize u Kusku",
    intro: "Srpski državljani trebaju turističku vizu za ulazak u Boliviju. Naša kancelarija u Kusku — preko puta od konzulata — najbolje mesto za obradu pre puta ka Salar de Uyuni.",
    requirementsTitle: "Potrebni dokumenti", requirements: ["Važeći pasoš (min. 6 meseci)", "Fotografija za pasoš", "Sertifikat o žutoj groznici", "Plan putovanja", "Rezervacija hotela", "Izvod iz banke", "Formular za vizu"],
    processTitle: "Kako dobiti vizu", processSteps: [
      { title: "Pišite na WhatsApp", text: "Pošaljite podatke iz pasoša i datume." }, { title: "Dostavite dokumente", text: "Dođite u kancelariju ili pošaljite unapred." },
      { title: "Konzulat", text: "Mi vodimo ceo postupak." }, { title: "Preuzmite vizu", text: "Isti dan; ~10 min preuzimanje." },
    ],
    whyCuscoTitle: "Zašto Srbi biraju Kusko", whyCusco: ["Lična pomoć", "Provera dokumenata", "Preko puta od konzulata", "Isti dan", "Pouzdano"],
    faqTitle: "Česta pitanja", faqs: [
      { q: "Da li Srbi trebaju vizu?", a: "Da. Pišite na WhatsApp." }, { q: "Isti dan?", a: "Da, sa kompletnim dokumentima." },
      { q: "Kusko ili granica?", a: "Kusko je preporučeno." }, { q: "Salar de Uyuni?", a: "Uredite vizu u Kusku pre ulaska." },
    ],
    ctaTitle: "Spremni?", ctaText: "Pišite na WhatsApp.", relatedTitle: "Vodiči za druge nacionalnosti",
  },
};

const ukraine: NationalityLocaleMap = {
  en: {
    meta: { title: "Bolivia Visa for Ukrainian Citizens in Cusco | Conexión Bolivia", description: "Ukrainian passport holders need a visa for Bolivia. Fast processing in Cusco." },
    eyebrow: "Ukraine → Bolivia", title: "Bolivia Visa for Ukrainian Citizens", subtitle: "Visa assistance in Cusco for Ukrainian travelers",
    intro: "Ukrainian citizens require a tourist visa for Bolivia. Our Cusco office across from the Bolivian Consulate provides fast, reliable processing.",
    requirementsTitle: "Required documents", requirements: ["Valid passport", "Photo", "Yellow fever cert", "Itinerary", "Hotel booking", "Bank statement", "Visa form"],
    processTitle: "Process", processSteps: [
      { title: "WhatsApp", text: "Send details." }, { title: "Documents", text: "Visit or send ahead." },
      { title: "Consulate", text: "We submit for you." }, { title: "Pickup", text: "Same day possible." },
    ],
    whyCuscoTitle: "Why Cusco", whyCusco: ["Personal help", "Doc review", "At consulate", "Same day", "Trusted"],
    faqTitle: "FAQ", faqs: [
      { q: "Visa required?", a: "Yes for Ukrainians." }, { q: "Same day?", a: "Yes." }, { q: "Border?", a: "Cusco recommended." }, { q: "Uyuni?", a: "Visa first in Cusco." },
    ],
    ctaTitle: "Ready?", ctaText: "WhatsApp us.", relatedTitle: "Other guides",
  },
  uk: {
    meta: { title: "Віза Болівія для громадян України в Кusco | Conexión Bolivia", description: "Громадянам України потрібна віза для Болівії. Швидке оформлення в Кusco." },
    eyebrow: "Україна → Болівія", title: "Віза Болівія для громадян України", subtitle: "Швидке оформлення візи в Кusco",
    intro: "Громадянам України потрібна туристична віза для в'їзду до Болівії. Наш офіс у Кusco — навпроти консульства — найкраще місце для оформлення.",
    requirementsTitle: "Необхідні документи", requirements: ["Дійсний закордонний паспорт", "Фото", "Сертифікат про жовту лихоманку", "Маршрут", "Бронювання готелю", "Виписка з банку", "Анкета"],
    processTitle: "Як отримати візу", processSteps: [
      { title: "WhatsApp", text: "Надішліть дані паспорта." }, { title: "Документи", text: "Відвідайте офіс або надішліть заздалегідь." },
      { title: "Кonsulat", text: "Ми подаємо документи." }, { title: "Отримання", text: "Можливо в той же день." },
    ],
    whyCuscoTitle: "Чому Кusco", whyCusco: ["Особиста допомога", "Перевірка документів", "Навпроти консульства", "Той же день", "Довіра мандрівників"],
    faqTitle: "Питання", faqs: [
      { q: "Чи потрібна віза?", a: "Так." }, { q: "Той же день?", a: "Так." }, { q: "Кusco чи кордон?", a: "Кusco рекомендовано." }, { q: "Uyuni?", a: "Спочатку віза в Кusco." },
    ],
    ctaTitle: "Готові?", ctaText: "Напишіть у WhatsApp.", relatedTitle: "Інші національності",
  },
};

const israel: NationalityLocaleMap = {
  en: {
    meta: { title: "Bolivia Visa for Israeli Citizens in Cusco | Conexión Bolivia", description: "Israeli passport holders need a visa for Bolivia. Process in Cusco across from the consulate." },
    eyebrow: "Israel → Bolivia", title: "Bolivia Visa for Israeli Citizens", subtitle: "Visa processing in Cusco for Israeli travelers",
    intro: "Israeli citizens require a tourist visa for Bolivia. Get yours at our Cusco office before traveling to Salar de Uyuni.",
    requirementsTitle: "Documents needed", requirements: ["Valid passport", "Photo", "Yellow fever cert", "Itinerary", "Hotel", "Bank statement", "Form"],
    processTitle: "Process", processSteps: [
      { title: "WhatsApp", text: "Contact us." }, { title: "Documents", text: "Submit at office." },
      { title: "Consulate", text: "We handle it." }, { title: "Pickup", text: "Same day." },
    ],
    whyCuscoTitle: "Why Cusco", whyCusco: ["Personal help", "Review docs", "At consulate", "Fast", "Trusted"],
    faqTitle: "FAQ", faqs: [
      { q: "Visa needed?", a: "Yes for Israelis." }, { q: "Same day?", a: "Yes." }, { q: "Border OK?", a: "Cusco is better." }, { q: "Uyuni trip?", a: "Visa in Cusco first." },
    ],
    ctaTitle: "Ready?", ctaText: "WhatsApp us.", relatedTitle: "Other guides",
  },
  he: {
    meta: { title: "ויזה לבוליביה לאזרחים ישראלים בקוסקו | Conexión Bolivia", description: "אזרחי ישראל זקוקים לויזה לבוליביה. טיפול מהיר בקוסקו מול הקונסוליה." },
    eyebrow: "ישראל → בוליביה", title: "ויזה לבוליביה לאזרחים ישראלים", subtitle: "טיפול בויזה בקוסקו למטיילים ישראלים",
    intro: "אזרחי ישראל זקוקים לויזת תיירות לבוליביה. קבלו אותה במשרדנו בקוסקו לפני הטיול ל-Salar de Uyuni.",
    requirementsTitle: "מסמכים נדרשים", requirements: ["דרכון בתוקף", "תמונה", "תעודת חיסון קדחת צהובה", "מסלול", "מלון", "דף חשבון", "טופס"],
    processTitle: "תהליך", processSteps: [
      { title: "WhatsApp", text: "צרו קשר." }, { title: "מסמכים", text: "הגיעו למשרד." },
      { title: "קונסוליה", text: "אנחנו מטפלים." }, { title: "איסוף", text: "באותו יום." },
    ],
    whyCuscoTitle: "למה קוסקו", whyCusco: ["ליווי אישי", "בדיקת מסמכים", "מול הקונסוליה", "מהיר", "אמין"],
    faqTitle: "שאלות", faqs: [
      { q: "צריך ויזה?", a: "כן." }, { q: "באותו יום?", a: "כן." }, { q: "גבול?", a: "קוסקו מומלץ." }, { q: "Uyuni?", a: "ויזה בקוסקו קודם." },
    ],
    ctaTitle: "מוכנים?", ctaText: "כתבו ב-WhatsApp.", relatedTitle: "לאומים אחרים",
  },
};

const brazil: NationalityLocaleMap = {
  en: {
    meta: { title: "Bolivia Visa for Brazilian Citizens in Cusco | Conexión Bolivia", description: "Brazilian citizens may need visa documentation for Bolivia. Assistance in Cusco." },
    eyebrow: "Brazil → Bolivia", title: "Bolivia Visa for Brazilian Citizens", subtitle: "Visa guidance in Cusco for Brazilian travelers",
    intro: "Brazilian travelers heading to Bolivia through Cusco can get expert assistance at our office across from the Bolivian Consulate — whether you need a visa or travel document guidance.",
    requirementsTitle: "Documents", requirements: ["Valid passport", "Photo if required", "Yellow fever cert", "Itinerary", "Hotel", "Funds proof", "Application if needed"],
    processTitle: "Process", processSteps: [
      { title: "WhatsApp", text: "Confirm if you need a visa." }, { title: "Documents", text: "Prepare with our help." },
      { title: "Consulate", text: "We assist with submission." }, { title: "Pickup", text: "Fast processing." },
    ],
    whyCuscoTitle: "Why Brazilians choose us", whyCusco: ["Portuguese-friendly service", "At consulate", "Expert guidance", "Same day", "Trusted"],
    faqTitle: "FAQ", faqs: [
      { q: "Do Brazilians need a visa?", a: "Contact us — requirements can vary. We confirm in minutes." }, { q: "Same day?", a: "Often yes." }, { q: "Why Cusco?", a: "Personal assistance at the consulate." }, { q: "Uyuni?", a: "We help before your crossing." },
    ],
    ctaTitle: "Ready?", ctaText: "WhatsApp us in Portuguese or English.", relatedTitle: "Other guides",
  },
  pt: {
    meta: { title: "Visto Bolívia para Brasileiros em Cusco | Conexión Bolivia", description: "Assistência com visto para Bolívia em Cusco, em frente ao consulado." },
    eyebrow: "Brasil → Bolívia", title: "Visto Bolívia para Brasileiros", subtitle: "Assistência em Cusco para viajantes brasileiros",
    intro: "Viajantes brasileiros que passam por Cusco podem contar com nossa assistência em frente ao Consulado da Bolívia.",
    requirementsTitle: "Documentos", requirements: ["Passaporte válido", "Foto se necessário", "Certificado febre amarela", "Itinerário", "Hotel", "Comprovante financeiro", "Formulário"],
    processTitle: "Processo", processSteps: [
      { title: "WhatsApp", text: "Confirme se precisa de visto." }, { title: "Documentos", text: "Prepare conosco." },
      { title: "Consulado", text: "Auxiliamos na submissão." }, { title: "Retirada", text: "Processo rápido." },
    ],
    whyCuscoTitle: "Por que nos escolher", whyCusco: ["Atendimento", "Frente ao consulado", "Orientação especializada", "Mesmo dia", "Confiável"],
    faqTitle: "Perguntas", faqs: [
      { q: "Brasileiros precisam de visto?", a: "Entre em contato — confirmamos em minutos." }, { q: "Mesmo dia?", a: "Frequentemente sim." }, { q: "Por que Cusco?", a: "Assistência pessoal." }, { q: "Uyuni?", a: "Ajudamos antes da travessia." },
    ],
    ctaTitle: "Pronto?", ctaText: "WhatsApp em português ou inglês.", relatedTitle: "Outras nacionalidades",
  },
};

const russia: NationalityLocaleMap = {
  en: {
    meta: { title: "Bolivia Visa for Russian Citizens in Cusco | Conexión Bolivia", description: "Russian passport holders need a visa for Bolivia. Fast processing in Cusco." },
    eyebrow: "Russia → Bolivia", title: "Bolivia Visa for Russian Citizens", subtitle: "Visa processing in Cusco for Russian travelers",
    intro: "Russian citizens require a tourist visa for Bolivia. Process yours at our Cusco office across from the Bolivian Consulate.",
    requirementsTitle: "Documents", requirements: ["Valid passport", "Photo", "Yellow fever", "Itinerary", "Hotel", "Bank statement", "Form"],
    processTitle: "Process", processSteps: [
      { title: "WhatsApp", text: "Send details." }, { title: "Documents", text: "Visit or send ahead." },
      { title: "Consulate", text: "We submit." }, { title: "Pickup", text: "Same day." },
    ],
    whyCuscoTitle: "Why Cusco", whyCusco: ["Personal help", "Doc review", "At consulate", "Fast", "Trusted"],
    faqTitle: "FAQ", faqs: [
      { q: "Visa required?", a: "Yes for Russians." }, { q: "Same day?", a: "Yes." }, { q: "Border?", a: "Cusco recommended." }, { q: "Uyuni?", a: "Visa in Cusco first." },
    ],
    ctaTitle: "Ready?", ctaText: "WhatsApp us.", relatedTitle: "Other guides",
  },
  ru: {
    meta: { title: "Виза Боливия для граждан России в Кusco | Conexión Bolivia", description: "Гражданам России нужна виза в Боливию. Быстрое оформление в Кusco." },
    eyebrow: "Россия → Боливия", title: "Виза Боливия для граждан России", subtitle: "Оформление визы в Кusco",
    intro: "Гражданам России требуется туристическая виза в Боливию. Оформите её в нашем офисе в Кusco напротив консульства.",
    requirementsTitle: "Документы", requirements: ["Действующий паспорт", "Фото", "Прививка от жёлтой лихорадки", "Маршрут", "Отель", "Выписка из банка", "Анкета"],
    processTitle: "Процесс", processSteps: [
      { title: "WhatsApp", text: "Отправьте данные." }, { title: "Документы", text: "Приезжайте или отправьте заранее." },
      { title: "Кonsulat", text: "Мы подаём документы." }, { title: "Получение", text: "В тот же день." },
    ],
    whyCuscoTitle: "Почему Кusco", whyCusco: ["Личная помощь", "Проверка документов", "У консульства", "Быстро", "Надёжно"],
    faqTitle: "Вопросы", faqs: [
      { q: "Нужна ли виза?", a: "Да." }, { q: "В тот же день?", a: "Да." }, { q: "Граница?", a: "Кusco лучше." }, { q: "Uyuni?", a: "Сначала виза в Кusco." },
    ],
    ctaTitle: "Готовы?", ctaText: "Напишите в WhatsApp.", relatedTitle: "Другие страны",
  },
};

const allNationalityContent: Record<NationalityId, NationalityLocaleMap> = {
  india,
  china,
  indonesia,
  serbia,
  ukraine,
  israel,
  brazil,
  russia,
};

export function getNationalityContent(locale: Locale, id: NationalityId): NationalityContent {
  const map = allNationalityContent[id];
  return map[locale] ?? map.es ?? map.en;
}

export const nationalityNavLabel: Record<Locale, string> = {
  es: "Visa por nacionalidad",
  en: "Visa by nationality",
  hi: "राष्ट्रीयता के अनुसार वीज़ा",
  zh: "按国籍签证",
  "zh-tw": "依國籍簽證",
  ar: "تأشيرة حسب الجنسية",
  he: "ויזה לפי אזרחות",
  pt: "Visto por nacionalidade",
  ru: "Виза по гражданству",
  id: "Visa menurut kewarganegaraan",
  uk: "Віза за громадянством",
  sr: "Viza po nacionalnosti",
};
