<template>
 <div  v-if="iconSvg" v-html="iconSvg"></div>
 <span v-else><!-- Icon topilmadi --></span>
</template>

<script>
export default {
 name: "AppIconsPage",
 props: {
  name: {
   type: String,
   required: true
  }
 },
 data() {
  return {
   icons: {
    home: `<svg width="24" height="24" fill="none" stroke="currentColor"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>`,
    search: `<svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    moon: `<svg width="24" height="24" fill="none" stroke="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>`,
    sun: `<svg width="24" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    logo:` `,


   }
  }
 },
 computed: {
  iconSvg() {
   return this.icons[this.name] || '';
  }
 }
}
</script>

