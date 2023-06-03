<!-- 普通文章详情页 -->
<script setup>
import { useRoute } from 'vue-router'
import ArticleComment from './ArticleComment.vue';
import ArticlePreview from '../../../../components/article/ArticlePreview.vue';
import { getHomeArticleDetails, getPublicContentment } from '@/apis/article.js'
import { onMounted, ref } from 'vue';

// 模拟文章数据
const article = ref({
    title: '前端vue入门(模拟数据 组件复用 :-))',
    content: '# Linux\n' +
        '***vue :*** [vue3](https://cn.vuejs.org/)\n' +
        '***CSDN :*** [CSDN官网](https://www.csdn.net/)\n' +
        '***LeetCode :*** [力扣刷题](https://leetcode.cn/problems/)\n' +
        '[linux](http://linux.vbird.org/linux_basic/)\n' +
        '懒得每一个都写不一样了🤣',
    tags: [{
        name: 'Linux',
    }, {
        name: '入门',
    }],
    // 开启文章评论
    commentabled: true
})
// 接收参数
const route = useRoute()
const contentment = ref([])
// 发送请求接收数据
onMounted: {
    //接收参数
    // getHomeArticleDetails(route.query.aid).then(res => {
    //     console.log('获取文章信息', res.data);
    //     article.value = res.data
    // });
    // 接收文章评论
    console.log(route.query.aid)
    // getPublicContentment(route.query.aid).then(res=>{
    //     console.log('文章评论',res)
    //     contentment.value=res.data
    // })

    // 模拟评论数据
    contentment.value = [{
        uid: 1,
        nickname: '我会用vue3',
        createTime: '2023-6-3 19:22',
        content: '我的 uid 是 \'1\' 😎与模拟 ( 这条评论我发的 ) 的一样,因此我会有 -删除- 按钮🐔',
        uavator: 'https://img0.baidu.com/it/u=1091210682,206783907&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684602000&t=1813754cb45a25a646263c4b3a711514',
        // 子评论
        subReply: [{
            uid: 2,
            nickname: '我在学pinia',
            createTime: '2023-6-4 12:32',
            content: '我的 uid 是 \'2\' 我来玩了🥳',
            uavator: 'src/assets/imgs/uid2.png'
        },
        {
            uid: 1,
            nickname: '我会用vue3',
            createTime: '2023-6-4 12:39',
            content: '我的 uid 是 \'1\' 欢迎欢迎 泰库辣🥳',
            uavator: 'https://img0.baidu.com/it/u=1091210682,206783907&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684602000&t=1813754cb45a25a646263c4b3a711514'
        }]
    }, {
        uid: 2,
        nickname: '我在学pinia',
        createTime: '2023-6-3 22:32',
        content: '我的 uid 是 \'2\' 我没有 -删除- 按钮🐔 因为上面的评论不是我发的',
        uavator: 'src/assets/imgs/uid2.png',
    },
    {
        uid: 2,
        nickname: '我在学pinia',
        createTime: '2023-6-3 22:32',
        content: '忘记告诉你们了！因为是模拟数据所以这些按钮也就成为摆设了😘',
        uavator: 'src/assets/imgs/uid2.png',
    }]
}

//判断权限
</script>

<template>
    <el-card class="card">
        <!-- 标签栏 -->
        <div style="margin-bottom: 10px;">
            <el-text class="title">{{ article.title }}</el-text>
        </div>
        <div class="tagLine">
            <el-text class="text">文章标签:</el-text>
            <el-tag class="tag" v-for="tag in article.tags">{{ tag.name }}</el-tag>
        </div>
        <ArticlePreview :content="article.content" />
    </el-card>
    <!-- 评论区 传入评论参数 -->
    <ArticleComment v-if="article.commentabled" :contentments="contentment" :aid="article.aid" />
</template>



<style scoped>
.card {
    width: 950px;
    border-radius: 9px;
}

.title {
    font-size: 24px;
    font-weight: bolder;
    color: #000;
    padding-left: 16px;
}

.text {
    font-size: 14px;
    color: #000;
    margin-right: 10px;
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
</style>