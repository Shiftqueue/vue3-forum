<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <!-- 页头 -->
  <!-- 向页头传递用户信息 -->
  <LayoutHeader/>

  <!-- 二级路由出口 -->
  <RouterView />
</template>