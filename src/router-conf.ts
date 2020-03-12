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
        name: 'dashboard',
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
    path: '/example',
    component: Layout,
    redirect: '/example/tree',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        name: 'tree',
        path: 'tree',
        component: () => import(/* webpackChunkName: "tree" */ '@/views/tree/index.vue'),
        meta: {
          title: 'Tree',
          icon: 'tree'
        }
      },
      {
        name: 'form',
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
