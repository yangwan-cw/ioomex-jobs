import type { RouteRecordRaw } from 'vue-router'

const talent: Array<RouteRecordRaw> = [
  {
    path: '/talent',
    name: 'talent',
    component: () => import('@/views/talent/index.vue')
  },
  {
    path: '/talent/detail/:id',
    name: 'detail',
    component: () => import('@/views/talent/detail.vue')
  }
];

export default talent
