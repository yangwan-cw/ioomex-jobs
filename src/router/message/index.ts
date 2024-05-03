/*
 * @Author       : sutton
 * @Date         : 2024-05-03 01:03:36
 * @LastEditors  : 
 * @LastEditTime : 2024-05-03 11:17:47
 * @Description  : 请填写简介
 */
import type { RouteRecordRaw } from 'vue-router'
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
];

export default message
