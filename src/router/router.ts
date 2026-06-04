// 对外暴露常量路由
export const constantRoutes = [
  {
    path: '/admin/login',
    name: 'adminLogin', //命名路由
    component: () => import('@/views/admin/login/index.vue'), // 路由懒加载，只有访问/login路径时才会加载这个组件
  },
  {
    path: '/admin/',
    name: 'adminHome',
    component: () => import('@/views/admin/home/index.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue'),
  },

  //普通用户相关页面
  {
    path: '/login',
    name: 'userLogin',
    component: () => import('@/views/user/login/index.vue'),
  },

  {
    path: '/',
    name: 'userHome',
    component: () => import('@/views/user/home/index.vue'),
  },

  {
    path: '/:pathMatch(.*)*', // 匹配所有路径
    redirect: '/404', // 重定向到404页面
    name: 'Any', // 命名路由
  },
]
