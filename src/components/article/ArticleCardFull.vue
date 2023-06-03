<!-- 文章卡片 -->
<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps({
  author: {
    type: Number,
    required: true
  },
  articleList: {
    type: Array,
    default: () => []
  }
});

const router = useRouter();
// 在此处设计携带aid跳转
const jumpDetailsPage = (aid) => {
  console.log('跳转');
  if (props.author == 1) {
    router.push({
      path: '/article/auart',
      query: {
        aid: aid
      }
    })
  } else {
    router.push({
      path: '/article',
      query: {
        aid: aid
      }
    })
  }
}

</script>

<template>
  <div class="body" v-for="article in articleList" @click="jumpDetailsPage(article.aid)">
    <!-- 第一栏 包含用户 时间 标签 -->
    <el-row class="row">
      <el-col :span="4">
        <img :src="article.uavator" style="height: 30px;border-radius: 50%;margin-right:15px;" />{{ article.author }}
      </el-col>
      <el-col :span="8">
        <el-text>{{ article.updateTime }}</el-text>
      </el-col>
      <el-col :span="12">
        <el-text style="margin-right: 10px;">分类:</el-text>
        <el-tag class="tag">{{ article.type }}</el-tag>
      </el-col>
    </el-row>
    <div style="height: 10px;"></div>
    <!-- 第二栏 卡片 -->
    <el-card class="box-card">

      <!-- 卡片头 -->
      <el-row>
        <el-col :span="20">
          <div><el-text class="title">{{ article.title }}</el-text></div>
          <div style="margin-top: 10px;"><el-text class="text">{{ article.description }}</el-text></div>
          <div style="height: 15px;"></div>
          <el-row class="row">
            <el-col :span="10">
              <!-- 点赞 浏览 评论 -->
              <el-row class="row">
                <el-col :span="8">
                  <div class="icon"><i class="iconfont icon-dianzan"></i>{{ article.likeCount }}</div>
                </el-col>
                <el-col :span="8">
                  <div class="icon"><i class="iconfont icon-browse"></i>{{ article.pageView }}</div>
                </el-col>
                <el-col :span="8">
                  <div class="icon"><i class="iconfont icon-pinglun"></i>评论</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="14">
              <el-text style="margin-right: 10px;">tags:</el-text>
              <el-tag class="tag" v-for="tag in article.tags">{{ tag.name }}</el-tag>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="4">
          <div>
            <img :src="article.coverImg" style="height: 120px;border-radius: 7px;" />
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.body {
  margin-top: 10px;
  margin-bottom: 5px;
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 14px;
  font-weight: bolder;
}

.text {
  font-size: 14px;
}

.tag {
  margin-right: 5px;
}

.icon {
  font-size: 13px;
  margin-right: 35px;
}

.box-card {
  width: 100%;
  margin-left: 0%;
  border-radius: 6px;
}
</style>
