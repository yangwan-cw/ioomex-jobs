import type { RouteRecordRaw } from 'vue-router';
const login: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/login/privacyPolicy',
    name: 'privacyPolicy',
    component: () => import('@/views/login/privacyPolicy.vue')
  },
  {
    path: '/login/serviceAgree',
    name: 'serviceAgree',
    component: () => import('@/views/login/serviceAgree.vue')
  }
];

export default login
