
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import routerModule from './route'

const routes: Array<RouteRecordRaw> = [...routerModule]

/**
 * @description: 创建路由
 * @param {RouterOptions}
 * @return {Router}
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router
