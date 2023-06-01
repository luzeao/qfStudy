
<script lang="ts" setup>
import { ref } from 'vue';

const type = ref<string>('password')

const changeType = ()=>{
    type.value = type.value=='password'?'text':'password'
}

defineProps({
    name:{
        type:String,
        default:"password"
    },
    label:{
        type:String,
        default:'密码'
    },
    placeholder:{
        type:String,
        default:'请输入密码'
    },
    rules:Array 
})
</script>


<template>
    <van-field
        :type="type"
        :name="name"
        :label="label"
        :placeholder="placeholder"
        center
        clearable
        left-icon="warning-o"
        :right-icon="type=='password'?'closed-eye':'eye-o'"
        @click-right-icon="changeType"
        :rules="rules"
    />
</template>