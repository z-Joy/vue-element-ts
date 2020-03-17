import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'

const routerConf: RouteConfig[] = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        name: 'Dashboard',
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  {
    path: '/organization',
    component: Layout,
    redirect: '/organization/department',
    meta: {
      title: '组织',
      icon: 'dashboard'
    },
    children: [
      {
        name: '部门管理',
        path: 'department',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/tree/index.vue'),
        meta: {
          title: '部门管理',
          icon: 'dashboard'
        }
      },
      {
        name: 'Form',
        path: 'form',
        component: () => import(/* webpackChunkName: "form" */ '@/views/form/index.vue'),
        meta: {
          title: 'Form',
          icon: 'form'
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    meta: { hidden: true }
  }
]

export default routerConf
