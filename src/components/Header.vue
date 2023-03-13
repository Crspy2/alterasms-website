<script setup lang="ts">
import DiscordEmbed from './DiscordEmbed.vue'
</script>

<template>
    <div class="h-screen">
        <Starfield />
        <div class="max-w-[1250px] mx-auto flex flex-col lg:flex-row justify-evenly pt-32 lg:pt-40 gap-10">
            <div class="flex flex-col gap-16 text-center items-center lg:items-left lg:text-left">
                <div class="mt-5">
                    <h2 class="text-white font-warp text-5xl lg:text-7xl">Altera SMS</h2>
                    <p class="text-white font-neon text-xl lg:text-2xl">Cheap, Reliable & Easy to Use</p>
                </div>
                <div class="pt-10 lg:pt-0">
                    <DiscordEmbed />
                </div>
            </div>
            <div class="hidden lg:block">
                <widgetbot
                    server="1077426005876154398"
                    channel="1083911276822007808"
                    width="600"
                    height="400"
                    >
                </widgetbot>
            </div>
        </div>
    </div>
</template>