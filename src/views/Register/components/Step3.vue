<!-- 步骤三 -->
<script setup>
// 应当判断1，2步是否完成
import { useRouter } from 'vue-router';
const router = useRouter();

const jumpProfile = () => {
    router.push({
        path: '/userHome/profile'
    })
}

const jumpLogin = () => {
    router.push({
        path: '/login'
    })
}

</script>

<template>
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <h1 style="margin-top: 170px;margin-bottom: 10px;">你已完成注册！欢迎加入我们的乐园</h1>
        <el-tag effect="dark" round type="success">完成</el-tag>
        <el-row style="margin-top: 100px;margin-bottom: 50px;">
            <el-button size="large" @click="jumpProfile">完善资料</el-button>
            <el-button size="large" @click="jumpLogin">登录</el-button>
        </el-row>
    </div>
</template>

<style scoped></style>