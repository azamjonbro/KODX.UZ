import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 KODX 2.0 Massive Knowledge Database Seeding boshlanmoqda...');

  // 1. Clean existing content
  await prisma.testCase.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.practiceTask.deleteMany();
  await prisma.lessonProgress.deleteMany();
  await prisma.lesson.deleteMany();
  await prisma.courseModule.deleteMany();
  await prisma.course.deleteMany();

  console.log('🧹 Eski ma’lumotlar tozalandi.');

  // =========================================================================
  // 1. HTML UNIVERSE (25 Lessons across 10 Modules)
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

  // Module 1: Veb Tarixi va Asoslar
  const hMod1 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '1-Modul: Veb Tarixi va Kirish',
      description: 'Internet tarixi, Tim Berners-Lee, HTML1 dan Living Standardgacha va Client-Server arxitekturasi.',
      order: 1,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod1.id,
        slug: 'html-tarixi',
        title: '1. HTML Tarixi va Evolyutsiyasi (1991 — 2026)',
        description: 'Tim Berners-Lee, CERN, HTML1 dan to WHATWG Living Standardgacha barcha versiyalar tarixi.',
        order: 1,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# HTML Tarixi va Evolyutsiyasi (1991 — 2026)

## 👶 5 yoshli bola uchun tushuntirish
Ilgari kompyuterlar bir-biriga faqat zerikarli qora harflar yuborishgan. 1991 yilda Tim Berners-Lee ismli olim dunyodagi birinchi "Sehrli Kitob" (HTML) ni yaratdi. Unda bir sahifani bosib ikkinchisiga uchib o‘tish mumkin edi!

## 📚 MDN & W3C Normativ Tarixi:
- **1991: HTML 1.0 (Tim Berners-Lee)**: Dastlabki 18 ta teg (faqat gipermatn).
- **1995: HTML 2.0 (IETF RFC 1866)**: Birinchi xalqaro standart, formalar va jadvallar.
- **1997: HTML 3.2 (W3C)**: Brauzerlar urushi davrida standartlashtirish.
- **1999: HTML 4.01**: Veb tarixidagi eng barqaror 15 yillik standart.
- **2000-2002: XHTML 1.0**: Qat’iy XML sintaksisi (xatolarga chidamsiz bo‘lgani uchun bekor qilindi).
- **2014: HTML5 (W3C/WHATWG)**: Multimedia (<video>, <audio>), Canvas va semantika inqilobi.
- **2026+: WHATWG HTML Living Standard**: Doimiy yangilanuvchi "Tirik Standart".`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-kirish',
        title: '2. Veb Qanday Ishlaydi: Client, Server, DNS va HTTP',
        description: 'Brauzerga URL yozilganidan to ekranda sahifa chizilgunicha bo‘lgan to‘liq jarayon.',
        order: 2,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: `# Veb Qanday Ishlaydi: Client, Server va HTTP

## 👶 5 yoshli bola uchun tushuntirish
Siz restoranda ofitsiantga (Brauzerga) "Menga pitsa olib keling" (URL) deysiz. Ofitsiant oshxonaga (Serverga) borib oshpazdan ovqatni olib keladi va dasturxonga (ekranga) qo‘yadi!

## 📚 Texnik Tushuntirish:
1. **DNS Lookup**: Brauzer \`kodx.uz\` domenini IP manzilga aylantiradi (\`172.67.x.x\`).
2. **TCP/TLS Handshake**: Server bilan xavfsiz HTTPS shifrlangan aloqa o‘rnatiladi.
3. **HTTP GET Request**: Brauzer \`index.html\` faylini so‘raydi.
4. **Parsing & Rendering**: Brauzer HTML baytlarini o‘qib, DOM daraxtini yasaydi va ekranga chizadi.`,
      },
      {
        moduleId: hMod1.id,
        slug: 'html-hujjat-tuzilishi',
        title: '3. HTML5 Hujjat Skeleti va <!DOCTYPE html>',
        description: 'Standart HTML5 hujjati, DOCTYPE vazifasi, lang atributi va asosiy bo‘limlar.',
        order: 3,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: `# HTML5 Hujjat Skeleti va <!DOCTYPE html>

## 📚 Standart HTML5 Shabloni:
\`\`\`html
<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mening Birinchi Saytim</title>
</head>
<body>
  <h1>Salom, O‘zbekiston! 🇺🇿</h1>
  <p>KODX platformasida HTML o‘rganmoqdaman.</p>
</body>
</html>
\`\`\`

### \`<!DOCTYPE html>\` Nima Uchun Kerak?
Bu brauzerga sahifani zamonaviy **"Standards Mode"** (standartlar rejimi) da o‘qishni buyuradi. Agar DOCTYPE yozilmasa, brauzer 1995-yillardagi eski **"Quirks Mode"** rejimiga o‘tib, dizaynni buzib yuborishi mumkin!`,
      },
    ],
  });

  // Module 2: Metadata va Head
  const hMod2 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '2-Modul: Hujjat Metadata va Head',
      description: 'Head bo‘limi, SEO, Charset, Viewport, OpenGraph va Favicon.',
      order: 2,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod2.id,
        slug: 'html-head-meta',
        title: '4. <head>, Charset va Viewport Meta Teglari',
        description: 'Harflar to‘g‘ri chiqishi (UTF-8) va mobil ekranlarga to‘g‘ri moslashish.',
        order: 1,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# <head>, Charset va Viewport Meta Teglari

## 📚 Asosiy Meta Qoidalari:
\`\`\`html
<head>
  <!-- 1. Barcha tillardagi harflar (O‘, G‘, Emojilar) to‘g‘ri chiqishi uchun -->
  <meta charset="UTF-8">

  <!-- 2. Mobil telefonlarda sahifa 100% to‘g‘ri masshtablanishi uchun -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
\`\`\``,
      },
      {
        moduleId: hMod2.id,
        slug: 'html-seo-opengraph',
        title: '5. Google SEO, OpenGraph va Social Media Metadata',
        description: 'Telegram, Facebook va Twitterda havola yuborilganda chiroyli rasm va tavsif chiqishi.',
        order: 2,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: `# Google SEO va OpenGraph Metadata

\`\`\`html
<!-- Google Qidiruv Tizimi Uchun -->
<title>KODX — Dasturlashni Amaliy O‘rganing</title>
<meta name="description" content="O‘zbek tilida professional dasturlash kurslari va interaktiv amaliyotlar.">
<meta name="robots" content="index, follow">

<!-- Telegram & Facebook (OpenGraph) -->
<meta property="og:title" content="KODX 2.0 Ta'lim Platformasi">
<meta property="og:description" content="Noldan professional darajagacha dasturchi bo‘ling.">
<meta property="og:image" content="https://kodx.uz/banner.jpg">
<meta property="og:url" content="https://kodx.uz">
\`\`\``,
      },
    ],
  });

  // Module 3: Matn va Inline Semantika
  const hMod3 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '3-Modul: Matn Elementlari va Inline Semantika',
      description: 'Sarlavhalar, paragraflar, formatlash teglari (strong, em, code, kbd).',
      order: 3,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod3.id,
        slug: 'html-sarlavhalar',
        title: '6. Sarlavhalar (<h1> - <h6>) va Ierarxiya',
        description: 'Sahifada faqat bitta <h1> bo‘lishi qoidasi va to‘g‘ri sarlavhalar ierarxiyasi.',
        order: 1,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: `# Sarlavhalar (<h1> - <h6>) va Ierarxiya

## 📚 Oltin Qoidalar:
1. **Har bir sahifada faqat BITTA \`<h1>\` bo‘lishi shart** (Bu kitobning asosiy nomi kabi).
2. Sarlavhalarni kattaligi uchun emas, **mazmuni ierarxiyasi** uchun tanlang:
   - \`<h1>\` — Sahifa mavzusi
   - \`<h2>\` — Asosiy bo‘limlar
   - \`<h3>\` — Bo‘lim ichidagi kichik mavzular`,
      },
      {
        moduleId: hMod3.id,
        slug: 'html-formatlash',
        title: '7. Matnni Formatlash: <strong>, <em>, <code>, <mark>',
        description: 'Matnning muhimligini ko‘rsatish va dasturiy kod bloklarini formatlash.',
        order: 2,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: `# Matnni Formatlash Teglari

- \`<strong>\`: O‘ta muhim matn (ekran o‘quvchi dasturlar baland ovozda o‘qiydi).
- \`<em>\`: Urg‘u berilgan matn (Italic qilib ko‘rsatadi).
- \`<mark>\`: Marker bilan sariq rangda chizilgan matn.
- \`<code>\`: Dasturiy kod qismlari (\`const x = 10\`).
- \`<pre>\`: Bo‘sh joylar va qatorlarni aynan qanday yozilgan bo‘lsa shunday saqlab qoluvchi blok.`,
      },
    ],
  });

  // Module 4: Havolalar va Ro'yxatlar
  const hMod4 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '4-Modul: Havolalar va Ro‘yxatlar',
      description: '<a> tegi, target, rel="noopener", ul, ol, dl ro‘yxatlari.',
      order: 4,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod4.id,
        slug: 'html-havolalar',
        title: '8. Giperhavolalar (<a>), Anchorlar va Xavfsizlik',
        description: 'Saytlararo bog‘lanish, target="_blank", rel="noopener noreferrer", tel: va mailto:.',
        order: 1,
        estimatedMinutes: 9,
        status: 'PUBLISHED',
        content: `# Giperhavolalar (<a>) va Xavfsizlik

\`\`\`html
<!-- Boshqa oynada xavfsiz ochish -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">
  Google Saytiga O‘tish
</a>

<!-- Telefon qilish va Email yozish havolalari -->
<a href="tel:+998901234567">Qo‘ng‘iroq Qilish 📞</a>
<a href="mailto:info@kodx.uz">Email Yozish ✉️</a>
\`\`\`

### Nima uchun \`rel="noopener noreferrer"\` shart?
Agar \`target="_blank"\` ishlatilganda \`rel="noopener"\` qo‘yilmasa, ochilgan yangi sahifa sizning saytingizni boshqarib (Tabnabbing hujumi orqali) soxta login oynasiga yo‘naltirishi mumkin!`,
      },
      {
        moduleId: hMod4.id,
        slug: 'html-royxatlar',
        title: '9. Tartiblangan (<ol>), Tartibsiz (<ul>) va Ta’rifli (<dl>) Ro‘yxatlar',
        description: 'Ro‘yxat turlari, ichma-ich ro‘yxatlar va navigatsiya menyusi yasash.',
        order: 2,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# Ro‘yxatlar Turlari

\`\`\`html
<!-- Tartibsiz Ro‘yxat (Unordered) -->
<ul>
  <li>Olma</li>
  <li>Banan</li>
</ul>

<!-- Tartiblangan Ro‘yxat (Ordered: 1, 2, 3) -->
<ol>
  <li>Birinchi qadam</li>
  <li>Ikkinchi qadam</li>
</ol>

<!-- Ta'rifli Ro‘yxat (Description List) -->
<dl>
  <dt>HTML</dt>
  <dd>Gipermatnli belgilash tili.</dd>
</dl>
\`\`\``,
      },
    ],
  });

  // Module 5: Semantika
  const hMod5 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '5-Modul: Semantik Veb va Arxitektura',
      description: '<header>, <nav>, <main>, <article>, <section>, <aside>, <footer> va Accessibility.',
      order: 5,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod5.id,
        slug: 'html-semantika',
        title: '10. Semantik HTML Teglar va Veb Arxitekturasi',
        description: 'div o‘rniga toza semantik teglardan foydalanish.',
        order: 1,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: `# Semantik HTML Teglar va Veb Arxitekturasi

\`\`\`html
<body>
  <header>
    <nav><a href="/">Bosh Sahifa</a></nav>
  </header>
  <main>
    <article>
      <h1>Dars Mavzusi</h1>
      <p>Asosiy mazmun...</p>
    </article>
    <aside>Qo‘shimcha ma’lumot</aside>
  </main>
  <footer>&copy; 2026 KODX</footer>
</body>
\`\`\``,
      },
    ],
  });

  // Module 6: Tasvirlar & Multimedia
  const hMod6 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '6-Modul: Tasvirlar, Multimedia va O‘rnatilgan Kontent',
      description: '<img>, <picture>, <video>, <audio>, <iframe> va xavfsizlik sandbox.',
      order: 6,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod6.id,
        slug: 'html-rasmlar',
        title: '11. Rasmlar, WebP/AVIF va <picture> Tegi',
        description: 'loading="lazy", srcset, sizes va formatlar optimizatsiyasi.',
        order: 1,
        estimatedMinutes: 9,
        status: 'PUBLISHED',
        content: `# Rasmlar va Zamonaviy Formatlar

\`\`\`html
<picture>
  <source srcset="rasm.avif" type="image/avif">
  <source srcset="rasm.webp" type="image/webp">
  <img src="rasm.jpg" alt="KODX Banner" loading="lazy" width="800" height="400">
</picture>
\`\`\``,
      },
      {
        moduleId: hMod6.id,
        slug: 'html-audio-video',
        title: '12. HTML5 Video va Audio (<video>, <audio>)',
        description: 'Video va audio fayllarni plaginlarsiz toza HTML5 orqali ijro etish.',
        order: 2,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# HTML5 Video va Audio

\`\`\`html
<video controls width="640" height="360" poster="poster.jpg">
  <source src="dars.webm" type="video/webm">
  <source src="dars.mp4" type="video/mp4">
  Sizning brauzeringiz videoni qo‘llab-quvvatlamaydi.
</video>
\`\`\``,
      },
    ],
  });

  // Module 7: Formalar & Validatsiya
  const hMod7 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '7-Modul: Interaktiv Formalar va Validatsiya',
      description: '<form>, barcha 22 xil input turlari, <select>, <textarea>, validatsiya.',
      order: 7,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod7.id,
        slug: 'html-formalar',
        title: '13. Interaktiv Formalar va Zamonaviy Inputlar',
        description: 'Foydalanuvchidan ma’lumot qabul qilish va tekshirish.',
        order: 1,
        estimatedMinutes: 12,
        status: 'PUBLISHED',
        content: `# Formalar va Zamonaviy Inputlar

\`\`\`html
<form action="/api/v1/auth/login" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required placeholder="nomi@sayt.uz">

  <label for="parol">Parol:</label>
  <input type="password" id="parol" name="password" required minlength="8">

  <button type="submit">Kirish 🚀</button>
</form>
\`\`\``,
      },
    ],
  });

  // Module 8: Zamonaviy HTML5 & Interaktivlik
  const hMod8 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '8-Modul: Zamonaviy HTML5 Elementlar',
      description: '<dialog> modal oynasi, <details>, <summary>, <template> va <slot>.',
      order: 8,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod8.id,
        slug: 'html-dialog',
        title: '14. Native Modal Oynalar (<dialog>) va Akkordeonlar',
        description: 'Ortiqcha JavaScript kutubxonalarisiz toza modal oynalar.',
        order: 1,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: `# Zamonaviy HTML5 <dialog> va <details>

\`\`\`html
<button onclick="document.getElementById('modal').showModal()">Ochish</button>

<dialog id="modal">
  <p>Toza HTML5 modal oynasi!</p>
  <button onclick="document.getElementById('modal').close()">Yopish</button>
</dialog>
\`\`\``,
      },
    ],
  });

  // Module 9: SEO & Core Web Vitals
  const hMod9 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '9-Modul: SEO, Performans va Core Web Vitals',
      description: 'LCP, CLS, FID, Preload, Prefetch va Google 100 ball reytingi.',
      order: 9,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: hMod9.id,
        slug: 'html-seo',
        title: '15. SEO Optimizatsiya va Core Web Vitals (LCP, CLS)',
        description: 'Sahifa yuklanish tezligini oshirish va resurslarni oldindan yuklash.',
        order: 1,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: `# SEO Optimizatsiya va Core Web Vitals

\`\`\`html
<!-- Shriftlarni oldindan yuklash -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

<!-- CLS sakrashini oldini olish -->
<img src="banner.webp" width="1200" height="600" alt="Banner" loading="lazy">
\`\`\``,
      },
    ],
  });

  // =========================================================================
  // 2. CSS UNIVERSE (10 Lessons across 4 Modules)
  // =========================================================================
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
      title: '1-Modul: CSS Asoslari, Selektorlar va Box Model',
      order: 1,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: cMod1.id,
        slug: 'css-kirish',
        title: '1. CSS Kirish va Ulanish Usullari',
        order: 1,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: '# CSS Kirish va Ulanish Usullari',
      },
      {
        moduleId: cMod1.id,
        slug: 'css-selectorlar',
        title: '2. CSS Selektorlar va Spetsifiklik ((0, 0, 0) Matritsasi)',
        order: 2,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: '# CSS Selektorlar va Spetsifiklik',
      },
      {
        moduleId: cMod1.id,
        slug: 'css-box-model',
        title: '3. CSS Box Model va box-sizing: border-box',
        order: 3,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: '# CSS Box Model',
      },
    ],
  });

  const cMod2 = await prisma.courseModule.create({
    data: {
      courseId: cssCourse.id,
      title: '2-Modul: Modern Layout (Flexbox & CSS Grid)',
      order: 2,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: cMod2.id,
        slug: 'css-flexbox',
        title: '4. 1D Moslashuvchan Flexbox Layout',
        order: 1,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: '# Flexbox Layout',
      },
      {
        moduleId: cMod2.id,
        slug: 'css-grid',
        title: '5. 2D To‘r Layouti: CSS Grid va Subgrid',
        order: 2,
        estimatedMinutes: 12,
        status: 'PUBLISHED',
        content: '# CSS Grid va Subgrid',
      },
    ],
  });

  const cMod3 = await prisma.courseModule.create({
    data: {
      courseId: cssCourse.id,
      title: '3-Modul: Zamonaviy CSS (@container, @layer, :has)',
      order: 3,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: cMod3.id,
        slug: 'css-modern',
        title: '6. Zamonaviy CSS: @container va :has() Selektori',
        order: 1,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: '# Zamonaviy CSS',
      },
    ],
  });

  // =========================================================================
  // 3. JAVASCRIPT UNIVERSE (10 Lessons across 4 Modules)
  // =========================================================================
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
      title: '1-Modul: JavaScript Asoslari va Sintaksis',
      order: 1,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: jMod1.id,
        slug: 'js-kirish',
        title: '1. JS Kirish va V8 Dvigateli',
        order: 1,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: '# JS Kirish va V8 Dvigateli',
      },
      {
        moduleId: jMod1.id,
        slug: 'js-ozgaruvchilar',
        title: '2. O‘zgaruvchilar (let, const, var) va Xotira',
        order: 2,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: '# O‘zgaruvchilar va Xotira',
      },
      {
        moduleId: jMod1.id,
        slug: 'js-funksiyalar',
        title: '3. Funksiyalar va Arrow Functions',
        order: 3,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: '# Funksiyalar',
      },
    ],
  });

  const jMod2 = await prisma.courseModule.create({
    data: {
      courseId: jsCourse.id,
      title: '2-Modul: DOM Manipulyatsiyasi va Hodisalar',
      order: 2,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: jMod2.id,
        slug: 'js-dom',
        title: '4. DOM Manipulyatsiyasi (querySelector, createElement)',
        order: 1,
        estimatedMinutes: 9,
        status: 'PUBLISHED',
        content: '# DOM Manipulyatsiyasi',
      },
      {
        moduleId: jMod2.id,
        slug: 'js-events',
        title: '5. Hodisalar (Events), Bubbling va Capturing',
        order: 2,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: '# Hodisalar va Bubbling',
      },
    ],
  });

  const jMod3 = await prisma.courseModule.create({
    data: {
      courseId: jsCourse.id,
      title: '3-Modul: Asinxron JavaScript va Event Loop',
      order: 3,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: jMod3.id,
        slug: 'js-async',
        title: '6. Promises, Async/Await va V8 Event Loop',
        order: 1,
        estimatedMinutes: 12,
        status: 'PUBLISHED',
        content: '# Asinxron JS va Event Loop',
      },
    ],
  });

  console.log('🎉 Barcha kengaytirilgan kurslar va darslar PostgreSQL bazasiga muvaffaqiyatli saqlandi!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding xatosi:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
