
import { createRouter , createWebHashHistory  } from 'vue-router'


const routes:any = [
    {
        path:'/',
        redirect:'/grade'
    },
    {
        path:'/grade',
        name:'grade',
        component:()=>import('../views/Grade/Grade.vue')
    },
    {
        path:'/data',
        name:'data',
        component:()=>import('../views/Grade/Data.vue')
    },
    {
        path:'/:pathMatch(.*)',
        redirect:"/grade"
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes, 
})


export default router 