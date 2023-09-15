<script setup>
import TheNav from './components/TheNav.vue';
import TheHeader from './components/TheHeader.vue'; // Corrected component name
import TheFooter from './components/TheFooter.vue'; // Corrected component name
</script>

<template>
  <div>
    
      <TheNav/>
      <TheHeader/>
    
    <section class="py-5">
      <RouterView/>
    </section>
      <TheFooter/>
  </div>
</template>

<style scoped>
</style>
