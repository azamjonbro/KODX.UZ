# Web Performans va Google Core Web Vitals (2026)

## 👶 5 yoshli bola uchun tushuntirish: Super Poygachi
Agar poygachi mashinasiga og‘ir toshlar yuklab olsa, u sekin yuradi va boshqalardan orqada qoladi.
**Veb Performans** — bu saytingizni hech qanday ortiqcha yuksiz, bir ko‘z ochib yumguncha (0.1 soniyada) ochiladigan poyga mashinasiga aylantirishdir!

---

## 1. Google Core Web Vitals Uchligi

### 1. LCP (Largest Contentful Paint) — Yuklanish Tezligi
* **Maqsadi**: Sahifadagi eng katta vizual element (katta banner rasmi yoki asosiy matn bloki) qancha vaqtda ko‘rinadi?
* **Yaxshi ko‘rsatkich**: **< 2.5 soniya**.
* **HTML Optimizatsiyasi**:
  ```html
  <link rel="preload" href="/hero-banner.webp" as="image" type="image/webp" />
  ```

### 2. INP (Interaction to Next Paint) — Reaktivlik va Javob Berish
* **Maqsadi**: Foydalanuvchi tugmani bosganidan keyin brauzer ekranda o‘zgarishni qancha vaqtda chizib beradi?
* **Yaxshi ko‘rsatkich**: **< 200 millisekund**.
* **HTML Optimizatsiyasi**: Og‘ir JavaScript fayllarini `defer` yoki `async` bilan yuklash:
  ```html
  <script src="/app.js" defer></script>
  ```

### 3. CLS (Cumulative Layout Shift) — Vizual Barqarorlik
* **Maqsadi**: Sahifa yuklanayotganda elementlar pastga yoki yonga sakrab ketmasligi.
* **Yaxshi ko‘rsatkich**: **< 0.1 ball**.
* **HTML Oltin Qoidasi**: Barcha `<img>` va `<video>` larga aniq `width` va `height` atributlarini berish:
  ```html
  <!-- Rasm yuklanishidan oldin brauzer uning o‘rnini bo‘sh saqlab turadi -->
  <img src="banner.webp" width="1200" height="600" alt="KODX Banner" />
  ```

---

## 2. Resurslarni Oldindan Boshqarish (Resource Hints)
* `rel="dns-prefetch"`: Tashqi domenning IP manzilini oldindan aniqlaydi.
* `rel="preconnect"`: Server bilan TLS/SSL qo‘l berishishni oldindan amalga oshiradi.
* `rel="preload"`: Sahifa ochilishi uchun eng muhim shrift yoki rasmni navbatsiz birinchi bo‘lib yuklaydi.
* `rel="prefetch"`: Foydalanuvchi keyingi sahifaga o‘tishi mumkin bo‘lgan resurslarni bo‘sh vaqtda oldindan yuklab qo‘yadi.
