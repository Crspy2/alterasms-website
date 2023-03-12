<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'
</script>

<template>
    <article class="bg-[#14171a]">
        <Navbar/>
        <RouterView />
        <Footer />
    </article>
</template>
