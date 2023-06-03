<!-- 用户主页界面 -->
<script setup>
import UserHomeLeft from '@/views/User/components/left/UserHomeLeft.vue';
import LayoutFooter from '@/components/LayoutFooter.vue';
</script>

<template>
    <div class="borderMain">
        <div style="display: flex;margin-bottom: 50px;justify-content: center;">
            <!-- 用户主页面 -->
            <UserHomeLeft />
            <!-- 三级路由出组件 -->
            <RouterView />
        </div>
    </div>
    <LayoutFooter />
</template>
<style scoped>
.borderMain {
    margin-top: 20px;
}
</style>