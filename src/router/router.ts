// 对外暴露常量路由
export const constantRoutes = [
  {
    path: '/admin/login',
    name: 'adminLogin', //命名路由
    component: () => import('@/views/admin/login/index.vue'), // 路由懒加载，只有访问/login路径时才会加载这个组件
    meta: {
      title: '管理员登录',
      hidden: true,
    },
  },
  {
    // 后台登录成功后展示数据的路由
    path: '/admin/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false,
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/admin/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
        },
      },
      {
        path: '/ceshi',
        component: () => import('@/views/admin/home/index.vue'),
        meta: {
          title: 'ceshi',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    },
  },

  //普通用户相关页面
  {
    path: '/login',
    name: 'userLogin',
    component: () => import('@/views/user/login/index.vue'),
    meta: {
      title: '用户登录',
      hidden: true,
    },
  },

  {
    path: '/',
    name: 'userHome',
    component: () => import('@/views/user/home/index.vue'),
    meta: {
      title: '首页',
      hidden: true,
    },
  },

  {
    path: '/:pathMatch(.*)*', // 匹配所有路径
    redirect: '/404', // 重定向到404页面
    name: 'Any', // 命名路由
    meta: {
      title: '任意路由',
      hidden: true,
    },
  },
]
