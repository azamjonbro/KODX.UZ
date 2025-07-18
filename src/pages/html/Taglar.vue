<template >
 <div class="flex">
   <!-- Taglar bo'limi -->
   <div class="w-1/4">
     <h2 class="text-xl font-semibold mb-2">Taglar</h2>
     <ul class="list-disc pl-6 mb-4">
       <li><router-link to="/html/attributlar">HTML Atributlari</router-link></li>
       <li><router-link to="/html/taglar">HTML Taglari</router-link></li>
     </ul>
   </div>
   <div class="flex-1 p-6">
     <router-view />
   </div>
 </div>
</template>
<script>
export default {
 name: "htmlTaglar",
}
</script>
<style lang="">
 
</style>