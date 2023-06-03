<!-- 文章详情页 -->
<script setup>
import ArticleLeft from './components/left/ArticleLeft.vue';
import ArticleMain from './components/main/ArticleMain.vue';
import ArticleLeftA from '@/views/Article/components/author/ArticleLeftA.vue'
import AuthorArticleMain from '@/views/Article/components/author/AuthorArticleMain.vue'
import LayoutFooter from '@/components/LayoutFooter.vue';

</script>

<template>
    <div style="height: 10px;"></div>
    <div style="display: flex;margin-bottom: 50px;align-items: center;justify-content: center;">
        <div>
            <RouterView />
        </div>
    </div>
    <LayoutFooter />
</template>
  
<style scoped>
.left {
    margin-left: 90px;
    margin-right: 10px;
    border-radius: 7px;
}
</style>