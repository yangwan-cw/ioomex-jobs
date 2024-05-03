import login from '@/router/login';
import task from '@/router/task';
import contract from '@/router/contract';
import message from './message';
import type { RouteRecordRaw } from 'vue-router';
import my from './my';

const routerModule: Array<RouteRecordRaw> = [...login, ...task, ...contract, ...message, ...my];

export default routerModule;
