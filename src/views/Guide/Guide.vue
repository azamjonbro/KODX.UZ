<script setup>
import { ref, watch } from 'vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()
const markdownText = ref('# Salom!\nBu **markdown** matni.')
const renderedHtml = ref(md.render(markdownText.value))

watch(markdownText, (newVal) => {
 renderedHtml.value = md.render(newVal)
})
</script>

<template>
 <textarea v-model="markdownText" rows="8" cols="50"></textarea>
 <div v-html="renderedHtml"></div>
</template>
