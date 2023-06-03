<!-- 加载组件 -->
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const openFullScreen = () => {
    router.push({
        path: '/'
    })
}
openFullScreen()
</script>

<template></template>
  

  