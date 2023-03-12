import { createApp } from 'vue'
import router from './router'

import './style.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaDiscord, BiHeartFill, FaLock, FaCog, MdUpdate, FaHeadphones, FaSave, RiBracesFill, FaCopyright } from "oh-vue-icons/icons"
addIcons( FaDiscord, BiHeartFill, FaLock, FaCog, MdUpdate, FaHeadphones, FaSave, RiBracesFill, FaCopyright );

const app = createApp(App)
app.component("v-icon", OhVueIcon)
app.use(router)
app.mount('#app')
