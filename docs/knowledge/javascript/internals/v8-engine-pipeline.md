# Google V8 Dvigateli: Parser, Ignition & TurboFan Pipeline

## 1. V8 Ijro Zanjiri (Execution Pipeline)
Google Chrome va Node.js dagi V8 dvigateli JavaScript kodini quyidagi bosqichlarda bajaradi:

1. **Scanner & Parser**:
   - Manba kodini belgilardan tokenlarga, so'ngra **Abstract Syntax Tree (AST)** daraxtiga aylantiradi.
2. **Ignition (Bytecode Interpreter)**:
   - AST dan xotirani kam egallovchi tezkor **V8 Bytecode** yaratadi va darhol ijro etadi.
   - Funksiyaning chaqirilish chastotasini (Hotness profiling) kuzatadi.
3. **TurboFan (Optimizing JIT Compiler)**:
   - Ko'p marta bir xil turdagi argumentlar bilan chaqirilgan funksiyalarni ("Hot functions") to'g'ridan-to'g'ri **Machine Code (Assembler/Mashina kodi)** ga kompilyatsiya qiladi.
4. **Deoptimization (Bailout)**:
   - Agar optimallashtirilgan funksiyaga kutilmagan boshqa tipdagi argument uzatilsa (masalan, `number` o'rniga `string`), TurboFan uni yana sekinroq Ignition baytkodiga qaytaradi.

---

## 2. Hidden Classes (Shapes) & Inline Caches (IC)
JavaScript dinamik tipga ega bo'lsa-da, V8 xotirada tezkor qidiruv uchun obyektlarga **Map / Hidden Class** biriktiradi:

```javascript
function Point(x, y) {
  this.x = x; // Map 0 -> Map 1 (x offset 0)
  this.y = y; // Map 1 -> Map 2 (y offset 8)
}

const p1 = new Point(1, 2); // Map 2
const p2 = new Point(3, 4); // Map 2 (Bir xil Shape, xotira optimal!)
```
> [!TIP]
> Obyekt xususiyatlarini doimo bir xil tartibda yarating. Shunda V8 bir xil Hidden Class dan foydalanadi va xususiyatga murojaat qilish vaqti 1 ta protsessor instruksiyasiga teng bo'ladi (Inline Caching)!
