export interface ComprehensiveLesson {
  id: string;
  slug: string;
  title: string;
  moduleTitle: string;
  moduleOrder: number;
  description: string;
  estimatedMinutes: number;
  spec: string;
  kidAnalogy: string;
  cppInternalCode: string;
  content: string;
  codeExample: string;
}

export const html25ModulesData: Record<string, ComprehensiveLesson> = {
  // ==========================================
  // 01. TARIX VA STANDARTLAR
  // ==========================================
  'html-tarixi': {
    id: '1.1',
    slug: 'html-tarixi',
    title: 'HTML Tarixi va Tim Berners-Lee',
    moduleTitle: '01. Tarix va Standartlar',
    moduleOrder: 1,
    description: '1989-yilda CERN markazida World Wide Web va ilk 18 ta HTML teglari yaratilishi.',
    estimatedMinutes: 5,
    spec: 'CERN WWW 1989',
    kidAnalogy: 'Dunyodagi barcha kutubxonalarni bir-biriga bog‘lovchi ko‘rinmas sehrli iplar.',
    cppInternalCode: '// CERN 1991 First Browser Engine\nHTLoadAbsolute(const char* url);',
    content: `## 🚀 HTMLning Tug‘ilishi\n\n1989-yilda ser Tim Berners-Lee CERN markazida olimlarning ilmiy maqolalarini bir-biri bilan tezkor almashishlari uchun **HyperText** g‘oyasini ishlab chiqdi.\n\n### 📜 Ilk 18 ta Teg\nIlk HTML spetsifikatsiyasida faqat 18 ta teg bo‘lgan: \`<title>\`, \`<h1>-<h6>\`, \`<p>\`, \`<a>\`, \`<ul>\`, \`<li>\`, \`<address>\` va boshqalar.`,
    codeExample: `<title>The World Wide Web</title>\n<h1>World Wide Web</h1>\n<p>First web page in history.</p>`,
  },
  'html-2-0': {
    id: '1.2',
    slug: 'html-2-0',
    title: 'HTML 2.0 (RFC 1866) — Ilk Rasmiy Standart',
    moduleTitle: '01. Tarix va Standartlar',
    moduleOrder: 1,
    description: '1995-yilda IETF tomonidan qabul qilingan birinchi rasmiy xalqaro HTML standarti.',
    estimatedMinutes: 6,
    spec: 'IETF RFC 1866',
    kidAnalogy: 'Hamma tushunishi uchun dunyo tillarini bitta umumiy lug‘atga yig‘ish.',
    cppInternalCode: '// IETF HTML 2.0 Form Processing\nvoid ParseFormData(char* buffer);',
    content: `## 📜 HTML 2.0 Nimalarni Olib Keldi?\n\nHTML 2.0 orqali veb tarixida ilk bor **Formalar (\`<form>\`, \`<input>\`)**, jadvallar qoralamasi va tasvirlarni joylashtirish rasmiylashtirildi.`,
    codeExample: `<form action="/cgi-bin/submit">\n  <input type="text" name="user">\n  <input type="submit">\n</form>`,
  },
  'html-3-2': {
    id: '1.3',
    slug: 'html-3-2',
    title: 'HTML 3.2 — Jadvallar va Skriptlar Davri',
    moduleTitle: '01. Tarix va Standartlar',
    moduleOrder: 1,
    description: '1997-yil W3C tomonidan qabul qilingan standart: Jadvallar, matnni o‘rash va appletlar.',
    estimatedMinutes: 6,
    spec: 'W3C Recommendation 1997',
    kidAnalogy: 'Oddiy qog‘ozga katakli jadvallar va harakatlanuvchi rasmlar chizish.',
    cppInternalCode: '// Netscape / W3C 3.2 Table Parser\nclass TableLayoutEngine;',
    content: `## 📊 HTML 3.2 Inqilobi\n\nBu versiyada veb sahifalarda to‘liq jadvallar (\`<table>\`), matn ranglari (\`<font>\`) va JavaScript kodlarini kiritish (\`<script>\`) standartlashtirildi.`,
    codeExample: `<table border="1">\n  <tr><th>Ism</th><th>Kasb</th></tr>\n  <tr><td>Ali</td><td>Dasturchi</td></tr>\n</table>`,
  },
  'html-4-01': {
    id: '1.4',
    slug: 'html-4-01',
    title: 'HTML 4.01 va Strict / Transitional Doctype',
    moduleTitle: '01. Tarix va Standartlar',
    moduleOrder: 1,
    description: '1999-yil W3C standarti: CSS stillarini HTML tuzilmasidan to‘liq ajratish tamoyili.',
    estimatedMinutes: 7,
    spec: 'W3C HTML 4.01',
    kidAnalogy: 'Suyak (HTML) va uning kiyimini (CSS) alohida xonalarga ajratish.',
    cppInternalCode: '// Quirks Mode vs Standards Mode bitmask\nenum DocumentMode { kStandardsMode, kQuirksMode };',
    content: `## 🏛️ HTML 4.01 ning 3 Xil Doctype Rejimi\n\n- **Strict**: Faqat semantik teglar (bezaklar CSS ga o‘tadi).\n- **Transitional**: Eski \`<font>\` va \`<center>\` teglariga ruxsat.\n- **Frameset**: Sahifani freymlarga bo‘lish.`,
    codeExample: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`,
  },
  'xhtml-davri': {
    id: '1.5',
    slug: 'xhtml-davri',
    title: 'XHTML — XML Qat’iyligi va "Yellow Screen of Death"',
    moduleTitle: '01. Tarix va Standartlar',
    moduleOrder: 1,
    description: 'XML sintaksisiga asoslangan qat’iy qoidalar va nega u internetda yashab ketolmadi.',
    estimatedMinutes: 7,
    spec: 'W3C XHTML 1.0 / 2.0',
    kidAnalogy: 'Bitta nuqtani adashtirib qo‘ysangiz, butun daftar yirtib tashlanadigan qattiqqo‘l dars.',
    cppInternalCode: '// Strict XML Parsing Error Exit\nif (!xml_parser.CheckWellFormed()) return ErrorFatal();',
    content: `## ⚠️ XHTML Nega Muvaffaqiyatsizlikka Uchradi?\n\nXHTML da bitta yopilmagan \`<br/>\` tegi butun sahifaning sariq ekran xatosi (Yellow Screen of Death) bilan ochilmay qolishiga sabab bo‘lardi. Veb esa xatolarga chidamli (Fault Tolerant) bo‘lishi shart edi.`,
    codeExample: `<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">\n<html xmlns="http://www.w3.org/1999/xhtml">`,
  },
  'html5-inqilobi': {
    id: '1.6',
    slug: 'html5-inqilobi',
    title: 'HTML5 Inqilobi va WHATWG Living Standard',
    moduleTitle: '01. Tarix va Standartlar',
    moduleOrder: 1,
    description: 'Apple, Mozilla, Opera va Google tomonidan tuzilgan WHATWG va zamonaviy Living Standard.',
    estimatedMinutes: 8,
    spec: 'WHATWG HTML Living Standard',
    kidAnalogy: 'Doimiy ravishda o‘z-o‘zini yangilab boradigan aqlli qoidalar kitobi.',
    cppInternalCode: '// Blink HTML5 Stream Parser\nblink::HTMLDocumentParser::Parse(chunk);',
    content: `## 🌟 WHATWG Living Standard G‘alabasi\n\nHTML5 — nafaqat yangi teglar (\`<video>\`, \`<canvas>\`, \`<dialog>\`), balki brauzerlar ichida qanday xatolar to‘g‘rilanishi va DOM qanday qurilishi haqidagi eng mukammal standartdir.`,
    codeExample: `<!DOCTYPE html>\n<html lang="uz">\n  <head><meta charset="UTF-8"></head>\n  <body>\n    <video src="clip.mp4" controls></video>\n  </body>\n</html>`,
  },

  // ==========================================
  // 02. HTML ASOSLARI
  // ==========================================
  'html-nima-markup': {
    id: '2.1',
    slug: 'html-nima-markup',
    title: 'Markup Nima? Element, Teg va Atributlar',
    moduleTitle: '02. HTML Asoslari',
    moduleOrder: 2,
    description: 'Gipermatnli belgilash tili qoidalari, Element anatomyasi va nomlash standartlari.',
    estimatedMinutes: 5,
    spec: 'WHATWG 3.2.1',
    kidAnalogy: 'Chizgan rasmingiz tagiga "Bu mushukcha" deb yozib qo‘yilgan stiker.',
    cppInternalCode: '// HTMLElement DOM node struct\nstruct HTMLElement : public Element { AtomicString tag_name; };',
    content: `## 🧩 Elementning 3 Asosiy Qismi\n\n1. **Ochuvchi teg**: \`<p class="text">\`\n2. **Kontent**: \`Salom Dunyo\`\n3. **Yopuvchi teg**: \`</p>\``,
    codeExample: `<p class="greeting" id="welcome">Salom Dunyo!</p>`,
  },
  'nesting-parent-child': {
    id: '2.2',
    slug: 'nesting-parent-child',
    title: 'Nesting, Parent / Child Ierarxiyasi',
    moduleTitle: '02. HTML Asoslari',
    moduleOrder: 2,
    description: 'Elementlarning ichma-ich joylashishi, daraxt shajarasi va xatolarni tuzatish.',
    estimatedMinutes: 6,
    spec: 'WHATWG 3.2.4',
    kidAnalogy: 'Katta quti ichiga kichik qutichalarni taxlab joylashtirish.',
    cppInternalCode: '// C++ DOM Tree Pointer Node\nclass ContainerNode : public Node { Node* first_child_; Node* last_child_; };',
    content: `## 🌳 Daraxt Shajarasi (DOM Hierarchy)\n\nOta element (Parent) barcha bolalarini (Child) o‘z ichiga oladi. Hech qachon teglarni chalkashtirib yopish mumkin emas (\`<b><i></b></i>\` xato!).`,
    codeExample: `<div class="parent">\n  <p class="child">Men bola elementman: <strong>muhim</strong></p>\n</div>`,
  },
  'character-references': {
    id: '2.3',
    slug: 'character-references',
    title: 'HTML Entities & Character References (&amp;, &lt;, &gt;)',
    moduleTitle: '02. HTML Asoslari',
    moduleOrder: 2,
    description: 'Maxsus belgilar, himoyalangan harflar va unikal belgilar kiritish.',
    estimatedMinutes: 5,
    spec: 'WHATWG 13.5 Named Character References',
    kidAnalogy: 'Sehrli belgilar (masalan © yoki ♥) uchun yoziladigan sirli kodlar.',
    cppInternalCode: '// Entity Decoder C++\nUChar32 HTMLEntityParser::Decode(const String& name);',
    content: `## 🔣 Eng Muhim Entity Kodlari\n\n- \`&lt;\` — \`<\` (Less than)\n- \`&gt;\` — \`>\` (Greater than)\n- \`&amp;\` — \`&\` (Ampersand)\n- \`&copy;\` — \`©\` (Copyright)\n- \`&nbsp;\` — Bo‘shliq (Non-breaking space)`,
    codeExample: `<p>Formula: a &lt; b bo&lsquo;lsa, natija &copy; 2026</p>`,
  },

  // ==========================================
  // 03. HUJJAT TUZILISHI
  // ==========================================
  'doctype-va-skelet': {
    id: '3.1',
    slug: 'doctype-va-skelet',
    title: '<!DOCTYPE html>, <html>, <head> va <body>',
    moduleTitle: '03. Hujjat Tuzilishi',
    moduleOrder: 3,
    description: 'Har bir veb-sahifaning poydevor skeleti va brauzer rendering rejimlari.',
    estimatedMinutes: 6,
    spec: 'WHATWG 4.1 - 4.3',
    kidAnalogy: 'Uyning beton poydevori, tomi va yashaydigan xonalari.',
    cppInternalCode: '// Blink Document Type Parsing\nHTMLDocumentParser::ProcessDoctypeToken();',
    content: `## 🏗️ Standart Hujjat Skeleti\n\n\`<!DOCTYPE html>\` — brauzerga eng so‘nggi standart rejimida (No-Quirks Mode) ishlashni buyuradi.`,
    codeExample: `<!DOCTYPE html>\n<html lang="uz">\n  <head>\n    <meta charset="UTF-8">\n    <title>Sarlavha</title>\n  </head>\n  <body>\n    <h1>Sahifa Mazmuni</h1>\n  </body>\n</html>`,
  },
  'meta-link-base': {
    id: '3.2',
    slug: 'meta-link-base',
    title: '<meta>, <link>, <style> va <base> Teglari',
    moduleTitle: '03. Hujjat Tuzilishi',
    moduleOrder: 3,
    description: 'Resurslarni boshqarish, nisbiy havolalar bazasi va OpenGraph metadatalari.',
    estimatedMinutes: 6,
    spec: 'WHATWG 4.2.3 - 4.2.6',
    kidAnalogy: 'Daftarning chetidagi yo‘llanmalar va manzil belgilari.',
    cppInternalCode: '// Resource Preloader C++\nPreloadScanner::ScanAndPreload(raw_html);',
    content: `## 🔗 <base> Tegi Nima Qiladi?\n\n\`<base href="https://kodx.uz/assets/">\` qo‘yilsa, barcha nisbiy havolalar shu asosiy URL dan boshlab qidiriladi.`,
    codeExample: `<base href="https://kodx.uz/">\n<link rel="stylesheet" href="style.css">\n<meta name="theme-color" content="#22c55e">`,
  },

  // ==========================================
  // 04. MATN ELEMENTLARI
  // ==========================================
  'matn-formatlash-inline': {
    id: '4.1',
    slug: 'matn-formatlash-inline',
    title: 'Matn Elementlari: <h1>-<h6>, <p>, <strong>, <em>, <mark>, <time>',
    moduleTitle: '04. Matn Elementlari',
    moduleOrder: 4,
    description: 'Tipografik semantika, o‘chirilgan/qo‘shilgan matnlar (<del>, <ins>) va dasturchilar teglari (<code>, <pre>, <kbd>).',
    estimatedMinutes: 8,
    spec: 'WHATWG 4.4 & 4.5',
    kidAnalogy: 'Matn ustiga chiziladigan sariq marker yoki kitobdagi qalin harflar.',
    cppInternalCode: '// Phrasing Model Verification\nbool IsPhrasingContent(const Node& node);',
    content: `## 📝 Matn Semantikasi\n\n- \`<strong>\` — Muhim, qat’iy ma’no.\n- \`<em>\` — Urg‘u berilgan so‘z.\n- \`<mark>\` — Sariq rangli ajratilgan qism.\n- \`<time datetime="2026-08-18">\` — Mashina tushunadigan sana.\n- \`<kbd>\` — Klaviatura tugmasi (masalan: Ctrl+C).`,
    codeExample: `<p>Dars <time datetime="2026-08-18">18-avgust</time> kuni <mark>KODX</mark> da boshlanadi. Saqlash: <kbd>Ctrl</kbd> + <kbd>S</kbd></p>`,
  },

  // ==========================================
  // 05. SEMANTIK
  // ==========================================
  'semantik-landmarks': {
    id: '5.1',
    slug: 'semantik-landmarks',
    title: 'Semantik Bo‘limlar: <header>, <nav>, <main>, <article>, <aside>, <footer>',
    moduleTitle: '05. Semantik',
    moduleOrder: 5,
    description: 'Sahifa tuzilmasini ekranda va qidiruv botlarida to‘g‘ri ajratish.',
    estimatedMinutes: 8,
    spec: 'WHATWG 4.3 Sectioning',
    kidAnalogy: 'Gazetadagi sarlavha, asosiy maqola va oxiridagi e’lonlar ustuni.',
    cppInternalCode: '// Accessibility AXObject Role Mapping\nAXRole MapTagToRole(const Element& element);',
    content: `## 🏛️ Landmark Rollari\n\nHar bir semantik teg brauzerda maxsus ARIA roliga ega:\n- \`<header>\` -> \`banner\`\n- \`<nav>\` -> \`navigation\`\n- \`<main>\` -> \`main\`\n- \`<footer>\` -> \`contentinfo\``,
    codeExample: `<header><nav>...</nav></header>\n<main><article><h2>Post</h2></article></main>\n<footer>&copy; 2026</footer>`,
  },

  // ==========================================
  // 06. HAVOLALAR VA URL
  // ==========================================
  'havolalar-url': {
    id: '6.1',
    slug: 'havolalar-url',
    title: 'Havolalar (<a>), href, target, rel va URL Turlari',
    moduleTitle: '06. Havolalar va URL',
    moduleOrder: 6,
    description: 'Mutlaq va nisbiy URL lar, fragment (#anchor), target="_blank" va rel="noopener noreferrer" xavfsizligi.',
    estimatedMinutes: 7,
    spec: 'WHATWG 4.5.1',
    kidAnalogy: 'Xaritadagi boshqa shaharga olib boruvchi ko‘prik.',
    cppInternalCode: '// HTMLAnchorElement Navigation\nHTMLAnchorElement::FollowHref();',
    content: `## 🛡️ target="_blank" Xavfsizlik Qoidasi\n\nYangi tabda ochiluvchi havolalarda doimo \`rel="noopener noreferrer"\` yozilishi shart. Aks holda ochilgan begona sayt \`window.opener\` orqali sizning sahifangizni fishing saytga yo‘naltirib qo‘yishi mumkin!`,
    codeExample: `<a href="https://kodx.uz" target="_blank" rel="noopener noreferrer" download="guide.pdf">Yuklab olish</a>`,
  },

  // ==========================================
  // 07. RO‘YXATLAR
  // ==========================================
  'royxatlar': {
    id: '7.1',
    slug: 'royxatlar',
    title: 'Ro‘yxatlar: <ul>, <ol>, <li> va Ta’riflar Lug‘ati (<dl>, <dt>, <dd>)',
    moduleTitle: '07. Ro‘yxatlar',
    moduleOrder: 7,
    description: 'Tartiblangan va tartibsiz ro‘yxatlar, ichma-ich ro‘yxatlar va ta’riflar arxitekturasi.',
    estimatedMinutes: 6,
    spec: 'WHATWG 4.4.5 - 4.4.11',
    kidAnalogy: 'Bozorlik ro‘yxati yoki so‘zlar lug‘ati.',
    cppInternalCode: '// HTMLOListElement Counter C++\nint HTMLOListElement::GetStart() const;',
    content: `## 📖 <dl> — Definition List Nima?\n\nAtamalar va ularning ta’riflarini yozish uchun maxsus semantik ro‘yxat:\n- \`<dt>\` — Definition Term (Atama)\n- \`<dd>\` — Definition Description (Izohi)`,
    codeExample: `<dl>\n  <dt>HTML</dt>\n  <dd>Gipermatnli belgilash tili.</dd>\n  <dt>CSS</dt>\n  <dd>Kaskadli stillar jadvali.</dd>\n</dl>`,
  },

  // ==========================================
  // 08. RASMLAR
  // ==========================================
  'rasmlar-responsive': {
    id: '8.1',
    slug: 'rasmlar-responsive',
    title: 'Rasmlar: <img>, <picture>, srcset, sizes va CLS Oldini Olish',
    moduleTitle: '08. Rasmlar',
    moduleOrder: 8,
    description: 'Zamonaviy AVIF va WebP formatlari, loading="lazy", decoding="async" va Cumulative Layout Shift (CLS).',
    estimatedMinutes: 8,
    spec: 'WHATWG 4.8.1 - 4.8.3',
    kidAnalogy: 'Telefon uchun kichik, televizor uchun katta rasm tanlovchi aqlli foto-ramka.',
    cppInternalCode: '// Blink ImageLoader & AspectRatio\nLayoutSize ComputeIntrinsicSize();',
    content: `## 🚀 CLS Oldini Olish Qoidasi\n\nHar bir \`<img>\` tegida \`width\` va \`height\` atributlari berilishi shart. Shunda rasm yuklanguncha brauzer uning o‘rnini bo‘sh qoldiradi va sahifa sakrab ketmaydi!`,
    codeExample: `<picture>\n  <source srcset="hero.avif" type="image/avif">\n  <source srcset="hero.webp" type="image/webp">\n  <img src="hero.jpg" alt="Banner" width="800" height="400" loading="lazy">\n</picture>`,
  },

  // ==========================================
  // 09. AUDIO / VIDEO
  // ==========================================
  'audio-video': {
    id: '9.1',
    slug: 'audio-video',
    title: 'Multimedia: <audio>, <video>, <source> va <track> Subtitrlari',
    moduleTitle: '09. Audio / Video',
    moduleOrder: 9,
    description: 'Nativ audio/video pleyer, WebVTT formatidagi subtitrlar va media boshqaruv atributlari.',
    estimatedMinutes: 7,
    spec: 'WHATWG 4.8.9 - 4.8.11',
    kidAnalogy: 'Pultli kichik televizor va kinoga yozilgan o‘zbekcha subtitrlar.',
    cppInternalCode: '// WebMediaPlayer Hardware Decoding\nWebMediaPlayer::Play();',
    content: `## 🎬 Subtitrlar Ulanishi (<track>)\n\n\`<track kind="subtitles" src="subs_uz.vtt" srclang="uz" label="O‘zbekcha">\` orqali xalqaro ko‘zi ojiz yoki qulog‘i og‘ir insonlar uchun qulaylik (Accessibility) yaratiladi.`,
    codeExample: `<video controls width="640" poster="thumb.jpg">\n  <source src="lesson.mp4" type="video/mp4">\n  <track src="sub_uz.vtt" kind="subtitles" srclang="uz" label="O‘zbekcha">\n</video>`,
  },

  // ==========================================
  // 10. JADVALLAR
  // ==========================================
  'jadvallar': {
    id: '10.1',
    slug: 'jadvallar',
    title: 'Jadvallar: <table>, <thead>, <tbody>, <tfoot>, colspan va rowspan',
    moduleTitle: '10. Jadvallar',
    moduleOrder: 10,
    description: '2 o‘lchamli qator va ustunlar, kataklarni birlashtirish va semantik jadval sarlavhalari (scope).',
    estimatedMinutes: 7,
    spec: 'WHATWG 4.9',
    kidAnalogy: 'Maktab kundaligidagi chizilgan dars jadvali.',
    cppInternalCode: '// Blink Table Layout Solver C++\nvoid LayoutTableSection::ComputeCellPositions();',
    content: `## 🧮 Kataklarni Birlashtirish\n\n- \`colspan="2"\` — 2 ta ustunni birlashtiradi.\n- \`rowspan="2"\` — 2 ta qatorni vertikal birlashtiradi.`,
    codeExample: `<table>\n  <caption>Oylik Hisobot</caption>\n  <thead><tr><th scope="col">Oy</th><th scope="col">Foyda</th></tr></thead>\n  <tbody><tr><td>Yanvar</td><td>$10,000</td></tr></tbody>\n</table>`,
  },

  // ==========================================
  // 11. FORMS
  // ==========================================
  'formalar-inputs': {
    id: '11.1',
    slug: 'formalar-inputs',
    title: 'Formalar: <form>, <input> Barcha Turlari va Constraint Validation',
    moduleTitle: '11. Forms',
    moduleOrder: 11,
    description: 'Text, email, password, date, file, range, checkbox, radio va HTML5 nativ validatsiya qoidalari.',
    estimatedMinutes: 9,
    spec: 'WHATWG 4.10',
    kidAnalogy: 'Pochta qutisiga tashlanadigan anketani to‘ldirish.',
    cppInternalCode: '// HTMLInputElement Constraint Check\nbool HTMLInputElement::checkValidity();',
    content: `## 🛡️ Nativ Validatsiya\n\nJavaScript yozmasdan brauzer darajasida tekshirish:\n\`required\`, \`pattern="[A-Z]{3}"\`, \`min="18"\`, \`max="100"\`, \`type="email"\`.`,
    codeExample: `<form action="/register" method="POST">\n  <label for="email">Email:</label>\n  <input type="email" id="email" required>\n  <button type="submit">Yuborish</button>\n</form>`,
  },

  // ==========================================
  // 12. INTERACTIVE ELEMENTLAR
  // ==========================================
  'interactive-dialog-popover': {
    id: '12.1',
    slug: 'interactive-dialog-popover',
    title: 'Interaktiv: <dialog>, <details>, <summary> va Popover API',
    moduleTitle: '12. Interactive Elementlar',
    moduleOrder: 12,
    description: 'Nativ modal oynalar, Top Layer stacking, akkordeonlar va zamonaviy HTML Popover API.',
    estimatedMinutes: 8,
    spec: 'WHATWG 4.11',
    kidAnalogy: 'Qutining qopqog‘ini ochib ko‘rish yoki ekranga chiquvchi sehrli xabar.',
    cppInternalCode: '// Top Layer Inert Node Controller\nTopLayerManager::PromoteToTopLayer(dialog_element);',
    content: `## 🪄 Zamonaviy Popover API\n\nEndi bitta atribut orqali tooltip va menyular yasash mumkin:\n\`<button popovertarget="my-pop">Ochish</button>\`\n\`<div id="my-pop" popover>Salom Popover!</div>\``,
    codeExample: `<button popovertarget="infoBox">Ko‘rsatish</button>\n<div id="infoBox" popover>Bu brauzerning Popover menyusi!</div>`,
  },

  // ==========================================
  // 13. EMBEDDED CONTENT
  // ==========================================
  'embedded-iframe-canvas-svg': {
    id: '13.1',
    slug: 'embedded-iframe-canvas-svg',
    title: 'O‘rnatilgan Kontent: <iframe>, <embed>, <object> va MathML',
    moduleTitle: '13. Embedded Content',
    moduleOrder: 13,
    description: 'Xavfsiz sandboxli ifreymlar, tashqi hujjatlar va matematik formulalar (MathML).',
    estimatedMinutes: 7,
    spec: 'WHATWG 4.8.5 - 4.8.17',
    kidAnalogy: 'Uy devoriga qo‘yilgan oyna orqali qo‘shni hovliga qarash.',
    cppInternalCode: '// Blink IFrame Sandboxing Security\nSubframeLoadingDisabler disabler;',
    content: `## 🛡️ iframe sandbox Himoyasi\n\nBegona saytlardan yuklangan ifreymlar zarar keltirmasligi uchun:\n\`<iframe src="..." sandbox="allow-scripts allow-same-origin">\` atributi beriladi.`,
    codeExample: `<iframe src="https://example.com" sandbox="allow-scripts" title="Demo" width="500" height="300"></iframe>`,
  },

  // ==========================================
  // 14. CANVAS
  // ==========================================
  'canvas-2d-webgl': {
    id: '14.1',
    slug: 'canvas-2d-webgl',
    title: 'HTML5 Canvas: 2D Grafika, Animatsiyalar va WebGL',
    moduleTitle: '14. Canvas',
    moduleOrder: 14,
    description: 'Piksellar bilan ishlash, chiziqlar, shakllar, tasvirlar manipulyatsiyasi va 60 FPS o‘yinlar.',
    estimatedMinutes: 9,
    spec: 'WHATWG 4.12.5 Canvas Context',
    kidAnalogy: 'Kompyuter ichidagi cheksiz oq qog‘oz va unga rasm chizuvchi robot qalam.',
    cppInternalCode: '// Canvas2D Skia Rasterization C++\nSkCanvas* canvas = context->GetSkCanvas();',
    content: `## 🎨 2D Kontekstda Chizish\n\n\`<canvas id="stage" width="400" height="300"></canvas>\`\n\n\`\`\`javascript\nconst ctx = stage.getContext('2d');\nctx.fillStyle = '#22c55e';\nctx.fillRect(50, 50, 100, 100);\n\`\`\``,
    codeExample: `<canvas id="demoCanvas" width="300" height="150" style="border:1px solid #333;"></canvas>`,
  },

  // ==========================================
  // 15. SVG
  // ==========================================
  'svg-grafika': {
    id: '15.1',
    slug: 'svg-grafika',
    title: 'SVG (Scalable Vector Graphics): <path>, <circle>, Maskalar va Animatsiyalar',
    moduleTitle: '15. SVG',
    moduleOrder: 15,
    description: 'Vektorli grafika, kattalashtirganda sifatini yo‘qotmaydigan ikonka va shakllar.',
    estimatedMinutes: 8,
    spec: 'W3C SVG 2 Standard',
    kidAnalogy: 'Har qancha kattalashtirsa ham qirrasi xiralashmaydigan sehrli chizg‘ich.',
    cppInternalCode: '// SVG Path Parsing in C++\nSVGPathParser::ParsePathData();',
    content: `## 📐 SVG ning Pikselli Rasmlardan Farqi\n\nSVG matematik koordinatalar (\`x, y\`, radius, egri chiziqlar \`<path d="M..."/>\`) asosida chiziladi. 8K televizorda ham tiniq ko‘rinadi!`,
    codeExample: `<svg width="100" height="100" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="40" stroke="#22c55e" stroke-width="4" fill="#18181b" />\n</svg>`,
  },

  // ==========================================
  // 16. GLOBAL ATTRIBUTLAR
  // ==========================================
  'global-attributlar': {
    id: '16.1',
    slug: 'global-attributlar',
    title: 'Global Atributlar: id, class, hidden, tabindex, contenteditable, data-*',
    moduleTitle: '16. Global Attributlar',
    moduleOrder: 16,
    description: 'Barcha HTML elementlarida ishlovchi universal parametrlar va datasetlar.',
    estimatedMinutes: 7,
    spec: 'WHATWG 3.2.6 Global Attributes',
    kidAnalogy: 'Har qanday o‘yinchoqqa yopishtirsa bo‘ladigan universal tugmachalar.',
    cppInternalCode: '// ElementData Attribute Vector in Blink\nVector<Attribute, 4> attributes_;',
    content: `## 🎯 Muhim Global Parametrlar\n\n- \`hidden\` — elementni butunlay yashirish (\`display: none\`).\n- \`contenteditable="true"\` — foydalanuvchiga matnni to‘g‘ridan-to‘g‘ri tahrirlash imkonini beradi.\n- \`tabindex="0"\` — klaviatura orqali fokuslanuvchi qilish.`,
    codeExample: `<div id="card-1" class="box" contenteditable="true" data-user-id="42">Bu tahrirlanadigan matn.</div>`,
  },

  // ==========================================
  // 17. SCRIPTING
  // ==========================================
  'scripting-async-defer': {
    id: '17.1',
    slug: 'scripting-async-defer',
    title: 'Skriptlar: <script>, async, defer, type="module" va <noscript>',
    moduleTitle: '17. Scripting',
    moduleOrder: 17,
    description: 'JavaScriptni sahifaga yuklash strategiyalari va sahifa qotishini (Parser Blocking) bartaraf etish.',
    estimatedMinutes: 8,
    spec: 'WHATWG 4.12.1',
    kidAnalogy: 'Kitob o‘qiyotganda musiqani fonda yoqib qo‘yish (o‘qish to‘xtab qolmaydi).',
    cppInternalCode: '// ScriptLoader C++ Async Handler\nScriptLoader::ExecuteScript();',
    content: `## ⚡ async vs defer Farqi\n\n- **async**: Yuklangan soniyadayoq HTML parsingni to‘xtatib bajariladi.\n- **defer** (Tavsiya): HTML to‘liq o‘qib bo‘lingandan so‘ng ketma-ket tartibda bajariladi.`,
    codeExample: `<script src="app.js" defer></script>\n<script type="module" src="main.js"></script>\n<noscript>Iltimos, brauzeringizda JavaScriptni yoqing.</noscript>`,
  },

  // ==========================================
  // 18. WEB COMPONENTS
  // ==========================================
  'web-components': {
    id: '18.1',
    slug: 'web-components',
    title: 'Web Components: Custom Elements, Shadow DOM, <template> va <slot>',
    moduleTitle: '18. Web Components',
    moduleOrder: 18,
    description: 'Frameworklarsiz o‘z xususiy teglaringizni (<user-card>) yaratish va stillarni to‘liq izolyatsiya qilish.',
    estimatedMinutes: 9,
    spec: 'W3C Custom Elements & Shadow DOM v1',
    kidAnalogy: 'O‘zingiz yangi Lego detalini kashf qilib, butun shaharchaga tarqatish.',
    cppInternalCode: '// CustomElementRegistry C++\nCustomElementRegistry::define(name, constructor);',
    content: `## 🛡️ Shadow DOM Nima?\n\nShadow DOM ichidagi CSS stillari tashqaridagi sahifaga chiqmaydi va tashqaridagi CSS ham komponent ichini buza olmaydi (To‘liq inkapsulyatsiya).`,
    codeExample: `<template id="card-template">\n  <style>h2 { color: #22c55e; }</style>\n  <h2><slot name="title">Standart Sarlavha</slot></h2>\n</template>`,
  },

  // ==========================================
  // 19. HTML PARSER
  // ==========================================
  'html-parser-internals': {
    id: '19.1',
    slug: 'html-parser-internals',
    title: 'HTML Parser: Tokenizer, Tree Construction va Error Recovery',
    moduleTitle: '19. HTML Parser',
    moduleOrder: 19,
    description: 'Blink dvigateli xato yozilgan HTML kodlarni qanday qilib avtomatik to‘g‘rilaydi.',
    estimatedMinutes: 9,
    spec: 'WHATWG 13.2 Parsing Model',
    kidAnalogy: 'Buzilgan o‘yinchoqni usta avtomatik tuzatib o‘z o‘rniga qo‘yishi.',
    cppInternalCode: '// HTMLTreeBuilder Insertion Modes\nvoid HTMLTreeBuilder::ProcessToken(HTMLToken& token);',
    content: `## 🔧 Xatolarni To‘g‘rilash (Adoption Agency Algorithm)\n\nAgar siz \`<p><b>Salom</p> Dunyo</b>\` deb xato yozsangiz ham, parser uni avtomatik ravishda to‘g‘ri DOM daraxtiga keltiradi.`,
    codeExample: `<!-- Noto'g'ri yozilgan kod ham brauzer tomonidan to'g'irlanadi -->\n<p>Salom <b>dunyo</p></b>`,
  },

  // ==========================================
  // 20. ACCESSIBILITY
  // ==========================================
  'accessibility-a11y': {
    id: '20.1',
    slug: 'accessibility-a11y',
    title: 'Accessibility (A11y): WCAG 2.2, ARIA Rollar va Klaviatura Boshqaruvi',
    moduleTitle: '20. Accessibility',
    moduleOrder: 20,
    description: 'Imkoniyati cheklangan foydalanuvchilar uchun vebni qulay qilish va AXTree qoidalari.',
    estimatedMinutes: 8,
    spec: 'W3C WCAG 2.2 / WAI-ARIA 1.2',
    kidAnalogy: 'Ko‘chada aravachada yuruvchilar uchun pandus va ovozli svetoforlar o‘rnatish.',
    cppInternalCode: '// Chromium Accessibility AXObject Tree\nAXObject::InitAccessibility();',
    content: `## ♿ Oltin Qoida: "First Rule of ARIA"\n\nAgar element uchun standart semantik teg (\`<button>\`) mavjud bo‘lsa, hech qachon \`<div role="button">\` qilmang!`,
    codeExample: `<button aria-label="Menyuni yopish" aria-expanded="false">\n  <span aria-hidden="true">✕</span>\n</button>`,
  },

  // ==========================================
  // 21. SEO
  // ==========================================
  'seo-structured-data': {
    id: '21.1',
    slug: 'seo-structured-data',
    title: 'Google SEO: Canonical, Robots, OpenGraph va JSON-LD Strukturaviy Ma’lumotlar',
    moduleTitle: '21. SEO',
    moduleOrder: 21,
    description: 'Google qidiruvida 1-o‘ringa chiqish, Rich Snippets kartochkalari va schema.org.',
    estimatedMinutes: 8,
    spec: 'Google Search Central / Schema.org',
    kidAnalogy: 'Magazin peshtaxtasiga chiroyli va yorqin e’lon yopishtirish.',
    cppInternalCode: '// JSON-LD Extraction for Search Indexing\nvoid ExtractMicrodata(Document& doc);',
    content: `## 🌟 JSON-LD Schema Misoli\n\nGoogle sizning kurslaringizni to‘g‘ridan-to‘g‘ri qidiruv natijalarida yulduzchalar bilan chiqarishi uchun:`,
    codeExample: `<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Course",\n  "name": "KODX HTML Injiniringi",\n  "provider": "KODX.uz"\n}\n</script>`,
  },

  // ==========================================
  // 22. SECURITY
  // ==========================================
  'web-security-xss-csp': {
    id: '22.1',
    slug: 'web-security-xss-csp',
    title: 'Web Xavfsizligi: XSS, CSP (Content Security Policy) va iframe Sandboxing',
    moduleTitle: '22. Security',
    moduleOrder: 22,
    description: 'Zararli skriptlar hujumidan himoyalanish va xavfsiz HTTP headerlar.',
    estimatedMinutes: 8,
    spec: 'W3C CSP Level 3 / OWASP Top 10',
    kidAnalogy: 'Uy eshigiga qo‘yilgan ruxsatsiz hech kimni kiritmaydigan aqlli qorovul.',
    cppInternalCode: '// Content Security Policy Enforcer\nbool CSP::AllowScriptFromSource(const KURL& url);',
    content: `## 🛡️ Content Security Policy (CSP)\n\nFaqat ishonchli manbalardan skript yuklashga ruxsat berish:\n\`<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' https://trusted.com">\``,
    codeExample: `<meta http-equiv="Content-Security-Policy" content="default-src 'self';">`,
  },

  // ==========================================
  // 23. BROWSER BILAN ISHLASH
  // ==========================================
  'browser-render-pipeline': {
    id: '23.1',
    slug: 'browser-render-pipeline',
    title: 'Brauzer Render Pipeline: DOM → CSSOM → Render Tree → Layout → Paint → Composite',
    moduleTitle: '23. Browser Bilan Ishlash',
    moduleOrder: 23,
    description: 'Ekrandagi piksellar hosil bo‘lishining barcha 6 bosqichi va 120 FPS unumdorlik.',
    estimatedMinutes: 9,
    spec: 'Chromium Rendering Architecture',
    kidAnalogy: 'Katta kinofilm kadrma-kadr montaj qilinishi va ekranda porlashi.',
    cppInternalCode: '// Compositor Thread Rasterization\nvoid Compositor::CommitAndDrawFrame();',
    content: `## ⚡ 60 FPS Animatsiya Sirlari\n\nFaqat **GPU Compositor Thread** da ishlovchi \`transform\` va \`opacity\` xususiyatlari Layout va Paint bosqichlarini chetlab o‘tib, silliq harakat beradi!`,
    codeExample: `/* 120 FPS GPU animatsiya */\n.smooth-card {\n  will-change: transform;\n  transform: translate3d(0, 0, 0);\n}`,
  },

  // ==========================================
  // 24. DEPRECATED / OBSOLETE
  // ==========================================
  'deprecated-obsolete': {
    id: '24.1',
    slug: 'deprecated-obsolete',
    title: 'Eskirgan va Taqiqlangan Teglar: <font>, <center>, <marquee>, <applet>, <frameset>',
    moduleTitle: '24. Deprecated / Obsolete',
    moduleOrder: 24,
    description: 'Nega bu teglar olib tashlandi va ularning o‘rniga qaysi zamonaviy CSS texnologiyalari ishlatiladi.',
    estimatedMinutes: 6,
    spec: 'WHATWG Obsolete Features 15.3',
    kidAnalogy: 'Muzeydagi qadimiy eski bug‘ mashinalari.',
    cppInternalCode: '// Blink Obsolete Tag Warning\nAddConsoleWarning("Tag is obsolete. Use CSS instead.");',
    content: `## 🚫 O‘rniga Nima Ishlatish Kerak?\n\n- \`<center>\` -> CSS \`margin: auto\` yoki Flexbox.\n- \`<font color="red">\` -> CSS \`color: red\`.\n- \`<marquee>\` -> CSS \`@keyframes\` animatsiyasi.`,
    codeExample: `/* Eski: <marquee>Salom</marquee> */\n/* Yangi zamonaviy CSS: */\n@keyframes scrollText { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }`,
  },

  // ==========================================
  // 25. REFERENCE
  // ==========================================
  'html-reference-matrix': {
    id: '25.1',
    slug: 'html-reference-matrix',
    title: 'HTML Master Reference: Barcha Elementlar, Atributlar va Brauzerlar Muvofiqligi',
    moduleTitle: '25. Reference',
    moduleOrder: 25,
    description: 'WHATWG Living Standard bo‘yicha 162 ta tegning qisqa qo‘llanmasi va CanIUse mosligi.',
    estimatedMinutes: 10,
    spec: 'WHATWG Complete Element Index',
    kidAnalogy: 'Dunyoning eng to‘liq va boy ensiklopediyasi.',
    cppInternalCode: '// Complete WHATWG Node Index\nconst HTMLTagInfo kTagTable[162];',
    content: `## 📚 Global HTML Reference Matrix\n\nKODX Universal Knowledge Explorer orqali barcha 162 ta teg, 85 ta global va maxsus atributlar va ularning brauzerlar mosligini tekshirishingiz mumkin.`,
    codeExample: `<!-- KODX Reference Ready -->\n<div class="kodx-reference-universe"></div>`,
  },
};
