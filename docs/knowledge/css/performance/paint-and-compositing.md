# CSS Rendering Performance: Reflow, Repaint & Compositing

## 1. CSS Render Pipeline
Brauzer CSS qoidalarini ekranga chiqarishda 3 ta asosiy bosqichni bosib o'tadi:
1. **Layout (Reflow)**: Elementlarning koordinata va o'lchamlari (`x, y, width, height`) hisoblanadi. Eng og'ir bosqich!
2. **Paint (Repaint)**: Ranglar, fon rasmlari va matnlar piksellarga aylantiriladi (Rasterization).
3. **Composite (GPU Layers)**: Alohida qatlamlar GPU orqali birlashtirilib ekranga yuboriladi.

---

## 2. Xususiyatlarning Narxi (Cost Matrix)
| CSS Xususiyati | Layout (Reflow) | Paint (Repaint) | Composite (GPU) | Performans |
| :--- | :---: | :---: | :---: | :---: |
| `width`, `height`, `margin`, `padding`, `top`, `left` | 🔴 Ha | 🔴 Ha | 🔴 Ha | Juda Sekin |
| `color`, `background`, `border-color`, `box-shadow` | 🟢 Yo'q | 🔴 Ha | 🔴 Ha | O'rta |
| `transform` (`translate`, `scale`, `rotate`), `opacity` | 🟢 Yo'q | 🟢 Yo'q | 🟢 Ha (GPU) | ⚡ 120 FPS Tezkor |

---

## 3. GPU Hardware Acceleration
Animatsiyalarni faqat GPU da (Compositor Thread) 60/120 FPS da bajarish uchun:
```css
.animated-modal {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU Layer promotion */
}
```
