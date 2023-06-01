

<script setup lang="ts">
import { computed, reactive , ref  } from "vue"
import {reg } from '@/utils/validate'
import { showToast , showFailToast} from 'vant';
import { docheckphone, dosendmsgcode , docheckcode , dofinishregister  } from '@/api/user'
import { useCountDown } from '@vant/use';
import { useRouter } from "vue-router";

const router = useRouter()
const toggle = ref<boolean>(true)
const total:number = 120;
const form = reactive<userTypes>({

})

// 倒计时的数值 
const countDown = useCountDown({
    time: 1000*total ,
    millisecond: false,
    onFinish:()=>{
        countDown.reset() // 重置倒计时
        toggle.value = true;
        
    }
});




const disabled = computed(()=>{
    return !reg.phone.test(form.tel)
})

// 发送验证码
const todoSentCaptcha = async ()=>{
    // 先检查手机号是否被注册
    let res = await docheckphone(form.tel) as any;
    if(res.code=='200'){
        // 发送验证码 
        let result = await dosendmsgcode(form.tel) as any;
        if(result.code=='200'){
            showToast('当前的短信验证码是 ' + result.data)
            // 开始倒计时 
            countDown.start()
            toggle.value = false;
        }else{
            showFailToast('发送失败')
        }
    }else{
        showToast(res.message)
    }
}
// 校验成功
const submitForm = async (value:userTypes)=>{
    console.log(value)
    if(value.password!=value.dbpass){
        showToast('两次密码不一样')
    }else{
        // 注册
        // 先校验验证码
        let res:any = await docheckcode({
            tel:form.tel,
            telcode:form.telcode,
        }) 
        if(res.code=='200'){
            // 注册
            let result:any = await dofinishregister({
                tel:value.tel,
                password:value.password,
            })
            if(result.code=='200'){
                router.push('/login')
            }else{
                showToast(result.message)
            }
        }else{
            showToast(res.message)
        }
    }
}

// 校验失败 
const failed = ()=>{
    // showToast('校验失败')
    showFailToast('校验失败')
}
</script>

<template>
    <div>
        <MyHead title="注册"></MyHead>
        <div class="regbox">
            <van-form 
                @submit="submitForm"
                @failed="failed"
            >
                <van-field
                    v-model="form.tel"
                    name="tel"
                    label="手机号"
                    placeholder="请输入手机号"
                    center
                    clearable
                    :rules="[{ 
                        required:true,
                        message:'手机号不能为空'
                    },{
                        pattern:reg.phone,
                        message:'手机号格式不正确'
                    }]"
                    left-icon="phone-o"
                />
                <van-field
                    v-model="form.telcode"
                    name="telcode"
                    center
                    clearable
                    label="验证码"
                    placeholder="请输入验证码"
                    left-icon="apps-o"
                    :rules="[{ 
                        required:true,
                        message:'验证码不能为空'
                    },{
                        pattern:reg.code,
                        message:'验证码格式不正确'
                    }]"
                >
                    <template #button>
                        <van-button v-if="toggle" @click="todoSentCaptcha" :disabled="disabled" size="small" type="primary">发送验证码</van-button>
                        <van-button v-else disabled  size="small" type="warning">剩余 {{ Math.floor(countDown.current.value.total/1000)  }} S</van-button>
                    </template>
                </van-field>

                <PassInput 
                    v-model="form.password"
                    name="password"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ 
                        required:true,
                        message:'密码不能为空'
                    },{
                        pattern:reg.pwd,
                        message:'密码格式不正确(6-16位数字加字母)'
                    }]"
                    
                    
                ></PassInput>
                <PassInput 
                    v-model="form.dbpass" 
                    name="dbpass"
                    label="确认密码"
                    placeholder="请输入确认密码"
                    :rules="[{ 
                        required:true,
                        message:'密码不能为空'
                    },{
                        pattern:reg.pwd,
                        message:'密码格式不正确(6-16位数字加字母)'
                    }]"
                ></PassInput>
                <div class="links">
                    <router-link to="/login">去登录</router-link>
                </div>

                <div>
                    <van-button  block round type="primary" native-type="submit" >注册</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>


<style scoped>
.regbox{
    padding:15px;
}

.links{
    margin:15px;
}
</style>