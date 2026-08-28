# V8 Xotira Modeli: Stack, Heap & Garbage Collection

## 1. Stack vs Heap Xotirasi
V8 xotirani 2 ta asosiy zonaga bo'ladi:

1. **Call Stack**:
   - Primitiv qiymatlar (`Smi` sonlar, `boolean`, `null`, `undefined`) va hozir bajarilayotgan funksiyalarning Stack Frame lari saqlanadi.
   - Juda tezkor, LIFO (Last-In-First-Out) tartibida bo'shaydi.
2. **Memory Heap**:
   - Hajmi oldindan noma'lum bo'lgan dinamik obyektlar (`Object`, `Array`, `Closure scope context`) saqlanadi.

---

## 2. Generational Garbage Collection (GC)
V8 xotirani tozalashda obyektlarning "yoshiga" qarab 2 xil kollektordan foydalanadi:

### 1. Minor GC (Scavenger / Semi-Space)
- **New Space (Nursery)**: Yangi yaratilgan barcha obyektlar bu yerga tushadi.
- Cheneys copying algoritmi orqali juda tez (1-2 ms) tozalanadi. Omon qolgan obyektlar "Old Space" ga ko'chiriladi.

### 2. Major GC (Mark-Sweep-Compact)
- **Old Space**: Uzoq vaqt yashagan katta obyektlar zonasi.
- **Mark**: Ildizlardan (Root pointers) boshlab barcha yetib boriladigan obyektlarni belgilaydi.
- **Sweep**: Belgilanmagan (o'lik) obyektlarni xotiradan tozalaydi.
- **Compact**: Xotira bo'laklanishini (Fragmentation) yo'qotish uchun tirik obyektlarni yonma-yon joylashtiradi.

---

## 3. Eng Keng Tarqalgan Memory Leak lar
1. **Unintentional Global Variables**: `window.myData = [...]`.
2. **Forgotten Timers**: `setInterval` to'xtatilmasa, uning callbacki ichidagi obyektlar o'lmaydi.
3. **Detached DOM Nodes**: DOM dan o'chirilgan, lekin JS o'zgaruvchisida havolasi qolgan elementlar.
