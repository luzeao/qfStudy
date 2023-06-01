

export const LoginRoutes = [
    {
        path:'/login',
        name:'login',
        meta:{
            islive:true
        },
        component:()=>import('./Login.vue')
    },
    {
        path:'/reg',
        name:'reg',
        meta:{
            islive:true
        },
        component:()=>import('./Reg.vue')
    },
    {
        path:'/findpass',
        name:'findpass',
        meta:{
            islive:true
        },
        component:()=>import('./FindPass.vue')
    },
]