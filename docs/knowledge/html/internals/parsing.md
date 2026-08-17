# HTML Internals: Brauzer Dvigateli va Parsing Mexanizmi

## 👶 5 yoshli bola uchun tushuntirish: Tarjimon va Quruvchi
Tasavvur qiling, siz qog‘ozga uycha chizib berdingiz. 
* **1-yordamchi (Tokenizer)**: Siz yozgan harflarni bo‘laklarga (g‘isht, eshik, oyna) ajratadi.
* **2-yordamchi (Tree Builder)**: G‘ishtlarni bir-birining ustiga qo‘yib haqiqiy daraxtsimon uycha yasaydi.
* **3-yordamchi (Renderer)**: Uni chiroyli qilib ekranga chizib beradi.

---

## 1. Veb Brauzer Konveyeri (Critical Rendering Path)

HTML kodi ekranda piksellarga aylanishi uchun quyidagi 6 bosqichdan o‘tadi:

```text
HTML Baytlar
    ↓ (Encoding: UTF-8)
Belgilar (Characters)
    ↓ (Tokenization)
Tokenlar (StartTag, EndTag, Character, Comment, DOCTYPE)
    ↓ (Tree Construction)
DOM (Document Object Model) Daraxti
    ↓ + CSSOM (CSS Object Model)
Render Tree (Ko‘rinuvchi Elementlar Daraxti)
    ↓ (Layout / Reflow: O‘lcham va Joylashuv)
Paint & Composite (Piksellarni Ekranga Chizish)
```

---

## 2. Tokenizatsiya (HTML Tokenizer)
Brauzer kodni baytma-bayt o‘qiydi va **Holatlar Mashinasi (State Machine)** orqali tokenlarga ajratadi:

1. **Data State**: Oddiy matnni o‘qish holati. `<` belgisiga duch kelganda `Tag Open State` ga o‘tadi.
2. **Tag Open State**: Belgidan keyin `a-z` kelsa `Tag Name State` ga o‘tadi, `/` kelsa `End Tag Open State` ga o‘tadi.
3. **Tag Name State**: Teg nomini yig‘adi (masalan: `div`, `p`, `h1`). Bo‘sh joy kelsa `Before Attribute Name State` ga o‘tadi.
4. **Self-Closing / Attribute States**: Atributlar va yopilish belgilarini tahlil qiladi.

---

## 3. Daraxt Yasash (Tree Construction & Insertion Modes)
Tokenlar tayyor bo‘lishi bilan brauzer **Stack of Open Elements** (Ochiq elementlar stegi) orqali DOM daraxtini quradi.
Har bir holat o‘zining **Insertion Mode** (Joylashtirish rejimi) ga ega:

* `initial` → `before html` → `before head` → `in head` → `after head` → `in body` → `after body` → `after html`.

---

## 4. Xatolarni Avtomatik To‘g‘rilash (Error Recovery / Tolerant Parsing)
HTML ning eng qudratli jihati — **hech qachon "qotib qolmasligi" (Crash bo‘lmasligi)**:

### 1-Xato Misoli: Yopilmagan Teglar
```html
<p>Salom <b>Dunyo
<p>Yangi paragraf
```
* **Brauzer nima qiladi?**: `<p>` tegi blok element bo‘lgani uchun yangi `<p>` kelganda avvalgi `<p>` va `<b>` teglarini avtomatik yopadi (Implied End Tags).

### 2-Xato Misoli: Noto‘g‘ri Joylashtirilgan Jadval
```html
<table>
  <div>Jadval ichidagi div</div>
  <tr><td>Matn</td></tr>
</table>
```
* **Foster Parenting mexanizmi**: `<table>` ichida ruxsat berilmagan `<div>` elementi avtomatik ravishda jadvaldan oldinga (`table` dan tashqariga) surib chiqariladi!
