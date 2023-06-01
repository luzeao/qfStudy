
import request  from './request'


export const docheckphone = (tel:string) => request({
    method:"POST",
    data:{
        tel
    },
    url:'/api/user/docheckphone'
})


export const dosendmsgcode = (tel:string) => request.post('/api/user/dosendmsgcode',{
    tel
})


export const docheckcode = (data:userTypes) => request.post('/api/user/docheckcode',data)

export const dofinishregister = (data:userTypes) => request.post('/api/user/dofinishregister',data)