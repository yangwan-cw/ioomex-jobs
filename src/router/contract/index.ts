import type { RouteRecordRaw } from 'vue-router'

/**
 * @param {Array<RouteRecordRaw>} contract
 * @returns {Array<RouteRecordRaw>}
 * @author ioomex
 * @date 2024-05-03 00:50:30
 * @version V1.0.0
 * @description 用于合同管理
 */
const contract: Array<RouteRecordRaw> = [
  {
    path: '/contract',
    name: 'contract',
    component: () => import('@/views/contract/index.vue')
  },
  {
    path: '/contract/details/:id',
    name: 'details',
    component: () => import('@/views/contract/details.vue')
  },
  {
    path: '/contract/progress/:id',
    name: 'progress',
    component: () => import('@/views/contract/progress.vue')
  }
]

export default contract
