<script  setup>
// 文章流组件
import ArticleCardFull from '@/components/article/ArticleCardFull.vue';
import { ref, onMounted } from 'vue';
import { getIndexTime } from '@/apis/home';

const articleList = ref([]);

onMounted(() => {
  // 从后端获取数据
  // getIndexTime().then(res => {
  //   articleList.value = res.data.page.list;
  //   console.log('首页返回数据',articleList.value);
  // });

  // 模拟的数据流
  articleList.value = [{
    aid: 1,
    author:"快乐星球",
    createTime:"2023-05-29T23:57:19",
    description:"介绍vue3的最新组合式语法",
    likeCount:1,
    pageView:24,
    status:true,
    tags:[],
    title:"vue3新增功能",
    type:"vue",
    uavator:"https://img0.baidu.com/it/u=1091210682,206783907&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684602000&t=1813754cb45a25a646263c4b3a711514",
    updateTime:"2023-06-02T11:53:17"
  }, {
    aid: 2,
    author:"快乐星球",
    createTime:"2023-05-29T23:57:19",
    description:"axios获取请求",
    likeCount:6,
    pageView:34,
    status:true,
    tags:[],
    title:"axios获取请求",
    type:"axios",
    uavator:"https://img0.baidu.com/it/u=1091210682,206783907&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684602000&t=1813754cb45a25a646263c4b3a711514",
    updateTime:"2023-06-02T11:53:17"
  }]
});

</script>

<template>
  <div>
    <ArticleCardFull :articleList="articleList" />
  </div>
</template>
