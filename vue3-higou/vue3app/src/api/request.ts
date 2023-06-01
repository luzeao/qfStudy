

import axios from 'axios'

export const baseURL = 'http://116.62.165.233:3000/';
const request = axios.create({
    baseURL:baseURL,
    timeout:60000, 
    headers:{

    }
})

// 请求拦截器
request.interceptors.request.use((req)=>{
    // 设置请求头 
    return req; 
},err=>{

})


// 响应拦截器
request.interceptors.response.use((res)=>{
    console.log(res.data)
    return res.data 
},err=>{

})

export default request;