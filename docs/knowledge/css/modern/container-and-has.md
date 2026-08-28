# Modern CSS: Container Queries, :has() & Native Nesting

## 1. Container Queries (`@container`)
Ekran kengligiga (Viewport) emas, balki element turgan ota konteynerning o'lchamiga qarab stillarni o'zgartirish:

```css
.card-wrapper {
  container-type: inline-size;
  container-name: sidebar-card;
}

@container sidebar-card (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
```

---

## 2. Relational Selector (`:has()`)
CSS tarixidagi eng kutilgan "ota-element selektori":
```css
/* Faqat rasmi bor maqolalarni tanlash */
article:has(img) {
  border-left: 4px solid #22c55e;
}

/* Formada xato input bo'lsa, submit tugmasini o'chirish */
form:has(input:invalid) button[type="submit"] {
  opacity: 0.5;
  pointer-events: none;
}
```

---

## 3. Native CSS Nesting
Preprocessorlarsiz to'g'ridan-to'g'ri brauzerda ichma-ich stillar yozish:
```css
.button {
  background: #2563eb;
  color: white;

  &:hover {
    background: #1d4ed8;
  }

  & .icon {
    margin-right: 8px;
  }
}
```
