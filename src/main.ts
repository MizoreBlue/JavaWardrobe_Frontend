import { createApp } from 'vue'
// vue路由
import router from '@/router'
// 全局样式
import '@/styles/index.scss'
import App from './App.vue'
 
const app = createApp(App)

app.use(router)
app.mount('#app')
