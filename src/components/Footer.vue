<template>
 <footer class="footer">
  <div class="container">
   <p>&copy; {{ new Date().getFullYear() }} Kodx.uz. Barcha huquqlar himoyalangan.</p>
  </div>
 </footer>
</template>

<script >
export default {
 name: "FooterPage"
};
</script>

<style scoped>
.footer {
 background: #222;
 color: #fff;
 padding: 20px 0;
 text-align: center;
}
.container {
 max-width: 1200px;
 margin: 0 auto;
}
</style>