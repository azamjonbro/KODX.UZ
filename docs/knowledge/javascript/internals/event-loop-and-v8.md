# JavaScript Internals: V8 Dvigateli, Xotira va Event Loop

## 👶 5 yoshli bola uchun tushuntirish: Oshpaz va Buyurtmalar Navbati
Restoranda bitta chaqqon **Bosh Oshpaz (Call Stack)** bor. U bir vaqtning o‘zida faqat bitta ovqat pishira oladi (Single Threaded).
* **Ovqat tayyorlash**: Oshpaz qozonda ovqatni tinimsiz kovlaydi.
* **Tandirga non yopish (Asinxron ish / Web API)**: Nonni tandirga solib, taymer qo‘yadi va boshqa ovqatga o‘tadi.
* **Qo‘ng‘iroq chalinganda (Event Loop)**: Non pishganida yordamchi oshpazga "Non tayyor, laganga suzib ber!" deb buyurtmalar qog‘ozini uzatadi.

---

## 1. Google V8 Dvigateli Arxitekturasi

JavaScript kodini kompyuter tushunadigan mashina kodiga aylantirish:

```text
JS Manba Kodi
    ↓ (Parser)
AST (Abstract Syntax Tree)
    ↓ (Ignition Interpreter)
Baytkod (Tez ishga tushish uchun)
    ↓ (Profiling: Ko‘p chaqiriladigan "Hot" funksiyalarni aniqlash)
TurboFan JIT Compiler
    ↓ (Optimized Machine Code)
Tezkor Mashina Kodi (0 va 1 lar)
```

---

## 2. Xotira Modeli: Stack vs Heap

* **Call Stack (Stek)**: Bajarilayotgan funksiyalar va Primitive qiymatlar (`number`, `string`, `boolean`) saqlanadigan joy (LIFO — Last In, First Out).
* **Memory Heap (Uyma)**: Murakkab dinamik obyektlar (`Object`, `Array`, `Function`) saqlanadigan katta xotira maydoni.
* **Garbage Collector (Axlat Yig‘uvchi)**: Xotirada keraksiz bo‘lib qolgan obyektlarni **"Mark-and-Sweep"** algoritmi orqali avtomatik tozalaydi.

---

## 3. Asinxronlik va Event Loop Navbatlari (Microtasks vs Macrotasks)

JavaScript **Single-threaded** (bitta oqimli), lekin brauzer Web APIs yordamida bir vaqtda bir nechta ishlarni parallel boshqaradi.

```text
       ┌──────────────┐
       │  Call Stack  │ ◄─── (Hozir bajarilayotgan kod)
       └──────┬───────┘
              │ (Bo‘shagach)
       ┌──────▼───────┐
       │  EVENT LOOP  │
       └───┬───────┬──┘
           │       │
  (1-Navbat)      (2-Navbat)
┌──────────────┐ ┌──────────────┐
│  Microtasks  │ │  Macrotasks  │
│  (Promises,  │ │ (setTimeout, │
│ queueMicro)  │ │ setInterval) │
└──────────────┘ └──────────────┘
```

### Oltin Qoida:
> **Microtask navbati har doim Macrotask navbatidan oldin bajariladi!**
> `Promise.then()` har doim `setTimeout()` dan oldin o‘z navbatini oladi.

### Kod Misoli:
```javascript
console.log('1. Boshlandi');

setTimeout(() => {
  console.log('4. setTimeout (Macrotask)');
}, 0);

Promise.resolve().then(() => {
  console.log('3. Promise (Microtask)');
});

console.log('2. Tugadi');

// Natija:
// 1. Boshlandi
// 2. Tugadi
// 3. Promise (Microtask)
// 4. setTimeout (Macrotask)
```
