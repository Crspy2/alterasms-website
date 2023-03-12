<!-- eslint-disable vue/no-parsing-error -->
<script lang="ts">
export default {
  data() {
    return {
      scrolled: 0,
      bgColor: '#ffffff'
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.scrolled = scrollTop
      this.bgColor = `rgb(${scrollTop}, ${scrollTop}, ${scrollTop})`
    }
  }
}
</script>

<template>
  <header class="px-2 sm:px-4 py-4 top-0 fixed w-full z-20 left-0" :class="{ 'backdrop-blur-[10px] saturate-[180%] bg-[rgba(0,0,0,0.5)] transition duration-500' : scrolled > 1, 'bg-transparent transition duration-200' : scrolled <= 1 }">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="#" class="flex items-center">
              <img src="../assets/altera-circle.png" alt="" class="w-10 h-10 mr-3"/>
              <h3 class="text-3xl uppercase text-slate-800 dark:text-white font-['Secular_One'] font-bold tracking-wider select-none">Altera SMS</h3>
          </a>
          <div class="flex md:order-2">
              <a href="https://discord.crspy.cc" target="_blank" class="text-zinc-300 hover:text-zinc-400 text-xl pl-2 pr-2 py-1 text-center md:mr-0">
                  <v-icon name="fa-discord" scale="1.20" />
              </a>
              <a href="https://store.crspy.cc/?browse=terms" target="_blank">
                  <button type="button" class="text-zinc-300 hover:text-zinc-400 font-bold rounded-lg text-sm px-3 py-2.5 text-center md:mr-0 mr-3 select-none">
                      TOS
                  </button>
              </a>
          </div>
          <div class="absolute left-1/2 right-1/2 justify-center items-center hidden w-screen md:flex md:w-auto md:order-3">
              <ul class="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
                  <li>
                      <a href="/#about" class="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:bg-transparent text-zinc-300 hover:text-zinc-400 uppercase font-bold select-none">
                      About
                      </a>
                  </li>
                  <li>
                      <a href="/#purchase" class="block py-2 pl-3 pr-4 rounded md:p-0 md:hover:bg-transparent text-zinc-300 hover:text-zinc-400 uppercase font-bold select-none">
                      Purchase
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  </header>
</template>