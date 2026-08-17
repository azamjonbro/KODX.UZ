import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 KODX 2.0 Global Knowledge Universe & Courses Seeding boshlanmoqda...');

  // 1. Clean existing content
  await prisma.knowledgeNode.deleteMany();
  await prisma.knowledgeCategory.deleteMany();
  await prisma.testCase.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.practiceTask.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.courseModule.deleteMany();
  await prisma.course.deleteMany();

  console.log('🧹 Eski ma’lumotlar tozalandi.');

  // =========================================================================
  // 1. HTML KNOWLEDGE CATEGORIES & NODES
  // =========================================================================

  // Category 1: Hujjat Asoslari va Metadata
  const catRoot = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'root-and-metadata',
      name: 'Hujjat Asoslari va Metadata',
      description: '<!DOCTYPE>, <html>, <head>, <title>, <base>, <link>, <meta>, <style>',
      order: 1,
    },
  });

  // Category 2: Semantik Bo‘limlar (Sectioning)
  const catSectioning = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'sectioning',
      name: 'Semantik Bo‘limlar (Sectioning)',
      description: '<body>, <header>, <nav>, <main>, <article>, <section>, <aside>, <footer>, <address>, <hgroup>, <h1>-<h6>',
      order: 2,
    },
  });

  // Category 3: Matn va Inline Semantika
  const catText = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'text-and-inline',
      name: 'Matn va Inline Semantika',
      description: '<p>, <hr>, <pre>, <blockquote>, <ol>, <ul>, <li>, <dl>, <a>, <strong>, <em>, <code>, <mark>, <span>, <br>',
      order: 3,
    },
  });

  // Category 4: Tasvirlar va Multimedia
  const catMedia = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'media-and-embedded',
      name: 'Tasvirlar, Multimedia va O‘rnatilgan Kontent',
      description: '<img>, <picture>, <source>, <video>, <audio>, <track>, <iframe>, <canvas>, <svg>, <math>',
      order: 4,
    },
  });

  // Category 5: Jadvallar (Tables)
  const catTables = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'tables',
      name: 'Jadvallar (Tables)',
      description: '<table>, <caption>, <colgroup>, <col>, <tbody>, <thead>, <tfoot>, <tr>, <td>, <th>',
      order: 5,
    },
  });

  // Category 6: Formalar va Inputlar
  const catForms = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'forms',
      name: 'Formalar va Foydalanuvchi Kiritishi',
      description: '<form>, <label>, <input> (22 xil tur), <button>, <select>, <datalist>, <option>, <textarea>, <progress>',
      order: 6,
    },
  });

  // Category 7: Interaktiv va Web Components
  const catInteractive = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'interactive',
      name: 'Interaktiv Teglar va Web Components',
      description: '<details>, <summary>, <dialog>, <template>, <slot>',
      order: 7,
    },
  });

  // Category 8: Global Atributlar
  const catGlobalAttr = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'global-attributes',
      name: 'Global Atributlar',
      description: 'id, class, style, title, lang, dir, hidden, tabindex, accesskey, contenteditable, draggable, data-*',
      order: 8,
    },
  });

  // Category 9: Tarixiy va Eskirganlar (Obsolete)
  const catObsolete = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'obsolete',
      name: 'Tarixiy va Eskirganlar (Obsolete)',
      description: '<font>, <center>, <marquee>, <blink>, <frame>, <frameset>, <applet>, <big>, <strike>',
      order: 9,
    },
  });

  // Category 10: Brauzer Internals va Parsing
  const catInternals = await prisma.knowledgeCategory.create({
    data: {
      technology: 'html',
      slug: 'internals',
      name: 'Brauzer Dvigateli va HTML Parsing',
      description: 'Tokenizer, Tree Construction, DOM daraxti, Insertion Modes, Malformed HTML error recovery',
      order: 10,
    },
  });

  // =========================================================================
  // INSERTING HTML KNOWLEDGE NODES
  // =========================================================================

  // Node 1: <!DOCTYPE html>
  await prisma.knowledgeNode.create({
    data: {
      categoryId: catRoot.id,
      technology: 'html',
      nodeType: 'concept',
      name: '<!DOCTYPE html>',
      slug: 'doctype',
      englishName: 'Document Type Declaration',
      status: 'CURRENT',
      introducedIn: 'HTML 2.0 / HTML5 da soddalashtirilgan',
      syntax: '<!DOCTYPE html>',
      kidExplanation: 'Kitobning muqovasida "Bu zamonaviy ertaklar kitobi" degan yozuv. Brauzer buni ko‘rib yangi qoidalar bilan o‘qiydi.',
      kidAnalogy: 'Eshik tepasidagi "Bu yerga 2026-yil qoidalari bilan kiring" degan belgi.',
      technicalSummary: 'Hujjat turini e\'lon qiluvchi qoida. Brauzerni eski Quirks Mode emas, zamonaviy Standards Mode rejimida ishlashga majbur qiladi.',
      detailedContent: `<!DOCTYPE html> — bu HTML elementi emas, balki brauzerga yo‘riqnoma (preamble) hisoblanadi.

HTML5 da DOCTYPE maksimal darajada soddalashtirildi:
\`\`\`html
<!DOCTYPE html>
\`\`\`

Agar DOCTYPE yozilmasa, brauzerlar 1990-yillardagi Netscape va IE xatolarini simulyatsiya qiluvchi **Quirks Mode** ga o‘tadi va zamonaviy CSS layoutlar (Flexbox, Grid) buzilishi mumkin.`,
      codeExample: `<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>KODX Standarti</title>
</head>
<body>
  <h1>Standards Mode Faol</h1>
</body>
</html>`,
      expectedOutput: 'Brauzer sahifani W3C/WHATWG zamonaviy standartlari bo‘yicha render qiladi.',
      commonMistakes: 'DOCTYPE ni <html> tegining ichiga yozish yoki kichik harfda xato yozish. U doimo faylning eng 1-qatorida turishi shart.',
      accessibility: 'Ekran o‘quvchilar DOCTYPE mavjud bo‘lganda sahifani barqaror tahlil qiladi.',
      security: 'Quirks Mode dagi xavfsizlik zaifliklarining oldini oladi.',
      specUrl: 'https://html.spec.whatwg.org/multipage/syntax.html#the-doctype',
      specName: 'WHATWG HTML Living Standard (Section 13.1.1)',
      aliases: ['doctype', 'document type', 'standart', 'quirks mode'],
      order: 1,
    },
  });

  // Node 2: <html>
  await prisma.knowledgeNode.create({
    data: {
      categoryId: catRoot.id,
      technology: 'html',
      nodeType: 'element',
      name: '<html>',
      slug: 'html',
      englishName: 'HTML Root Element',
      status: 'CURRENT',
      introducedIn: 'HTML 1.0',
      syntax: '<html lang="uz">...</html>',
      kidExplanation: 'Butun sahifaning barcha a’zolarini o‘z ichiga olgan eng katta bosh quti.',
      kidAnalogy: 'Uyingizning eng tashqi devorlari va tomi.',
      technicalSummary: 'HTML hujjatining ildiz (root) elementi. Sahifadagi barcha boshqa elementlar (head, body) uning ichida joylashadi.',
      detailedContent: `\`<html>\` elementi HTML hujjatning eng yuqori darajadagi konteyneridir.

Har doim \`lang\` atributi bilan yozilishi shart:
\`\`\`html
<html lang="uz">
\`\`\`
Bu qidiruv tizimlari (SEO) va ko‘zi ojizlar uchun ekran o‘quvchi dasturlarga sahifaning qaysi tilda ekanini aytadi.`,
      codeExample: `<html lang="uz">
  <head><title>Salom</title></head>
  <body><p>Mazmun</p></body>
</html>`,
      expectedOutput: 'Hujjat ildizi hosil bo‘ladi.',
      commonMistakes: 'lang atributini unutish. lang="uz" bo‘lmasa ekran o‘quvchilar o‘zbekcha matnni noto‘g‘ri talaffuz qiladi.',
      specUrl: 'https://html.spec.whatwg.org/multipage/semantics.html#the-html-element',
      specName: 'WHATWG HTML Section 4.1.1',
      aliases: ['html', 'root', 'ildiz', 'til', 'lang'],
      order: 2,
    },
  });

  // Node 3: <article>
  await prisma.knowledgeNode.create({
    data: {
      categoryId: catSectioning.id,
      technology: 'html',
      nodeType: 'element',
      name: '<article>',
      slug: 'article',
      englishName: 'Article Semantic Section Element',
      status: 'CURRENT',
      introducedIn: 'HTML5 (2014)',
      syntax: '<article>...</article>',
      kidExplanation: 'Gazetadagi alohida qirqib olingan mustaqil maqola.',
      kidAnalogy: 'Boshqa narsalardan ajratib olib o‘qisa ham ma’nosi tushunarli bo‘ladigan alohida ertak kitobchasi.',
      technicalSummary: 'O‘z-o‘zicha to‘liq, mustaqil mazmunga ega bo‘lgan bo‘lim (blog posti, yangilik, forum xabari, mahsulot kartasi).',
      detailedContent: `\`<article>\` elementi boshqa sahifada yoki RSS lentada alohida ko‘rsatilganda ham o‘z ma’nosini yo‘qotmaydigan mustaqil bloklarni belgilaydi.

Misollar:
- Blogdagi bitta maqola
- Yangiliklar lentasidagi bitta xabar
- Foydalanuvchining bitta sharhi (comment)
- Do‘kondagi bitta mahsulot kartochkasi`,
      codeExample: `<article>
  <header>
    <h2>JavaScript Asoslari</h2>
    <p>Muallif: Azizbek | 2026-yil</p>
  </header>
  <p>JavaScript — vebni jonlantiruvchi dasturlash tili...</p>
  <footer>
    <a href="/maqola/1">To‘liq o‘qish →</a>
  </footer>
</article>`,
      expectedOutput: 'Brauzer va qidiruv botlari ushbu blokni mustaqil maqola sifatida indekslaydi.',
      commonMistakes: 'Oddiy dizayn uchun har qanday joyda <div> o‘rniga noto‘g‘ri <article> ishlatish. U faqat mustaqil mazmun uchun.',
      accessibility: 'Screen readerlar maqolani alohida "article landmark" sifatida taniydi.',
      specUrl: 'https://html.spec.whatwg.org/multipage/sections.html#the-article-element',
      specName: 'WHATWG HTML Section 4.3.2',
      aliases: ['article', 'maqola', 'post', 'yangilik', 'sharh'],
      relatedNodes: ['section', 'header', 'footer', 'main'],
      order: 3,
    },
  });

  // Node 4: <dialog>
  await prisma.knowledgeNode.create({
    data: {
      categoryId: catInteractive.id,
      technology: 'html',
      nodeType: 'element',
      name: '<dialog>',
      slug: 'dialog',
      englishName: 'HTML5 Native Dialog / Modal Element',
      status: 'CURRENT',
      introducedIn: 'HTML5.2 / WHATWG',
      syntax: '<dialog id="modal">...</dialog>',
      kidExplanation: 'Tugmani bosganda ekranda ochiladigan sehrli xabarnoma qutisi.',
      kidAnalogy: 'O‘yin o‘ynayotganingizda "Yana o‘ynaysizmi?" deb o‘rtada chiqadigan oyna.',
      technicalSummary: 'Ortiqcha JavaScript kutubxonalarisiz brauzerning o‘zida toza modal oyna, alert yoki dialog ochish uchun native element.',
      detailedContent: `\`<dialog>\` elementi yordamida modal oynalarni ochish:

- \`showModal()\`: Fonni qoraytirib (backdrop), klaviatura fokusini modal ichiga qamrab oluvchi haqiqiy modal ochadi.
- \`close()\`: Modalni yopadi.
- \`::backdrop\` CSS psevdo-elementi orqali modal orqasidagi fonni xiralashtirish yoki rang berish mumkin.`,
      codeExample: `<button onclick="document.getElementById('myModal').showModal()">
  Oynani Ochish ✨
</button>

<dialog id="myModal" class="p-6 rounded-2xl bg-white shadow-2xl">
  <h2>Xush kelibsiz!</h2>
  <p>Toza HTML5 modal oynasi.</p>
  <button onclick="document.getElementById('myModal').close()">
    Yopish ❌
  </button>
</dialog>`,
      expectedOutput: 'Brauzer ekranni xiralashtirib, markazda qulay modal oynani ochadi.',
      commonMistakes: 'showModal() o‘rniga shunchaki show() chaqirish (show() fonni qoraytirmaydi va Esc tugmasi bilan yopilmaydi).',
      accessibility: 'Avtomatik ravishda Esc tugmasini qo‘llab-quvvatlaydi va fokusni modal ichida ushlab turadi (Focus Trap).',
      specUrl: 'https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element',
      specName: 'WHATWG HTML Section 4.11.3',
      aliases: ['dialog', 'modal', 'oyna', 'popup', 'alert'],
      order: 4,
    },
  });

  // Node 5: <canvas>
  await prisma.knowledgeNode.create({
    data: {
      categoryId: catMedia.id,
      technology: 'html',
      nodeType: 'element',
      name: '<canvas>',
      slug: 'canvas',
      englishName: 'HTML5 Canvas 2D / WebGL Graphics Element',
      status: 'CURRENT',
      introducedIn: 'HTML5',
      syntax: '<canvas id="myCanvas" width="400" height="300"></canvas>',
      kidExplanation: 'Kompyuter ichidagi bo‘sh oq qog‘oz. Unga dastur orqali chiroyli rasmlar va o‘yinlar chizish mumkin.',
      kidAnalogy: 'Rassomning molberti va bo‘yoqlari.',
      technicalSummary: 'JavaScript (CanvasRenderingContext2D yoki WebGL) orqali piksellarni to‘g‘ridan-to‘g‘ri chizish, 2D/3D o‘yinlar va grafikalar yaratish konteyneri.',
      detailedContent: `\`<canvas>\` elementi grafikani o‘zida saqlamaydi, u faqat chizish uchun bitmat maydon taqdim etadi.

Asosiy metodlar:
- \`getContext('2d')\`: 2D chizish vositalarini olish.
- \`fillRect(x, y, w, h)\`: To‘rtburchak chizish.
- \`arc(x, y, r, 0, Math.PI * 2)\`: Doira chizish.
- \`drawImage(img, x, y)\`: Rasm joylashtirish.`,
      codeExample: `<canvas id="chizma" width="300" height="150" class="border"></canvas>

<script>
  const canvas = document.getElementById('chizma');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#22a675';
  ctx.fillRect(20, 20, 100, 60);
</script>`,
      expectedOutput: 'Yashil to‘rtburchak chizilgan grafik kanvas.',
      commonMistakes: 'O‘lchamni CSS (width/height) orqali berish. Canvasning width va height atributlari berilmasa rasm xiralashib cho‘zilib ketadi!',
      accessibility: 'Canvas ichidagi piksellarni ekran o‘quvchilar o‘qiy olmaydi. Ichiga fallback matn yozish shart.',
      specUrl: 'https://html.spec.whatwg.org/multipage/canvas.html#the-canvas-element',
      specName: 'WHATWG HTML Section 4.12.5',
      aliases: ['canvas', 'grafika', 'chizish', '2d', 'webgl', 'oyin'],
      order: 5,
    },
  });

  // Node 6: <font> (Obsolete)
  await prisma.knowledgeNode.create({
    data: {
      categoryId: catObsolete.id,
      technology: 'html',
      nodeType: 'element',
      name: '<font>',
      slug: 'font',
      englishName: 'Obsolete Font Element',
      status: 'OBSOLETE',
      introducedIn: 'HTML 3.2',
      deprecatedIn: 'HTML 4.01',
      replacedBy: 'CSS color, font-family, font-size',
      syntax: '<font color="red" size="4">...</font>',
      kidExplanation: 'Eski zamonlarda ishlatilgan, hozir esa taqiqlangan eski qalam.',
      kidAnalogy: 'Eski siyohdonli pero (hozir uning o‘rniga qulay sharikli ruchka - CSS ishlatiladi).',
      technicalSummary: 'Matn rangi va o‘lchamini to‘g‘ridan-to‘g‘ri HTML ichida berish uchun 1997-yilda kiritilgan, ammo semantikani buzgani uchun butunlay bekor qilingan (Obsolete).',
      detailedContent: `Nega \`<font>\` bekor qilindi?
1. **Dizayn va Strukturani aralashtirib yuborgan**: Sayt dizaynini o‘zgartirish uchun 10,000 ta sahifadagi barcha font teglarini birma-bir o‘zgartirish kerak bo‘lardi.
2. **Kodni og‘irlashtirgan**: HTML hajmi 5 barobar kattalashib ketardi.

Hozirgi zamonaviy o‘rindoshi:
\`\`\`css
/* Zamonaviy toza CSS usuli */
p {
  color: #e11d48;
  font-size: 1.25rem;
  font-family: 'Inter', sans-serif;
}
\`\`\``,
      codeExample: `<!-- ❌ ESKI VA XATO USUL: -->
<!-- <font color="red" size="3">Bu eskirgan!</font> -->

<!-- ✅ ZAMONAVIY TO‘G‘RI USUL: -->
<p class="text-red-500 text-lg">Zamonaviy CSS bilan boshqariladigan matn</p>`,
      expectedOutput: 'CSS bilan bezatilgan toza semantik matn.',
      commonMistakes: 'Yangi veb-saytlarda <font> ishlatish. HTML5 validatorlari buni xatolik deb qaytaradi.',
      specUrl: 'https://html.spec.whatwg.org/multipage/obsolete.html#font',
      specName: 'WHATWG HTML Section 16.2 (Non-conforming features)',
      aliases: ['font', 'eski font', 'color', 'size', 'obsolete'],
      order: 6,
    },
  });

  // =========================================================================
  // 2. MASSIVE COURSES & LESSONS (HTML, CSS, JS)
  // =========================================================================
  const htmlCourse = await prisma.course.create({
    data: {
      slug: 'html',
      title: 'HTML5 — Noldan Professional Veb Ishlab Chiqishgacha',
      shortDescription: 'Vebning asosiy poydevori. Barcha 140+ teglar, semantika, formalar, multimedia, SEO va veb optimizatsiya.',
      description: `HTML (HyperText Markup Language) — internetdagi barcha veb-saytlarning asosiy skeletidir. Ushbu mukammal kursda siz oddiy teglardan boshlab, professional semantik arxitektura, qidiruv tizimlari (SEO) uchun optimizatsiya, zamonaviy formalar, Web Accessibility (a11y) va Core Web Vitals performans usullarini to‘liq o‘rganasiz.`,
      level: 'BEGINNER',
      status: 'PUBLISHED',
      estimatedHours: 35,
      order: 1,
    },
  });

  const hMod1 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '1-Modul: Veb Tarixi va Kirish',
      order: 1,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod1.id,
        slug: 'html-tarixi',
        title: '1. HTML Tarixi va Evolyutsiyasi (1991 — 2026)',
        order: 1,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# HTML Tarixi va Evolyutsiyasi (1991 — 2026)\n\nHTML 1.0 dan to zamonaviy WHATWG Living Standardgacha to‘liq evolyutsiya.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-kirish',
        title: '2. HTML Kirish va Veb Skeleti',
        order: 2,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: `# HTML Kirish va Veb Skeleti\n\nHTML ning asosiy maqsadi va birinchi sahifa.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-taglar',
        title: '3. HTML Teglar (Tags) va Sintaksis',
        order: 3,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: `# HTML Teglar va Sintaksis\n\nJuft va yolg‘iz teglar qoidalari.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-attributlar',
        title: '4. HTML Atributlar',
        order: 4,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: `# HTML Atributlar\n\nTeglarning qo‘shimcha imkoniyatlari.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-head-meta',
        title: '5. <head> va SEO Meta Teglar',
        order: 5,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# <head> va SEO Meta Teglar\n\nGoogle qidiruvi va OpenGraph.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-semantika',
        title: '6. Semantik HTML Teglar',
        order: 6,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# Semantik HTML Teglar\n\nToza arxitektura va accessibility.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-rasmlar',
        title: '7. Rasmlar va Optimizatsiya',
        order: 7,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: `# Rasmlar va Optimizatsiya\n\nWebP, AVIF, lazy loading.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-formalar',
        title: '8. Formalar va Inputlar',
        order: 8,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: `# Formalar va Inputlar\n\nFoydalanuvchi ma’lumotlarini kiritish.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-dialog',
        title: '9. Zamonaviy <dialog> va <details>',
        order: 9,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: `# Zamonaviy <dialog> va <details>\n\nNative modal va akkordeonlar.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-seo',
        title: '10. SEO va Core Web Vitals',
        order: 10,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: `# SEO va Core Web Vitals\n\nLCP, CLS, FID va Preload.`,
      },
    ],
  });

  // CSS Course
  const cssCourse = await prisma.course.create({
    data: {
      slug: 'css',
      title: 'CSS3, Flexbox & Grid — Zamonaviy Veb Dizayn',
      shortDescription: 'Ranglar, shriftlar, moslashuvchan layoutlar, zamonaviy CSS Grid va silliq animatsiyalar.',
      description: 'CSS orqali veb-saytni go‘zal, dinamik va moslashuvchan qilish sirlari.',
      level: 'BEGINNER',
      status: 'PUBLISHED',
      estimatedHours: 30,
      order: 2,
    },
  });

  const cMod1 = await prisma.courseModule.create({
    data: {
      courseId: cssCourse.id,
      title: '1-Modul: CSS Asoslari va Layoutlar',
      order: 1,
    },
  });

  await prisma.lesson.createMany({
    data: [
      { moduleId: cMod1.id, slug: 'css-kirish', title: '1. CSS Kirish', order: 1, estimatedMinutes: 6, status: 'PUBLISHED', content: '# CSS Kirish' },
      { moduleId: cMod1.id, slug: 'css-selectorlar', title: '2. CSS Selectorlar', order: 2, estimatedMinutes: 7, status: 'PUBLISHED', content: '# CSS Selectorlar' },
      { moduleId: cMod1.id, slug: 'css-box-model', title: '3. CSS Box Model', order: 3, estimatedMinutes: 8, status: 'PUBLISHED', content: '# CSS Box Model' },
      { moduleId: cMod1.id, slug: 'css-flexbox', title: '4. CSS Flexbox', order: 4, estimatedMinutes: 10, status: 'PUBLISHED', content: '# CSS Flexbox' },
      { moduleId: cMod1.id, slug: 'css-grid', title: '5. CSS Grid', order: 5, estimatedMinutes: 12, status: 'PUBLISHED', content: '# CSS Grid' },
      { moduleId: cMod1.id, slug: 'css-modern', title: '6. Zamonaviy CSS', order: 6, estimatedMinutes: 10, status: 'PUBLISHED', content: '# Zamonaviy CSS' },
    ],
  });

  // JS Course
  const jsCourse = await prisma.course.create({
    data: {
      slug: 'javascript',
      title: 'JavaScript — Asoslardan Asinxron Dasturlashgacha',
      shortDescription: 'Zamonaviy ES6+, funksiyalar, DOM manipulatsiyasi, Promises va Async/Await.',
      description: 'Veb sahifalarni jonlantiruvchi va mantiq qo‘shuvchi haqiqiy dasturlash tili.',
      level: 'INTERMEDIATE',
      status: 'PUBLISHED',
      estimatedHours: 40,
      order: 3,
    },
  });

  const jMod1 = await prisma.courseModule.create({
    data: {
      courseId: jsCourse.id,
      title: '1-Modul: JavaScript Asoslari va Dinamika',
      order: 1,
    },
  });

  await prisma.lesson.createMany({
    data: [
      { moduleId: jMod1.id, slug: 'js-kirish', title: '1. JS Kirish', order: 1, estimatedMinutes: 6, status: 'PUBLISHED', content: '# JS Kirish' },
      { moduleId: jMod1.id, slug: 'js-ozgaruvchilar', title: '2. JS O‘zgaruvchilar', order: 2, estimatedMinutes: 7, status: 'PUBLISHED', content: '# JS O‘zgaruvchilar' },
      { moduleId: jMod1.id, slug: 'js-funksiyalar', title: '3. JS Funksiyalar', order: 3, estimatedMinutes: 8, status: 'PUBLISHED', content: '# JS Funksiyalar' },
      { moduleId: jMod1.id, slug: 'js-dom', title: '4. DOM Manipulyatsiyasi', order: 4, estimatedMinutes: 9, status: 'PUBLISHED', content: '# DOM Manipulyatsiyasi' },
      { moduleId: jMod1.id, slug: 'js-events', title: '5. Hodisalar (Events)', order: 5, estimatedMinutes: 8, status: 'PUBLISHED', content: '# Hodisalar' },
      { moduleId: jMod1.id, slug: 'js-async', title: '6. Asinxron JS & Event Loop', order: 6, estimatedMinutes: 12, status: 'PUBLISHED', content: '# Asinxron JS' },
    ],
  });

  console.log('🎉 Global Knowledge Nodes va Kurslar muvaffaqiyatli saqlandi!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding xatosi:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
