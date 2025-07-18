<template >
  <!--  HTML atributlari haqida ma'lumot -->
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">HTML Atributlari</h1>
    <p class="mb-4">
      HTML atributlari elementlarga qo'shimcha ma'lumot beradi. Ular elementning xatti-harakatini yoki ko'rinishini o'zgartirishi mumkin.
    </p>
    <h2 class="text-xl font-semibold mb-2">Atributlar qanday ishlaydi?</h2>
    <p class="mb-4">
      Atributlar elementning ochilish tegi ichida joylashadi va ular nom va qiymatdan iborat bo'ladi. Masalan:
    </p>
    <pre class="bg-gray-100 p-4 rounded mb-4">
      <code>&lt;a href="https://example.com" target="_blank"&gt;Example Link&lt;/a&gt;</code>
    </pre>
    <p class="mb-4">
      Yuqoridagi misolda <code>href</code> atributi havolani ko'rsatadi, <code>target="_blank"</code> esa havolani yangi oynada ochadi.
    </p>
    <h2 class="text-xl font-semibold mb-2">Asosiy atributlar</h2>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>id:</strong> Elementga noyob identifikator beradi.</li>
      <li><strong>class:</strong> Elementga bir yoki bir nechta klasslar beradi, bu CSS uslublarini qo'llash uchun ishlatiladi.</li>
      <li><strong>style:</strong> Elementga inline uslub qo'llash imkonini beradi.</li>
      <li><strong>title:</strong> Element haqida qo'shimcha ma'lumot beradi, foydalanuvchi sichqoncha bilan element ustiga kelib o'tganda ko'rsatiladi.</li>
      <li><strong>data-*:</strong> Maxsus ma'lumotlarni saqlash uchun ishlatiladi, bu ma'lumot JavaScript orqali o'qilishi mumkin.</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">Misol</h2>
    <pre class="bg-gray-100 p-4 rounded">
      <code>
        <a href="https://example.com" target="_blank" title="Example Website">Example Link</a>
      </code>
    </pre>
    <p class="mb-4">
      Ushbu misolda <code>href</code> atributi havolani ko'rsatadi, <code>target="_blank"</code> esa havolani yangi oynada ochadi. <code>title</code> atributi esa foydalanuvchi havola ustiga kelib o'tganda ko'rsatiladigan qo'shimcha ma'lumot beradi.
    </p>
    <h2 class="text-xl font-semibold mb-2">Qo'shimcha atributlar</h2>
    <ul class="list-disc pl-6 mb-4">
      <li><strong>alt:</strong> Rasm elementlari uchun muqobil matnini beradi, rasm yuklanmasa yoki foydalanuvchi rasmni ko'rmasa ko'rsatiladi.</li>
      <li><strong>src:</strong> Rasm elementlari uchun manzilni ko'rsatadi.</li>
      <li><strong>disabled:</strong> Elementni o'chirib qo'yadi, foydalanuvchi uni ishlata olmaydi.</li>
      <li><strong>checked:</strong> Radio tugmalari yoki checkboxlar uchun tanlangan holatni ko'rsatadi.</li>
      <li><strong>placeholder:</strong> Input elementlari uchun joy tutuvchi matnini beradi, foydalanuvchi inputga ma'lumot kiritmaguncha ko'rsatiladi.</li>
    </ul>
    <h2 class="text-xl font-semibold mb-2">Xulosa</h2>
    <p class="mb-4">
      HTML atributlari elementlarga qo'shimcha ma'lumot beradi va ularning xatti-harakatini yoki ko'rinishini o'zgartirishi mumkin. Atributlar elementning ochilish tegi ichida joylashadi va ular nom va qiymatdan iborat bo'ladi. HTML atributlarini to'g'ri ishlatish veb-sahifalarning interaktivligini va foydalanuvchi tajribasini yaxshilaydi.
    </p>
  </div>
</template>
<script>
export default {
 name: "HtmlAttributlar",
}
</script>
<style >
 
</style>