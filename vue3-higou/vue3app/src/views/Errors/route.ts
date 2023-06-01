


export const ErrorRoutes = [
    {
        path:'/503',
        name:'503',
        component:()=>import('./BadService.vue')
    },
    {
        path:'/404',
        name:'404',
        component:()=>import('./NotFound.vue')
    },
]