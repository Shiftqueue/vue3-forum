<!-- 编辑文章 -->
<script setup>
import { useRoute } from 'vue-router'
import LayoutFooter from '@/components/LayoutFooter.vue';
import { ref } from 'vue';

// 获取后端数据
import { addArticle, modifyArticle, getArticleDetails, getTypes } from '@/apis/article.js'


// 判断模式是什么 修改？新增？
const modify = ref(0)
// 显示后端参数信息
const msg = ref('这里显示警告信息')

const route = useRoute()
// 模拟文章数据
const article = ref({
    title: '前端vue入门(模拟数据 组件复用 :-))',
    content: '# Linux\n' +
        '***vue :*** [vue3](https://cn.vuejs.org/)\n' +
        '***CSDN :*** [CSDN官网](https://www.csdn.net/)\n' +
        '***LeetCode :*** [力扣刷题](https://leetcode.cn/problems/)\n' +
        '[linux](http://linux.vbird.org/linux_basic/)\n' +
        '懒得每一个都写不一样了🤣',
    description: 'vue3更简单了',
    tags: [{
        name: 'Linux',
    }, {
        name: '入门',
    }],
    // 开启文章评论
    commentabled: true,
    type: 'vue'
})

const articleSubmit = ref({
    aid: 0,
    content: '',
    description: '',
    title: '',
    tagIds: [],
    typeId: 0,
})

// 文章分类
const types = ref([{
    name: 'vue',
    tagId: 1
},
{
    name: 'axios',
    tagId: 2
},
{
    name: 'java',
    tagId: 3
},
{
    name: 'pinia',
    tagId: 4
},
{
    name: 'python',
    tagId: 5
},])

// 发送请求接收数据
onMounted: {
    modify.value = route.query.modify
    if (modify.value == 1) {
        // getArticleDetails(route.query.aid).then(res => {
        //     article.value = res.data
        //     console.log('获取文章', article.value);
        // });
        // articleSubmit.value.aid = article.value.aid
        // articleSubmit.value.content = article.value.content
        // articleSubmit.value.description = article.value.description
        // articleSubmit.value.title = article.value.title
    } else {
        article.value = {}
    }
    // 获取全部分类信息
    // getTypes().then(res => {
    //     console.log('全部分类', res);
    //     types.value = res.data
    // })

}

// 提交修改的数据
const put = () => {
    // articleSubmit.value.aid = article.value.aid
    // articleSubmit.value.content = article.value.content
    // articleSubmit.value.description = article.value.description
    // articleSubmit.value.title = article.value.title
    // modifyArticle(articleSubmit.value).then(res => {
    //     console.log('修改文章', res);
    //     msg.value = ''
    //     msg.value = res.msg
    // });
    alert('模拟保存修改')
}

// 新建数据提交
const add = () => {
    // articleSubmit.value.aid = article.value.aid
    // articleSubmit.value.content = article.value.content
    // articleSubmit.value.description = article.value.description
    // articleSubmit.value.title = article.value.title
    // addArticle(articleSubmit.value).then(res => {
    //     msg.value = ''
    //     msg.value = res.msg
    // })
    alert('模拟新增')
}
// 保存向后端发送数据
const save = () => {
    if (modify.value == 1) {
        put();
    } else {
        add();
    }
}

// 选择分类
const selectTag = (typeId, name) => {
    articleSubmit.value.typeId = typeId
    article.value.type = name
}
</script>

<template>
    <div class="center">
        <div style="margin-top: 20px;">
            <el-text class="title">文章标题</el-text>
            <el-input class="input" v-model="article.title" placeholder="在这里输入标题" />
            <el-text class="title">文章描述</el-text>
            <el-input class="input" v-model="article.description" placeholder="在这里输入文字" />

        </div>
        <div>
            <el-select v-model="article.type" placeholder="请选择文章分类">
                <el-option v-for="type in types" :value="type.name" @click="selectTag(type.typeId, type.name)">
                    {{ type.name }}
                </el-option>
            </el-select>

        </div>
        <el-text type="danger" style="margin-left: 15px;margin-top: 10px;">{{ msg }}</el-text>
        <div style="width: 1200px;margin-top: 10px;">
            <v-md-editor v-model="article.content" @save="save" height="100vh"
                placeholder="使用md格式即可轻松编辑文本 :-) "></v-md-editor>
        </div>
    </div>
    <LayoutFooter />
</template>

<style scoped>
.tag {
    margin-right: 5px;
}

.title {
    font-size: 14px;
    font-weight: bolder;
}

.input {
    margin-top: 10px;
    margin-bottom: 10px;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
</style>