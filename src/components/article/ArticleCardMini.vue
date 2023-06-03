<!-- 文章卡片缩小版 -->
<script setup>
import { useRouter } from 'vue-router';

// 应该接收数据
import { defineProps } from 'vue';
const props = defineProps({
    articleList: {
        type: Array,
        default: () => []
    }
});

// 发送参数给作者用户
const router = useRouter();
const jumpArticlePage = (aid) => {
    router.push({
        path: '/article/auart',
        query: {
            aid: aid
        }
    })
}


</script>

<template>
    <!-- 遍历文章 -->
    <div class="box-card" v-for="article in articleList" @click="jumpArticlePage(article.aid)">
        <el-text class="title">{{ article.title }}</el-text>
        <div>
        <el-text>{{ article.createTime }}</el-text></div>
    </div>
</template>

  
<style scoped>

.title {
    font-size: 14px;
    font-weight: bolder;
    margin-bottom: 10px;
    color: #3966d7;
    margin-right: 5px;
}

.box-card {
    width: 275px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
}
</style>
  