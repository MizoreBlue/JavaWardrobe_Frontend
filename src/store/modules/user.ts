// 用户相关仓库
import { defineStore } from 'pinia'
import type { LoginForm } from '@/api/type'
import { LoginAPI } from '@/api/user'
import { constantRoutes } from '@/router/router'

const useUserStore = defineStore('user', {
  // 小仓库存贮数据的地方
  state: () => {
    return {
      token: localStorage.getItem('token') || '', //用户唯一标识
      menuList: constantRoutes,
    }
  },
  // 异步 | 逻辑
  actions: {
    // 用户登录
    async userLogin(data: LoginForm) {
      const result: any = await LoginAPI(data)
      if (result.code === 200) {
        this.token = result.data.token
        //持久化存贮到本地
        localStorage.setItem('token', result.data.token)
        return 'ok' // 返回Promise 对象
      } else {
        // 请求失败
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

// 导出仓库
export default useUserStore
