import { createApp } from 'vue'

// vue路由
import router from '@/router'

// 全局样式
import '@/styles/index.scss'

// Element Plus
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import { zhCn } from 'element-plus/es/locales.mjs'

// pinia
import pinia from '@/store'

import App from './App.vue'

const app = createApp(App)

app.use(router)

app.use(ElementPlus, { locale: zhCn })

app.use(pinia)

app.mount('#app')
