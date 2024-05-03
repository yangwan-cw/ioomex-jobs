import type { RouteRecordRaw } from 'vue-router';

/*
 * @Author       : ioomex
 * @Date         : 2024-05-03 00:46:17
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2024-05-03 01:34:07
 * @Description  : 登录模块
 * @param {Array<RouteRecordRaw>} contract
 * @returns {Array<RouteRecordRaw>}
 */
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

export default login;
