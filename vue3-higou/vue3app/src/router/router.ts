


import { createWebHistory, createWebHashHistory , createRouter  } from 'vue-router'
import { ErrorRoutes } from '../views/Errors/route';
import { LoginRoutes } from '../views/Logins/route';
import { AppRoutes } from '../views/App/route';
import { OrderRoutes } from '../views/Order/route';

const routes = [
    {
        path:"/guide",
        name:'guide',
        component:()=>import('@/views/Guide/Guide.vue')
    },
    {
        path:'/search',
        name:'search',
        component:()=>import('@/views/Search/Search.vue')
    },
    ...AppRoutes,
    ...LoginRoutes,
    ...OrderRoutes,
    ...ErrorRoutes,
    {
        path:'/:pathMatch(.*)',
        redirect:"/404"
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router;