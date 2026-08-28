# JavaScript Event Loop & Navbatlar Ierarxiyasi

## 1. Event Loop Mexanizmi
JavaScript bir vaqtning o'zida faqat 1 ta buyruqni bajara oladi (Single Threaded). Asinxronlik brauzerning C++ Web API lari va Event Loop orqali ta'minlanadi.

```
+-------------------------------------------------------------+
|                        CALL STACK                           |
+-------------------------------------------------------------+
                              | (bo'shaganda)
                              v
+-------------------------------------------------------------+
|                  MICROTASKS QUEUE (1-o'rin)                 |
|  - Promise.then / catch / finally                           |
|  - queueMicrotask()                                         |
|  - MutationObserver                                         |
+-------------------------------------------------------------+
                              | (bo'shaganda)
                              v
+-------------------------------------------------------------+
|                   RENDER & REFLOW (60/120 FPS)              |
|  - requestAnimationFrame()                                  |
+-------------------------------------------------------------+
                              | (bo'shaganda)
                              v
+-------------------------------------------------------------+
|                  MACROTASKS / TASK QUEUE                    |
|  - setTimeout() / setInterval()                             |
|  - I/O & Network Fetch callbacks                            |
|  - UI click/keypress event callbacks                        |
+-------------------------------------------------------------+
```

---

## 2. Microtask Starvation Xavfi
Agar microtask ichida tinimsiz yangi microtask chaqirilsa (`Promise.resolve().then(...)`), Call Stack hech qachon Macrotasks yoki Render bosqichiga yetib bormaydi va **brauzer to'liq qotib qoladi (Freeze)**.
