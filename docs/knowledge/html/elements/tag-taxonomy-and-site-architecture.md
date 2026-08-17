# WHATWG HTML Teglar Taksonomiyasi, 5 Xil Toifasi va Mukammal Sayt Strukturasi

Ushbu hujjat **WHATWG HTML Living Standard** va **W3C WCAG 2.2** xalqaro standartlari asosida HTML tilidagi barcha asosiy teglar, ularning 5 ta asosiy funksional toifasi, muhandislik afzalliklari va zamonaviy ideal sayt strukturasi arxitekturasini to‘liq yoritadi.

---

## 🏛️ 1. HTML Teglarining 5 Asosiy Toifasi (Content Models)

WHATWG spetsifikatsiyasiga ko‘ra, veb-hujjatdagi barcha teglar o‘zining vazifasi va brauzer xotirasidagi modeliga ko‘ra 5 ta asosiy turga bo‘linadi:

```
                      +------------------------------------------+
                      |         HTML ELEMENTLAR OLAMI            |
                      +------------------------------------------+
                                           |
         +-----------------+---------------+---------------+-----------------+
         |                 |                               |                 |
         v                 v                               v                 v
+-----------------+ +-----------------+             +-----------------+ +-----------------+
| 1. METADATA     | | 2. SECTIONING   |             | 4. PHRASING     | | 5. INTERACTIVE  |
| Resurslar &     | | Hujjat Skeleti  |             | Inline Matn     | | Formalar, Media |
| SEO qoidalari   | | & Landmarklar   |             | & Formatlar     | | & Top Layer     |
+-----------------+ +-----------------+             +-----------------+ +-----------------+
                           |                               |
                           +---------------> <-------------+
                                           |
                                           v
                                  +-----------------+
                                  | 3. GROUPING /   |
                                  | FLOW CONTENT    |
                                  | Paragraf, Ro'yxat|
                                  +-----------------+
```

---

### 🌟 1-Toifa: Metadata Elementlari (Metadata Content)
Sahifaning ko‘rinmas, ammo brauzer, qidiruv botlari (Googlebot) va operatsion tizim uchun eng muhim texnik parametrlarini belgilaydi.
- **Teglar**: `<head>`, `<title>`, `<meta>`, `<link>`, `<style>`, `<base>`.
- **Vazifasi**: UTF-8 kodirovka, Viewport o‘lchamlari, OpenGraph ijtimoiy kartochkalari, tashqi CSS/Shrift resurslarini ulash va DNS prefetch.
- **Afzalligi**: Brauzer sahifani chizishni boshlashdan oldin (Preload Scanner orqali) resurslarni parallel yuklaydi, bu First Contentful Paint (FCP) vaqtini 60% gacha tezlashtiradi.

---

### 🏛️ 2-Toifa: Semantik Bo‘limlar (Sectioning & Landmarks)
Sahifaning global maketini (Layout) va axborot arxitekturasini quruvchi suyak karkasi.
- **Teglar**: `<body>`, `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<hgroup>`, `<h1>-<h6>`.
- **Vazifasi**: Sahifadagi asosiy navigatsiya, maqola, yon panel va pastki qismlarni chegaralash.
- **Afzalligi**: 
  1. **AXObject Accessibility Tree**: Ko‘zi ojiz insonlar uchun ekran o‘quvchi dasturlar (Screen Readers) sahifa bo‘ylab tez sakrash imkonini beradi.
  2. **Google SEO Indexing**: Google botlari `<main>` va `<article>` ichidagi matnni eng yuqori darajadagi kontent sifatida indekslaydi.

---

### 📄 3-Toifa: Guruhlangan Matn Elementlari (Grouping / Flow Content)
Sahifa ichidagi matn va ma’lumotlarni mantiqiy bloklarga ajratuvchi elementlar.
- **Teglar**: `<p>`, `<blockquote>`, `<pre>`, `<ol>`, `<ul>`, `<li>`, `<dl>`, `<dt>`, `<dd>`, `<figure>`, `<figcaption>`, `<div>`, `<hr>`.
- **Vazifasi**: Paragraflar, tartiblangan/tartibsiz ro‘yxatlar, ta’riflar lug‘ati, iqtiboslar va rasmli bloklar yaratish.
- **Afzalligi**: Tipografik ierarxiya va matn o‘qiluvchanligini (Readability) ta’minlaydi.

---

### 🔤 4-Toifa: Qator Ichidagi Semantika (Phrasing / Inline Semantics)
Paragraf yoki matn qatori ichidagi so‘zlarning ma’no va ahamiyatini belgilaydi.
- **Teglar**: `<a>`, `<strong>`, `<em>`, `<code>`, `<time>`, `<mark>`, `<small>`, `<s>`, `<cite>`, `<q>`, `<abbr>`, `<kbd>`, `<sub>`, `<sup>`, `<span>`, `<br>`, `<wbr>`.
- **Vazifasi**: Giperhavolalar, muhim so‘zlar (`<strong>`), kalit kodlar (`<code>`), mashina o‘qiydigan sanalar (`<time datetime="...">`) va qisqartmalar (`<abbr>`).
- **Afzalligi**: Qidiruv tizimlari sanalar, iqtiboslar va havolalarni kontekstual anglaydi.

---

### ⚡ 5-Toifa: Interaktiv, Formalar va Multimedia (Interactive & Embedded)
Foydalanuvchi bilan jonli muloqot qiluvchi, ma’lumot yuboruvchi va multimedia chizuvchi boy elementlar.
- **Teglar**: `<form>`, `<input>`, `<button>`, `<select>`, `<textarea>`, `<dialog>`, `<details>`, `<summary>`, `<picture>`, `<video>`, `<audio>`, `<canvas>`, `<svg>`, `<template>`, `<slot>`.
- **Vazifasi**: Ma’lumot kiritish formasi, nativ modal oynalar (`<dialog>`), avtomatik format tanlovchi rasmlar (`<picture>`) va Web Komponentlar.
- **Afzalligi**: Tashqi og‘ir JavaScript kutubxonalarisiz to‘g‘ridan-to‘g‘ri brauzerning C++ dvigateli darajasida xavfsiz va yuqori tezlikda (60 FPS) ishlaydi.

---

## 🚀 2. Ideal va Mukammal Sayt Strukturasi (Modern Site Architecture)

Quyida xalqaro standartlar bo‘yicha to‘liq semantik, SEO va Accessibility talablariga 100% javob beruvchi zamonaviy veb-sahifa andozasi keltirilgan:

```html
<!DOCTYPE html>
<html lang="uz" dir="ltr">
  <head>
    <!-- 1. Metadata va Shifrlash -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KODX.uz — Professional Dasturlash Ta'limi</title>
    <meta name="description" content="WHATWG va W3C standartlari asosida Frontend injiniringi darslari.">

    <!-- OpenGraph Ijtimoiy Tarmoq Kartochkasi -->
    <meta property="og:title" content="KODX.uz — Dasturlash Platformasi">
    <meta property="og:description" content="Interaktiv simulyatorlar va chuqur darslar.">
    <meta property="og:image" content="https://kodx.uz/og-image.png">

    <!-- Resurslarni tezkor yuklash (Preload Hints) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="stylesheet" href="/src/index.css">
  </head>

  <body>
    <!-- 2. Global Sayt Boshlanishi (Header & Navigation) -->
    <header class="site-header">
      <div class="logo">
        <a href="/" aria-label="Bosh sahifa">
          <img src="/logo.svg" alt="KODX Logo" width="120" height="40">
        </a>
      </div>

      <nav aria-label="Asosiy menyu" class="main-nav">
        <ul>
          <li><a href="/html/kirish">HTML Asoslari</a></li>
          <li><a href="/css/kirish">CSS Dunyosi</a></li>
          <li><a href="/javascript/kirish">JavaScript & V8</a></li>
          <li><a href="/practice">Amaliyot Maydoni</a></li>
        </ul>
      </nav>
    </header>

    <!-- 3. Asosiy Yagona Mazmun Maydoni (Main Content) -->
    <main id="main-content" class="site-main">
      <!-- Asosiy Maqola yoki Dars -->
      <article class="lesson-article">
        <header class="article-header">
          <h1>HTML5 Semantik Teglari va Arxitekturasi</h1>
          <div class="article-meta">
            <span>Muallif: KODX Injiniring Guruhi</span>
            <time datetime="2026-08-18">18-Avgust, 2026</time>
          </div>
        </header>

        <section class="content-section">
          <h2>1. Nega Semantika Muhim?</h2>
          <p>
            Semantik teglar brauzer va ekran o‘quvchi dasturlarga kontentning aniq ma’nosini bildiradi.
          </p>

          <figure>
            <picture>
              <source srcset="/img/dom-tree.avif" type="image/avif">
              <img src="/img/dom-tree.png" alt="Blink DOM Daraxti sxemasi" loading="lazy" width="800" height="450">
            </picture>
            <figcaption>1-Rasm: Chromium Blink dvigatelida DOM daraxti tuzilishi.</figcaption>
          </figure>
        </section>

        <section class="content-section">
          <h2>2. Interaktiv Modal Sinovi</h2>
          <button type="button" onclick="document.getElementById('demoModal').showModal()">
            Modal Oynani Ochish
          </button>
        </section>
      </article>

      <!-- 4. Bilvosita Bog'liq Yon Panel (Sidebar) -->
      <aside class="lesson-sidebar" aria-label="Qo‘shimcha resurslar">
        <h3>Tavsiya Qilingan Mavzular</h3>
        <ul>
          <li><a href="/html/dialog">Zamonaviy &lt;dialog&gt; Tegi</a></li>
          <li><a href="/html/seo">Core Web Vitals & SEO</a></li>
        </ul>
      </aside>
    </main>

    <!-- Nativ Top Layer Modal -->
    <dialog id="demoModal" class="system-dialog">
      <h2>Xush kelibsiz!</h2>
      <p>Bu brauzerning native Top Layer qatlamidagi modaldir.</p>
      <button type="button" onclick="this.closest('dialog').close()">Yopish</button>
    </dialog>

    <!-- 5. Global Yakuniy Bo'lim (Footer) -->
    <footer class="site-footer">
      <div class="footer-links">
        <p>&copy; 2026 KODX.uz. Barcha huquqlar himoyalangan.</p>
        <nav aria-label="Huquqiy havolalar">
          <a href="/privacy">Maxfiylik siyosati</a>
          <a href="/terms">Foydalanish shartlari</a>
        </nav>
      </div>
    </footer>
  </body>
</html>
```

---

## 📊 3. 120+ WHATWG Teglarining Afzalliklari va Xotira Solishtiruvi

| Teg Guruhlari | Xotira Turi (Blink C++) | AXObject Roli | Layout Xarajati | Asosiy Afzalligi |
| :--- | :--- | :--- | :--- | :--- |
| `<header>`, `<nav>`, `<main>`, `<footer>` | `LayoutBlockFlow` | `banner`, `navigation`, `main`, `contentinfo` | O‘rtacha | SEO indekslash va qulay navigatsiya |
| `<h1>` - `<h6>` | `HTMLHeadingElement` | `heading` (level 1-6) | Kam | Hujjat shajarasini yaratish |
| `<dialog>` | `HTMLDialogElement` | `dialog` | Nativ Top Layer | Z-index darmon, fonni avtomatik bloklash |
| `<picture>`, `<source>` | `HTMLPictureElement` | `image` | Past (Lazy loading) | 70% tarmoq trafigini tejash (AVIF/WebP) |
| `<form>`, `<input>` | `HTMLFormElement` | `form`, `textbox`, `button` | O‘rtacha | Brauzer darajasidagi avtomatik validatsiya |
