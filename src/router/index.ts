/*
 * @Author       : sutton
 * @Date         : 2024-05-02 18:18:09
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2024-05-03 00:50:30
 * @Description  : 用于管路系统中路由，采用这种方式不好维护，采用模块式路由
 */
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import routerModule from './route';

const routes: Array<RouteRecordRaw> = [...routerModule];

/**
 * @description: 创建路由
 * @param {RouterOptions}
 * @return {Router}
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
