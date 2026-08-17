# JavaScript Closures & Prototypal Inheritance

## 1. Leksik Muhit va Closures (Yopilishlar)
JavaScript'da har bir funksiya yaratilganda o'zining **Lexical Environment (Leksik Muhiti)** ga havola oladi:

```javascript
function makeWallet(initialBalance) {
  let balance = initialBalance; // Private o'zgaruvchi

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const myWallet = makeWallet(100);
myWallet.deposit(50); // 150
// 'balance' ga tashqaridan to'g'ridan-to'g'ri kirish imkonsiz (Encapsulation)!
```

---

## 2. Prototypal Inheritance & Prototype Chain
JavaScript klasslarga emas, obyektlar o'rtasidagi **Prototype Chain (`[[Prototype]]`)** zanjiriga asoslangan:

```javascript
const animal = {
  eats: true,
  walk() {
    return "Walking...";
  }
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true (animal prototipidan topildi!)
console.log(rabbit.walk()); // "Walking..." (Prototype Chain bo'ylab yuqoriga chiqildi)
```
- Har bir oddiy obyektning eng oxirgi prototipi — `Object.prototype` (uning prototipi esa `null` dir).
