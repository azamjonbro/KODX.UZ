# CSS Cascade Engine & Specificity Injiniringi

## 1. W3C Cascade Algoritmi
CSS da bitta elementga bir nechta qarama-qarshi stillar ta'sir qilganda brauzer quyidagi ustuvorlik tartibida yakuniy qiymatni hisoblaydi:

1. **Origin and Importance**:
   - `Transition declarations`
   - `!important` (User Agent)
   - `!important` (User)
   - `!important` (Author)
   - `Animation declarations`
   - `Normal declarations` (Author)
   - `Normal declarations` (User)
   - `Normal declarations` (User Agent)
2. **Context**: Shadow DOM vs Light DOM.
3. **Element-Attached Styles**: `style="..."` atributi.
4. **Specificity**: `(A, B, C)` bitmask hisob-kitobi.
5. **Order of Appearance**: Manbada eng oxirgi e'lon qilingan qoida.

---

## 2. Specificity Bitmask Formulasi
Chromium Blink dvigatelida (`third_party/blink/renderer/core/css/css_selector.cc`) Specificity 32-bitli butun son sifatida hisoblanadi:

```cpp
unsigned CSSSelector::Specificity() const {
  unsigned a = IsId() ? 0x10000 : 0;        // ID Selektor = 65,536 ball
  unsigned b = IsClass() ? 0x100 : 0;       // Class / Pseudo-class = 256 ball
  unsigned c = IsTag() ? 0x1 : 0;           // Element / Pseudo-element = 1 ball
  return a + b + c;
}
```

---

## 3. Blink StyleResolver va ComputedStyle
Brauzer har bir DOM elementi uchun `ComputedStyle` obyektini yaratadi. Bu obyekt elementning ekrandagi pikselli (absolyut `px`) qiymatlarini o'z ichiga oladi.
