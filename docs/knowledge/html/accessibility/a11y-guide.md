# Web Accessibility (A11y) va WAI-ARIA

## 👶 5 yoshli bola uchun tushuntirish: Hamma Uchun Qulay Maktab
Tasavvur qiling, maktabga ko‘zi yaxshi ko‘rmaydigan yoki aravachada yuradigan bolalar ham keladi. Ular uchun ovozli eshiklar va qulay panduslar quriladi.
**Veb Accessibility** — bu saytingizni nafaqat ko‘zi o‘tkir insonlar, balki ko‘zi ojiz, qulog‘i og‘ir yoki faqat klaviatura bilan ishlaydigan insonlar ham bemalol ishlata olishini ta’minlashdir!

---

## 1. W3C WCAG 2.2 ning 4 Ta Asosiy Tamoyili (POUR)

1. **Perceivable (Idrok qilinadigan)**: Foydalanuvchi ma’lumotni o‘z his-tuyg‘ulari (ko‘rish, eshitish) orqali seza olishi kerak (masalan, barcha `<img>` larda `alt` atributi bo‘lishi).
2. **Operable (Boshqariladigan)**: Sichqonchasiz, faqat klaviatura (`Tab`, `Enter`, `Space`) orqali saytni to‘liq boshqarish imkoniyati.
3. **Understandable (Tushunarli)**: Sayt tili (`<html lang="uz">`), tushunarli xatolik xabarlari va barqaror navigatsiya.
4. **Robust (Mustahkam)**: Har xil ekran o‘quvchi dasturlar (NVDA, JAWS, VoiceOver) va kelajakdagi qurilmalarda to‘g‘ri ishlashi.

---

## 2. WAI-ARIA (Accessible Rich Internet Applications)
Semantik HTML teglari yetarli bo‘lmagan hollarda ekranni o‘quvchi dasturlarga qo‘shimcha "ko‘z" bo‘lib xizmat qiladi:

### Asosiy ARIA Atributlari:
* `role="dialog"`: Blokning modal oyna ekanligini bildiradi.
* `aria-label="Sahifani yopish"`: Matnsiz ikonka (masalan `❌` yoki SVG) uchun ovozli tushuntirish beradi.
* `aria-hidden="true"`: Faqat bezak uchun qo‘yilgan elementlarni ekran o‘quvchilardan yashiradi.
* `aria-expanded="true/false"`: Akkordeon yoki menyu ochilgan yoki yopiqligini bildiradi.
* `aria-live="polite"`: Sahifa qayta yuklanmasdan o‘zgargan yangiliklarni (masalan bildirishnomalarni) ovoz chiqarib o‘qib beradi.
