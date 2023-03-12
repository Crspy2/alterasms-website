<script setup lang="ts">
import Features from '../components/Features.vue';
import Header from '../components/Header.vue'
import Purchase from '../components/Purchase.vue';
import Services from '../components/Services.vue';
</script>

<template>
  <div>
    <Header />
    <section id="about">
      <Features/>
    </section>
    <Services />
    <section id="purchase">
      <Purchase />
    </section>
  </div>
</template>
