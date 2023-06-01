import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

// 1. 全局的CSS
import './styles/index.scss'
import router from './router/router'

const app = createApp(App)

// 2. 路由
app.use(router)

// 3. 引入vant
import 'vant/lib/index.css';
import Vant from 'vant'
app.use(Vant)

// 4. 全局注册组件
import MyHead from '@/components/MyHead.vue'
app.component('MyHead',MyHead)
import MyBack from '@/components/MyBack.vue'
app.component('MyBack',MyBack)
import PassInput from '@/components/PassInput.vue'
app.component('PassInput',PassInput)


app.mount('#app')
