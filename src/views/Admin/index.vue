<!-- 管理员主页界面 -->
<script setup>
import AdminLeft from './components/left/AdminLeft.vue';
import LayoutFooter from '@/components/LayoutFooter.vue';
</script>

<template>
    <div class="common-layout">
        <el-container>
            <!-- 用户主页面 -->
            <el-main class="borderMain">
                <AdminLeft/>
                <!-- 三级路由出组件 -->
                <RouterView />
            </el-main>
        </el-container>
    </div>
    <LayoutFooter/>
</template>
<style scoped>
.borderMain {
    display: flex;
    border-color: rgba(218, 218, 218, 0);
    width: 100ch;
}
</style>