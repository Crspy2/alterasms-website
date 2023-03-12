<template>
<footer class="relative border-t border-gray-200">
   <div class="absolute inset-x-0 flex items-center justify-center -top-3">
      <img src="../assets/altera.png" alt="logo" class="relative flex justify-center h-14 w-14 bottom-4"/>
   </div>
   <div class="px-8 py-6">
      <div class="sm:relative flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
         <div class="flex flex-col-reverse items-center gap-3 sm:flex-row sm:w-40 md:w-60">
            <span class="text-sm text-zinc-200">© 2023 AlteraSMS - MIT License</span>
         </div>
         <ul class="flex flex-wrap justify-center text-sm gap-x-6 gap-y-2">
            <li><a href="/tos" class="font-medium text-zinc-200 hover:text-white focus:text-white">TOS</a></li>
            <li><a href="/privacy-policy" class="font-medium text-zinc-200 hover:text-white focus:text-white">PRIVACY POLICY</a></li>
        </ul>
        <ul class="flex items-center justify-end gap-3 z-10 sm:w-40 md:w-60">
            <li>
                <a href="https://discord.crspy.cc" target="_blank" class="text-zinc-300 hover:text-zinc-400 text-xl pl-2 pr-2 py-1 text-center md:mr-0">
                    <v-icon name="fa-discord" scale="1.20" />
                </a>
            </li>
        </ul>
      </div>
   </div>
</footer>
</template>