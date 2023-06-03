<!-- 此页面暂被废弃 -->
<script lang="ts" setup>
import { Upload } from '@element-plus/icons-vue'
import ArticleCardMini from '@/components/article/ArticleCardHot.vue';

// 接收参数

</script>
<!-- 暂被废弃 -->
<template>
    <el-card class="card">
        <el-row class="row">
            <el-col :span="4">
                <el-avatar> user </el-avatar>
            </el-col>
            <el-col :span="8">
                <el-text>用户昵称</el-text>
            </el-col>
            <el-col :span="10" class="row">
                <i class="iconfont icon-tubiaozhizuomoban-"></i>
                <el-text>发表文章数</el-text>
            </el-col>
        </el-row>
        <div style="margin-bottom: 10px;margin-top: 10px;">
            <el-text class="text">这个人很懒的没有留下足迹</el-text>
        </div>
        <!-- 标签栏 -->
        <div style="margin-bottom: 10px;">
            <el-text class="title">他的标签</el-text>
        </div>
        
        <div class="tagLine">
            <el-tag class="tag">Tag 1</el-tag>
            <el-tag class="tag" type="success">Tag 2</el-tag>
            <el-tag class="tag" type="info">Tag 3</el-tag>
            <el-tag class="tag" type="warning">Tag 4</el-tag>
            <el-tag class="tag" type="danger">Tag 5</el-tag>
        </div>
        <el-divider />
        <!-- 个人的小文章 -->
        <ArticleCardMini/>
        <div style="height: 10px;"></div>
        <div class="tagLine">
            <el-button type="primary">
                查看他的文章<el-icon class="el-icon--right">
                    <Upload />
                </el-icon>
            </el-button>
        </div>
    </el-card>
</template>
  

  
<style scoped>
.card{
    width: 360px;
}
.title {
    font-size: 14px;
    font-weight: bolder;
    color: #000;
    padding-left: 16px;
}

.text {
    font-size: 14px;
    color: #000;
    padding-left: 16px;
}

.iconfont {
    font-size: 25px;
}

.tagLine {
    margin-left: 16px;
    margin-bottom: 10px;
}

.tag {
    margin-right: 5px;
    margin-bottom: 5px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
  