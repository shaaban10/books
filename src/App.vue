<script setup>
import TheNav from './components/TheNav.vue';
import TheHeader from './components/TheHeader.vue'; // Corrected component name
import TheFooter from './components/TheFooter.vue'; // Corrected component name
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <TheNav/>
    </nav>
    <header class="bg-dark py-5">
      <TheHeader/>
    </header>
    <section class="py-5">
      <RouterView/>
    </section>
    <footer class="py-5 bg-dark">
      <TheFooter/>
    </footer>
  </div>
</template>

<style scoped>
</style>
