<template>
 <nav class="guide-sidebar">
  <ul>
   <li v-for="item in sidebarItems" :key="item.path">
    <router-link :to="item.path" active-class="active">
     {{ item.title }}
    </router-link>

    
   </li>
  </ul>
 </nav>
</template>

<script>
export default {
 name: 'GuideSidebar',
 data() {
  return {
   sidebarItems: [
    { title: 'Kirish', path: '/guide/introduction' },
    { title: 'O‘rnatish', path: '/guide/installation' },
    { title: 'Boshlanish', path: '/guide/getting-started' },
    { title: 'Komponentlar', path: '/guide/components' },
    { title: 'Router', path: '/guide/router' },
    { title: 'Holat boshqaruvi', path: '/guide/state-management' },
    { title: 'Qo‘shimcha', path: '/guide/advanced' }
   ]
  }
 }
}
</script>

<style scoped>
.guide-sidebar {
 width: 220px;
 background: #f9f9f9;
 padding: 20px 0;
 border-right: 1px solid #eee;
 height: 100vh;
}
.guide-sidebar ul {
 list-style: none;
 padding: 0;
 margin: 0;
}
.guide-sidebar li {
 margin-bottom: 12px;
}
.guide-sidebar .active {
 font-weight: bold;
 color: #42b983;
}
</style>