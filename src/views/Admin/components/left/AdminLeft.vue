<!-- 用户主页左栏 -->
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'
// 导入图标
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    ChatLineSquare
} from '@element-plus/icons-vue'
// 使用路由
const router = useRouter();
// 监听按钮状态
const createArticle = () => {
    router.push({
        path: '/editor'
    })
}
// 修改资料
const jumpEmpty = () => {
    router.push({
        path: '/empty'
    })
}
// 用户主页
const jumpPanel = () => {
    router.push({
        path: '/admin/'
    })
}

// 跳转标签
const jumpContentment = () => {
    router.push({
        path: '/admin/contentment'
    })
}

// 跳转修改资料
const jumpProfile = () => {
    router.push({
        path: '/admin/profile'
    })
}

// 全部文章
const jumpArticle = () => {
    router.push({
        path: '/admin/article'
    })
}
</script>

<template>
    <div>
        <!-- 创建文章 -->
        <el-button type="success" @click="createArticle" style="margin-bottom: 15px;margin-left: 120px;">
            快速审核
        </el-button>
        <!-- 菜单组件 -->
        <el-menu class="el-menu-vertical-demo">
            <!-- 菜单1 -->
            <el-menu-item index="0" @click="jumpPanel">
                <el-icon><icon-menu /></el-icon>
                <template #title>管理员仪表盘</template>
            </el-menu-item>

            <!-- 菜单2 -->
            <el-sub-menu index="1">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>快速审核</span>
                </template>
                <el-menu-item-group>
                    <!-- <template #title><span>资料操作</span></template> -->
                    <el-menu-item index="2-1" @click="jumpArticle">审核文章</el-menu-item>
                    <el-menu-item index="2-2" @click="jumpContentment">审核评论</el-menu-item>
                </el-menu-item-group>
            </el-sub-menu>
            <!-- 菜单3 -->
            <el-menu-item index="2" @click="jumpProfile">
                <template #title>
                    <el-icon>
                        <location />
                    </el-icon>
                    <span>管理资料与密码</span>
                </template>
            </el-menu-item>
            <el-menu-item index="3" @click="jumpEmpty">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>设置</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>
  
  
<style>
/* 样式 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 350px;
    border-radius: 10px;
    margin-left: 120px;
}
</style>
  