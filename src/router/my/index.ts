/*
 * @Author       : sutton
 * @Date         : 2024-05-03 01:13:00
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2024-05-03 01:21:25
 * @Description  : 请填写简介
 */

import type { RouteRecordRaw } from 'vue-router'

const my: Array<RouteRecordRaw> = [
  {
    path: '/my',
    name: 'my',
    component: () => import('@/views/my/index.vue')
  },
  {
    path: '/my/user',
    name: 'user',
    component: () => import('@/views/my/user/index.vue')
  },
  {
    path: '/my/user/authReal',
    name: 'authReal',
    component: () => import('@/views/my/user/authReal.vue')
  },
  {
    path: '/my/user/certified',
    name: 'certified',
    component: () => import('@/views/my/user/certified.vue')
  },
  {
    path: '/my/user/identiSwitch',
    name: 'identiSwitch',
    component: () => import('@/views/my/user/identiSwitch.vue')
  },

  {
    path: '/my/user/set',
    name: 'set',
    component: () => import('@/views/my/set/index.vue')
  },

  {
    path:'/my/feedback',
    name:'feedback',
    component:()=>import('@/views/my/feedback/index.vue')
  },


  {
    path: '/my/account',
    name: 'account',
    component: () => import('@/views/my/account/index.vue')
  },
  {
    path: '/my/account/coinExplain',
    name: 'coinExplain',
    component: () => import('@/views/my/account/coinExplain.vue')
  },
  {
    path: '/my/account/depositExplain',
    name: 'depositExplain',
    component: () => import('@/views/my/account/depositExplain.vue')
  },
  {
    path: '/my/account/advance',
    name: 'advance',
    component: () => import('@/views/my/account/advance.vue')
  },


  {
    path: '/my/resume',
    name: 'resume',
    component: () => import('@/views/my/resume/index.vue')
  },
  {
    path: '/my/resume/preview',
    name: 'preview',
    component: () => import('@/views/my/resume/preview.vue')
  },


  {
    path: '/my/collect',
    name: 'collect',
    component: () => import('@/views/my/collect/index.vue')
  },
]

export default my
