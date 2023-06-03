<!-- 搜索界面 -->
<script setup>
import { Search } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router';
import LayoutFooter from '@/components/LayoutFooter.vue';
import { getSearch } from '@/apis/search';
import { onMounted, ref } from 'vue'
import ArticleCardFull from '@/components/article/ArticleCardFull.vue';
const route = useRoute()

// 文章列表
const articleList = ref([]);
const queryData = ref({
    query: '',
    status: false,
    type: ''
})

onMounted: {
    queryData.value.query = route.query.para
    // getSearch(queryData.value).then(res => {
    //     console.log('搜索结果', res.data.pageInfo.list);
    //     articleList.value = res.data.pageInfo.list;
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
}

// 启动搜索
const startSearch = () => {
    // console.log('查询条件', queryData.value);
    // getSearch(queryData.value).then(res => {
    //     console.log('搜索结果', res.data.pageInfo.list);
    //     articleList.value = res.data.pageInfo.list;
    // });
    alert('模拟搜索')
}

</script>

<template>
    <div style="align-items: center;justify-content: center;background-color: white;">
        <div style="background-color: white;height: 100px;"></div>
        <div style="display: flex;align-items: center;justify-content: center;">
            <el-input placeholder="键入内容以搜索" class="search" v-model="queryData.query"></el-input>
            <!-- 搜索按钮 -->
            <el-button type="primary" size="large" @click="startSearch">搜索
                <el-icon style="margin-left: 10px;" size="20">
                    <Search />
                </el-icon>
            </el-button>
        </div>
        <div style="display: flex;align-items: center;justify-content: center;">
            <!-- 搜索分类 -->
            <el-tabs type="border-card" class="type">
                <el-tab-pane label="文章">
                    <div>
                        <!-- 显示文章 -->
                        <ArticleCardFull :articleList="articleList" />
                    </div>
                </el-tab-pane>
                <el-tab-pane label="用户">正在开发</el-tab-pane>
                <!-- <el-tab-pane label="分类">Role</el-tab-pane> -->
            </el-tabs>
        </div>
    </div>
    <LayoutFooter />
</template>

<style scoped>
.search {
    width: 700px;
    height: 42px;
    margin-right: 10px;
}

.type {
    margin-top: 20px;
    width: 850px;
    margin-bottom: 100px;
}
</style>