import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// Vue DevTools
import vueDevTools from 'vite-plugin-vue-devtools'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve', // 开发阶段使用mock接口
      }),
      vueDevTools(),
      vueSetupExtend(),
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
})
