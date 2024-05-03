import type { RouteRecordRaw } from 'vue-router'

/*
 * @Author       : sutton
 * @Date         : 2024-05-03 01:03:36
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2024-05-03 01:06:59
 * @Description  : 请填写简介
 */
const message: Array<RouteRecordRaw> = [
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message/index.vue')
  },
  {
    path: '/message/systemDetails/:id',
    name: 'systemDetails',
    component: () => import('@/views/message/systemDetails.vue')
  },
  {
    path: '/message/systemList',
    name: 'systemList',
    component: () => import('@/views/message/systemList.vue')
  },
  {
    path: '/message/talk/:id',
    name: 'talk',
    component: () => import('@/views/message/talk.vue')
  }
]

export default message
