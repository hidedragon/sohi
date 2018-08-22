import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/plans',
    name: 'plans',
    meta: {
      icon: 'logo-buffer',
      title: '规划管理'
    },
    component: Main,
    children: [
      {
        path: 'plan_require',
        name: 'plan_require',
        meta: {
          icon: 'md-trending-up',
          title: '规划任务提交'
        },
        component: () => import('@/view/todo.vue')
      },
      {
        path: 'plan_ai',
        name: 'plan_ai',
        meta: {
          icon: 'ios-create',
          title: '智能分析处理'
        },
        component: () => import('@/view/todo.vue')
      },
      {
        path: 'plan_design',
        name: 'plan_design',
        meta: {
          icon: 'md-grid',
          title: '规划任务设计'
        },
        component: () => import('@/view/todo.vue')
      },
      {
        path: 'plan_approve',
        name: 'plan_approve',
        meta: {
          icon: 'md-pause',
          title: '规划任务审核'
        },
        component: () => import('@/view/todo.vue')
      },
      {
        path: 'plan_archived',
        name: 'plan_archived',
        meta: {
          icon: 'logo-markdown',
          title: '已归档规划任务'
        },
        component: () => import('@/view/todo.vue')
      }
    ]
  },
  {
    path: '/chat_center',
    name: 'chat_center',
    meta: {
      icon: 'md-cloud-upload',
      title: '交流中心'
    },
    component: Main,
    children: [
      {
        path: 'planing_chat',
        name: 'planing_chat',
        meta: {
          icon: 'ios-document',
          title: '执行中任务交流'
        },
        component: () => import('@/view/todo.vue'),
        component: parentView,
        children: [
          {
            path: 'task1',
            name: 'task1',
            meta: {
              icon: 'md-funnel',
              title: '任务一'
            },
            component: () => import('@/view/todo.vue')
          },
          {
            path: 'task2',
            name: 'task2',
            meta: {
              icon: 'md-funnel',
              title: '任务二'
            },
            component: () => import('@/view/todo.vue')
          }
        ]
      },
      {
        path: 'update_paste_page',
        name: 'update_paste_page',
        meta: {
          icon: 'md-clipboard',
          title: '已归档任务'
        },
        component: () => import('@/view/update/update-paste.vue'),
        component: parentView,
        children: [
          {
            path: 'task5',
            name: 'task5',
            meta: {
              icon: 'md-funnel',
              title: '任务五'
            },
            component: () => import('@/view/todo.vue')
          },
          {
            path: 'task5',
            name: 'task5',
            meta: {
              icon: 'md-funnel',
              title: '任务六'
            },
            component: () => import('@/view/todo.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/publics',
    name: 'publics',
    meta: {
      icon: 'logo-buffer',
      title: '舆情中心'
    },
    component: Main,
    children: [
      {
        path: 'public_center',
        name: 'public_center',
        meta: {
          icon: 'md-trending-up',
          title: '智能推送消息'
        },
        component: () => import('@/view/todo.vue')
      },
      {
        path: 'public_manage',
        name: 'public_manage',
        meta: {
          icon: 'md-trending-up',
          title: '智能推送设置'
        },
        component: () => import('@/view/todo.vue')
      }
    ]
  },
]
