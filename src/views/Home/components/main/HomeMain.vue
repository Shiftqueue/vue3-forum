<script setup>
import ArticleCardFull from '@/components/article/ArticleCardFull.vue';
import InfiniteArticle from './InfiniteArticle.vue';
</script>

<template>
  <el-tabs type="border-card">
    <el-tab-pane label="最新文章">
      这里是灵感来源与交流乐园
    </el-tab-pane>
    <el-tab-pane label="你的关注">
      你的兴趣所在
    </el-tab-pane>
  </el-tabs>
  <div style="height: 20px;"></div>
  <!-- 文章流 -->
  <InfiniteArticle />
  <div style="height: 15px;"></div>
</template>
  


  
