import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 KODX 2.0 Database Seeding boshlanmoqda...');

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
  // 1. HTML COURSE & MODULES
  // =========================================================================
  const htmlCourse = await prisma.course.create({
    data: {
      slug: 'html',
      title: 'HTML5 — Noldan Professional Veb Ishlab Chiqishgacha',
      shortDescription: 'Vebning asosiy poydevori. Semantik teglar, formalari, multimedia, SEO va veb optimizatsiyani chuqur o‘rganing.',
      description: `HTML (HyperText Markup Language) — internetdagi barcha veb-saytlarning asosiy skeletidir. Ushbu mukammal kursda siz oddiy teglardan boshlab, professional semantik arxitektura, qidiruv tizimlari (SEO) uchun optimizatsiya, zamonaviy formalar, Web Accessibility (a11y) va Core Web Vitals performans usullarini to‘liq o‘rganasiz.`,
      level: 'BEGINNER',
      status: 'PUBLISHED',
      estimatedHours: 25,
      order: 1,
    },
  });

  const hMod1 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '1-Modul: HTML Asoslari va Sintaksis',
      description: 'Veb qanday ishlashi, HTML5 standarti, DOCTYPE va asosiy teglar.',
      order: 1,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod1.id,
      slug: 'html-kirish',
      title: '1. HTML Kirish va Veb Skeleti',
      description: 'HTML nima, u qanday ishlaydi va birinchi veb sahifa yaratish.',
      order: 1,
      estimatedMinutes: 5,
      status: 'PUBLISHED',
      content: '# HTML Kirish va Veb Skeleti',
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod1.id,
      slug: 'html-taglar',
      title: '2. HTML Teglar (Tags)',
      description: 'Juft va yolg‘iz teglar, ularning vazifalari va sintaksis qoidalari.',
      order: 2,
      estimatedMinutes: 7,
      status: 'PUBLISHED',
      content: '# HTML Teglar',
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod1.id,
      slug: 'html-attributlar',
      title: '3. HTML Atributlar',
      description: 'Teglarning qo‘shimcha qobiliyatlari: id, class, href, src va boshqalar.',
      order: 3,
      estimatedMinutes: 6,
      status: 'PUBLISHED',
      content: '# HTML Atributlar',
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod1.id,
      slug: 'html-head-meta',
      title: '4. <head> va SEO Meta Teglar',
      description: 'Google qidiruvi, Telegram OpenGraph va mobil moslashuvchanlik uchun meta ma’lumotlar.',
      order: 4,
      estimatedMinutes: 8,
      status: 'PUBLISHED',
      content: '# <head> va SEO Meta Teglar',
    },
  });

  const hMod2 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '2-Modul: Semantik HTML va Arxitektura',
      description: 'Veb sahifaning to‘g‘ri semantik qismlari va accessibility.',
      order: 2,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod2.id,
      slug: 'html-semantika',
      title: '5. Semantik HTML Teglar',
      description: '<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>.',
      order: 1,
      estimatedMinutes: 8,
      status: 'PUBLISHED',
      content: '# Semantik HTML',
    },
  });

  const hMod3 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '3-Modul: Rasmlar va Optimizatsiya',
      description: 'WebP/AVIF formatlar, lazy loading va <picture> tegi.',
      order: 3,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod3.id,
      slug: 'html-rasmlar',
      title: '6. Rasmlar va Optimizatsiya',
      description: 'WebP, AVIF, loading="lazy", srcset va <picture> tegi.',
      order: 1,
      estimatedMinutes: 7,
      status: 'PUBLISHED',
      content: '# Rasmlar va Optimizatsiya',
    },
  });

  const hMod4 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '4-Modul: Interaktiv Formalar',
      description: 'Foydalanuvchi ma’lumotlarini qabul qilish va tekshirish.',
      order: 4,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod4.id,
      slug: 'html-formalar',
      title: '7. Formalar va Inputlar',
      description: '<form>, barcha input turlari, <select>, <textarea> va validatsiya.',
      order: 1,
      estimatedMinutes: 10,
      status: 'PUBLISHED',
      content: '# Formalar va Inputlar',
    },
  });

  const hMod5 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '5-Modul: Zamonaviy HTML5 Teglar',
      description: '<dialog> modal oynasi, <details>, <summary> va <template>.',
      order: 5,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod5.id,
      slug: 'html-dialog',
      title: '8. Zamonaviy <dialog> va <details>',
      description: 'Native modal oynalar va ochiluvchi FAQ akkordeonlar.',
      order: 1,
      estimatedMinutes: 6,
      status: 'PUBLISHED',
      content: '# Zamonaviy <dialog> va <details>',
    },
  });

  const hMod6 = await prisma.courseModule.create({
    data: {
      courseId: htmlCourse.id,
      title: '6-Modul: SEO va Core Web Vitals',
      description: 'LCP, CLS, FID, Preload, Prefetch va Google 100 ball reytingi.',
      order: 6,
    },
  });

  await prisma.lesson.create({
    data: {
      moduleId: hMod6.id,
      slug: 'html-seo',
      title: '9. SEO va Core Web Vitals',
      description: 'Sayt tezligi, preload, preconnect va qidiruv tizimlari optimizatsiyasi.',
      order: 1,
      estimatedMinutes: 10,
      status: 'PUBLISHED',
      content: '# SEO va Core Web Vitals',
    },
  });

  // =========================================================================
  // 2. CSS COURSE & MODULES
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
      title: '1-Modul: CSS Asoslari va Selektorlar',
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
        content: '# CSS Kirish',
      },
      {
        moduleId: cMod1.id,
        slug: 'css-selectorlar',
        title: '2. CSS Selektorlar va Spetsifiklik',
        order: 2,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: '# CSS Selectorlar',
      },
      {
        moduleId: cMod1.id,
        slug: 'css-box-model',
        title: '3. CSS Box Model va O‘lchamlar',
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
      title: '2-Modul: Modern Layout (Flexbox & Grid)',
      order: 2,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: cMod2.id,
        slug: 'css-flexbox',
        title: '4. 1D Moslashuvchan Flexbox',
        order: 1,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: '# Flexbox',
      },
      {
        moduleId: cMod2.id,
        slug: 'css-grid',
        title: '5. 2D To‘r Layouti (CSS Grid)',
        order: 2,
        estimatedMinutes: 12,
        status: 'PUBLISHED',
        content: '# CSS Grid',
      },
    ],
  });

  const cMod3 = await prisma.courseModule.create({
    data: {
      courseId: cssCourse.id,
      title: '3-Modul: Zamonaviy CSS (@layer, Container Queries, :has)',
      order: 3,
    },
  });

  await prisma.lesson.createMany({
    data: [
      {
        moduleId: cMod3.id,
        slug: 'css-modern',
        title: '6. Zamonaviy CSS: @container va :has()',
        order: 1,
        estimatedMinutes: 10,
        status: 'PUBLISHED',
        content: '# Zamonaviy CSS',
      },
    ],
  });

  // =========================================================================
  // 3. JAVASCRIPT COURSE & MODULES
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
        title: '1. JS Kirish va Ishlash Mexanizmi',
        order: 1,
        estimatedMinutes: 6,
        status: 'PUBLISHED',
        content: '# JS Kirish',
      },
      {
        moduleId: jMod1.id,
        slug: 'js-ozgaruvchilar',
        title: '2. O‘zgaruvchilar (let, const, var)',
        order: 2,
        estimatedMinutes: 7,
        status: 'PUBLISHED',
        content: '# JS O‘zgaruvchilar',
      },
      {
        moduleId: jMod1.id,
        slug: 'js-funksiyalar',
        title: '3. Funksiyalar va Arrow Functions',
        order: 3,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: '# JS Funksiyalar',
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
        title: '4. DOM Manipulyatsiyasi (querySelector)',
        order: 1,
        estimatedMinutes: 9,
        status: 'PUBLISHED',
        content: '# DOM Manipulyatsiyasi',
      },
      {
        moduleId: jMod2.id,
        slug: 'js-events',
        title: '5. Hodisalar (Events) va Bubbling',
        order: 2,
        estimatedMinutes: 8,
        status: 'PUBLISHED',
        content: '# Hodisalar',
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
        title: '6. Promises, Async/Await va Event Loop',
        order: 1,
        estimatedMinutes: 12,
        status: 'PUBLISHED',
        content: '# Asinxron JS va Event Loop',
      },
    ],
  });

  console.log('🎉 Barcha 3 ta kurs, barcha modullar va darslar PostgreSQL bazasiga muvaffaqiyatli saqlandi!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding xatosi:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
