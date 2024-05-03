/*
 * @Author       : sutton
 * @Date         : 2024-05-02 18:18:09
 * @LastEditors  : 
 * @LastEditTime : 2024-05-02 23:57:57
 * @Description  : 请填写简介
 */
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueDevTools from 'vite-plugin-vue-devtools';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    outDir:'job'
  }
});
