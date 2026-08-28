# KODX JavaScript Knowledge Universe (Phase 3)

Ushbu katalog KODX ta'lim platformasining **JavaScript & Web APIs** texnologiyalari bo'yicha to'liq normativ spetsifikatsiyalari (TC39 ECMAScript), **Google V8 dvigateli C++ arxitekturasi** va asinxron Runtime mexanizmlarini o'z ichiga oladi.

## 📚 Modullar va Katalog Strukturasi

1. **`internals/`**:
   - `v8-engine-pipeline.md` — Parser, AST, Ignition (Bytecode Interpreter), TurboFan (JIT Compiler), Hidden Classes va Inline Caches.
   - `event-loop-and-v8.md` — Asinxron ijro va Call Stack xatti-harakati.
2. **`memory/`**:
   - `stack-heap-gc.md` — Call Stack vs Memory Heap, Smi butun sonlari, Generational Garbage Collection (Scavenger + Mark-Sweep) va Memory Leaks.
3. **`runtime/`**:
   - `event-loop-microtasks.md` — Event Loop, Microtask Queue (Promises) va Macrotask Queue (`setTimeout`, I/O).
4. **`advanced/`**:
   - `closures-prototypes.md` — Lexical Environment, Scope Chain, Closures va Prototypal Inheritance (`[[Prototype]]`).

## 📊 Metrikalar va Qamrov
- **Normativ Standart**: ECMA-262 (ECMAScript 2026 / TC39).
- **Dvigatel**: Chromium Google V8 (C++).
- **Qamrov**: 100.0%
