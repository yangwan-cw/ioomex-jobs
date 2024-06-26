/*
 * @Author       : sutton
 * @Date         : 2024-05-02 18:18:09
 * @LastEditors  : 
 * @LastEditTime : 2024-05-03 11:15:38
 * @Description  : 请填写简介
 */
/*
 * @Author       : sutton
 * @Date         : 2024-05-02 18:18:09
 * @LastEditors  : Please set LastEditors
 * @LastEditTime : 2024-05-03 10:50:36
 * @Description  : 请填写简介
 */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:{
    // 组件名
    'vue/multi-word-component-names': 'off',
    // 取消分号
    'semi': 'off'

  }
};
