

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

</script>


<template>
    <div>
        <MyHead title="搜索">
            <van-icon name="revoke" size="18" color="#f50" @click="router.go(-1)"  />
        </MyHead>
       

    </div>
</template>