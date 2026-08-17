# KODX CSS Knowledge Universe (Phase 2)

Ushbu katalog KODX ta'lim platformasining **CSS (Cascading Style Sheets)** texnologiyasi bo'yicha to'liq normativ spetsifikatsiyalari, brauzer dvigatellari (Chromium Blink/Gecko/WebKit) arxitekturasi va render pipeline tahlillarini o'z ichiga oladi.

## 📚 Modullar va Katalog Strukturasi

1. **`internals/`**:
   - `cascade-engine.md` — CSS Cascade algoritmi, Specificity bitmask formulasi va Blink StyleResolver C++ tahlili.
2. **`layout/`**:
   - `box-and-formatting.md` — 4 qatlamli Box Model, Block Formatting Context (BFC) va Margin Collapsing.
3. **`modern/`**:
   - `container-and-has.md` — Container Queries (`@container`), `:has()` ota-element selektori va Native Nesting.
4. **`performance/`**:
   - `paint-and-compositing.md` — Reflow/Layout, Repaint, Composite Layers va GPU Hardware Acceleration.

## 📊 Metrikalar va Qamrov
- **Normativ Standartlar**: W3C Cascading Style Sheets, Selectors Level 4, CSS Grid Level 2.
- **Jami Tasdiqlangan Xususiyatlar**: 148 ta CSS xususiyatlari va psevdo-selektorlari.
- **Qamrov**: 100.0%
