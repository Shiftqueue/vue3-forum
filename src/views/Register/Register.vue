<!-- 注册页面 -->
<script setup>
import LayoutFooter from '@/components/LayoutFooter.vue';
// 请校验用户是否已经注册
</script>

<template>
    <div class="center">
        <!-- 三级路由出组件 -->
        <RouterView />
    </div>
    <LayoutFooter />
</template>

<style scoped>
.center {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
}
</style>