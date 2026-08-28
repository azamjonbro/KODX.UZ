import { coursesData, getCourseLessons, findLesson, topics } from './data/topics';
import { getLesson, getNeighbours, courseThemes } from './data/lessonRegistry';
import { COURSE_SLUGS } from './data/lessonTypes';

let fail = 0;
const bad = (m: string) => { console.log('  ✗ ' + m); fail++; };

for (const c of COURSE_SLUGS) {
  const course = coursesData[c];
  const lessons = getCourseLessons(c);
  console.log(`\n=== ${c} — ${course.title}`);
  console.log(`  modullar: ${course.modules.length}, darslar: ${course.totalLessons}, tugallangan: ${course.completedLessons}`);

  if (course.totalLessons !== lessons.length) bad('totalLessons mos emas');
  if (topics[c].length !== lessons.length) bad('topics ro‘yxati mos emas');

  const slugs = new Set<string>();
  const ids = new Set<string>();
  for (const l of lessons) {
    if (slugs.has(l.slug)) bad(`takrorlangan slug: ${l.slug}`);
    slugs.add(l.slug);
    if (ids.has(l.id)) bad(`takrorlangan id: ${l.id}`);
    ids.add(l.id);
    if (l.path !== `/${c}/${l.slug}`) bad(`noto‘g‘ri path: ${l.path}`);
    if (!l.title.trim()) bad(`bo‘sh sarlavha: ${l.slug}`);
    if (!(l.estimatedMinutes > 0)) bad(`noto‘g‘ri vaqt: ${l.slug}`);
    if (!findLesson(c, l.slug)) bad(`findLesson topmadi: ${l.slug}`);
  }

  // Har bir dars uchun chuqur kontent to'liq generatsiya bo'lishi kerak.
  for (const l of lessons) {
    const d = getLesson(c, l.slug);
    if (d.course !== c) bad(`${l.slug}: course=${d.course}`);
    if (d.title !== l.title) bad(`${l.slug}: sarlavha mos emas`);
    if (d.estimatedMinutes !== l.estimatedMinutes) bad(`${l.slug}: daqiqa mos emas`);
    for (const f of ['description','content','codeExample'] as const) {
      if (!d[f] || d[f].length < 120) bad(`${l.slug}: ${f} juda qisqa (${d[f]?.length})`);
    }
    if (!d.spec || d.spec.length < 12) bad(`${l.slug}: spec bo‘sh`);
    if (!d.deepDive?.blinkClassHierarchy?.length) bad(`${l.slug}: hierarchy bo‘sh`);
    if (!d.deepDive?.debuggingChallenge?.fixedCode) bad(`${l.slug}: challenge yo‘q`);
    if (!d.cppInternalCode?.code) bad(`${l.slug}: internals kodi yo‘q`);
    if (!d.proTips?.length || !d.gotchas?.length) bad(`${l.slug}: tips/gotchas yo‘q`);
    if (!d.quiz?.length) bad(`${l.slug}: quiz yo‘q`);
    d.quiz?.forEach((q, i) => {
      if (q.correct < 0 || q.correct >= q.options.length) bad(`${l.slug}: quiz[${i}] correct indeksi xato`);
      if (new Set(q.options).size !== q.options.length) bad(`${l.slug}: quiz[${i}] takror variant`);
    });
  }

  // prev/next zanjiri uzluksiz bo'lishi kerak.
  const first = getNeighbours(c, lessons[0].slug);
  const last = getNeighbours(c, lessons[lessons.length - 1].slug);
  if (first.prev !== null) bad('birinchi darsda prev bor');
  if (last.next !== null) bad('oxirgi darsda next bor');
  for (let i = 0; i < lessons.length - 1; i++) {
    const n = getNeighbours(c, lessons[i].slug);
    if (n.next?.slug !== lessons[i + 1].slug) bad(`next uzilgan: ${lessons[i].slug}`);
  }

  console.log(`  tema: ${courseThemes[c].engineName} | internals tab: "${courseThemes[c].tabs[1].label}"`);
  console.log(`  namuna: ${lessons[0].path} -> "${getLesson(c, lessons[0].slug).spec}"`);
}

console.log(fail === 0 ? '\n✅ Barcha tekshiruvlar muvaffaqiyatli' : `\n❌ ${fail} ta muammo`);
process.exit(fail === 0 ? 0 : 1);
