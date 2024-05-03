import type { RouteRecordRaw } from 'vue-router'


const task: Array<RouteRecordRaw> = [
  {
    path: '/task',
    name: 'task',
    component: () => import('@/views/task/index.vue')
  },
  {
    path: '/task/search',
    name: 'search',
    component: () => import('@/views/task/search.vue')
  },
  {
    path: '/task/details/:id',
    name: 'details',
    component: () => import('@/views/task/details.vue')
  },
  {
    path: '/task/companySource/:id',
    name: 'companySource',
    component: () => import('@/views/task/companySource.vue')
  }
];

export default task
