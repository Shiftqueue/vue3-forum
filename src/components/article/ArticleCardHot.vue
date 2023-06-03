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

const router = useRouter();
const jumpArticlePage = (aid) => {
    router.push({
        path: '/article',
        query: {
            aid: aid
        }
    })
}


</script>

<template>
    <!-- 遍历文章 -->
    <div class="box-card" v-for="(article, index) in articleList" @click="jumpArticlePage(article.aid)">
        <p class="hot">{{ index + 1 }}</p>
        <el-text class="title">{{ article.title }}</el-text>
    </div>
</template>

  
<style scoped>
.hot {
    font-size: 10px;
    width: 15px;
    height: 15px;
    background-color: rgb(255, 94, 94);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    display: flex;
    color: white;
    margin-right: 5px;
}

.title {
    font-size: 14px;
    font-weight: bolder;
    margin-bottom: 10px;
}

.box-card {
    width: 275px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
}
</style>
  