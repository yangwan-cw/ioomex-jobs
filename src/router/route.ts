import login from '@/router/login'
import task from '@/router/task';
import contract from '@/router/contract';
import message from './message';
import type { RouteRecordRaw } from 'vue-router';



const routerModule: Array<RouteRecordRaw> = [
    ...login,
    ...task,
    ...contract,
    ...message
]


export default routerModule;