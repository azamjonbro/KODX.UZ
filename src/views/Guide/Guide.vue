<script setup>
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const markdownText = ref('# Salom!\nBu **markdown** matni.')
const renderedHtml = ref(md.render(markdownText.value))

watch(markdownText, (newVal) => {
 renderedHtml.value = md.render(newVal)
})

// Tree sidebar menyu
const sidebarItems = [
 {
 name: 'Bosh sahifa',
 link: '/',
 children: [
  { name: 'HTML', link: '/html' },
  { name: 'CSS', link: '/css' }
 ]
 },
 {
 name: 'Qo‘llanma',
 link: '/guide',
 children: [
  { name: 'Vue', link: '/guide/vue' },
  { name: 'React', link: '/guide/react' }
 ]
 },
 {
 name: 'Aloqa',
 link: '/contact'
 }
]

const activeParent = ref(null)

function toggleParent(item) {
 activeParent.value = activeParent.value === item.link ? null : item.link
}
</script>

<template>
 <div class="container">
 <aside class="sidebar">
  <ul>
  <li v-for="item in sidebarItems" :key="item.link">
   <div @click="toggleParent(item)" style="cursor:pointer;">
   {{ item.name }}
   <span v-if="item.children">▸</span>
   </div>
   <ul v-if="item.children && activeParent === item.link">
   <li v-for="child in item.children" :key="child.link">
    <a :href="child.link">{{ child.name }}</a>
   </li>
   </ul>
  </li>
  </ul>
 </aside>
 <main class="content">
  <textarea v-model="markdownText" rows="8" cols="50"></textarea>
  <div v-html="renderedHtml"></div>


 </main>
 </div>
</template>
