import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

// Element plus 按需加载
import AutoImport from 'unplugin-auto-import/vite' 
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        localEnabled: command === 'serve', // 开发阶段使用mock接口
      }),
      AutoImport({
        // 自动导入API
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        // 自动导入组件
        resolvers: [ElementPlusResolver({
          importStyle: 'css'
        })]
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  }
})
