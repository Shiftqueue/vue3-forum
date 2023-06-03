<!-- 空页面 -->
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const backHome = () => {
    router.push({
        path: '/'
    })
}
</script>

<template>
    <el-empty class="body" description="正在开发">
        <el-button type="primary" @click="backHome">回到首页</el-button>
    </el-empty>
</template>

<style scoped>
.body {
    height: 100vh
}
</style>