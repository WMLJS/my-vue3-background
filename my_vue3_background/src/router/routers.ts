/*
 * @Author: WYJ
 * @LastEditors: WYJ
 * @LastEditTime: 2023-03-17 14:00:12
 * @Description: 
 */
import {RouteRecordRaw} from 'vue-router'

export const routes = [
    {
        path:'/login',
        name:'login',
        component:()=>import('../views/auth/login.vue'),
        meta: {
			title: "登录页",
			icon: ""
		}
    }
]as RouteRecordRaw[]