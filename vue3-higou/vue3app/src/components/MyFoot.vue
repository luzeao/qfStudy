

<script setup lang="ts">
import { ref } from 'vue';
const foots:Array<{
    path:string,
    name:string,
    icon:string,
    text:string, 
}> = [
    {
        path:'/home',
        name:'home',
        text:'首页',
        icon:'home-o'
    },
    {
        path:'/classify',
        name:'classify',
        text:'分类',
        icon:'apps-o'
    },
    {
        path:'/cart',
        name:'cart',
        text:'购物车',
        icon:'cart-o'
    },
    {
        path:'/mine',
        name:'mine',
        text:'我的',
        icon:'user-o'
    }
]
const active = ref()
</script>

<template>
    <van-tabbar v-model="active" route>
        <van-tabbar-item  replace  v-for="(item,index) in foots" :to="item.path" :key="index" :name="item.name" :icon="item.icon">{{ item.text }}</van-tabbar-item>
    </van-tabbar>
</template>