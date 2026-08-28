# CSS Box Model & Block Formatting Context (BFC)

## 1. Box Model Qatlamlari
Har bir HTML elementi quyidagi 4 ta fizik qatlamga ega:
1. **Content**: Elementning haqiqiy matni, rasmi yoki bolalari.
2. **Padding**: Content atrofidagi ichki shaffof masofa.
3. **Border**: Elementning tashqi hoshiya devori.
4. **Margin**: Qo'shni elementlardan ajratib turuvchi tashqi masofa.

### `box-sizing` Farqi:
- `content-box` (Standart): `Width = Content Width`. Umumiy eni = `Width + Padding + Border`.
- `border-box` (Zamonaviy): `Width = Content + Padding + Border`. Quti o'lchami o'zgarmaydi!

---

## 2. Margin Collapsing Mexanizmi
Vertikal (tepa va pastki) marginlar bir-biriga tekkanda ular qo'shilmaydi, balki eng kattasi yutadi:
```css
.box-top { margin-bottom: 30px; }
.box-bottom { margin-top: 20px; }
/* Qutilar orasidagi haqiqiy masofa 50px emas, 30px bo'ladi! */
```

---

## 3. Block Formatting Context (BFC)
BFC — elementlarning bir-biriga ta'sir qilmasdan alohida mustaqil quti sifatida joylashish sohasi:
- Yaratish usullari: `overflow: hidden`, `display: flex / grid`, `position: absolute / fixed`, `display: flow-root`.
