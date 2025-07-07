<template >
 <div>
  <h1 class="text-3xl font-bold mb-4">CSS Selectorlar</h1>
  <p class="mb-4">CSS selectorlar - bu HTML elementlarini tanlash uchun ishlatiladigan qoidalar to'plami. CSS selectorlari yordamida siz sahifadagi elementlarni uslubga keltirishingiz mumkin.</p>
  
  <h2 class="text-2xl font-semibold mb-2">Asosiy Selectorlar</h2>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Element Selector:</strong> HTML elementining nomi orqali tanlash, masalan: <code>div</code>, <code>p</code>.</li>
    <li><strong>Class Selector:</strong> Elementning klassi orqali tanlash, masalan: <code>.my-class</code>.</li>
    <li><strong>ID Selector:</strong> Elementning IDsi orqali tanlash, masalan: <code>#my-id</code>.</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-2">Kompleks Selectorlar</h2>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>Descendant Selector:</strong> Bir element ichidagi boshqa elementlarni tanlash, masalan: <code>div p</code>.</li>
    <li><strong>Child Selector:</strong> Faqat to'g'ridan-to'g'ri bolalarni tanlash, masalan: <code>ul > li</code>.</li>
    <li><strong>Sibling Selector:</strong> Bir xil ota elementga ega bo'lgan qo'shnilarni tanlash, masalan: <code>h1 + p</code>.</li>
  </ul>

  <h2 class="text-2xl font-semibold mb-2">Psevdo-sinovchilar</h2>
  <ul class="list-disc pl-6 mb-4">
    <li><strong>:hover</strong>, <strong>:focus</strong>, va boshqalar - foydalanuvchi interaktivligi asosida uslub qo'llash.</li>
  </ul>
 </div>
</template>
<script>
export default {
  name: "SelectorlarPage"
}
</script>
<style >

</style>
