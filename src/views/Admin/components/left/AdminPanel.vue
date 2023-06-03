<!-- 管理员仪表盘 -->
<script setup>
const colors = [
    { color: '#f56c6c', percentage: 40 },
    { color: '#e6a23c', percentage: 80 },
    { color: '#5cb87a', percentage: 100 },
]
</script>

<template>
    <div>
        <div>
            <el-text class="mainTitle">管理员仪表盘</el-text>
        </div>
        
        <el-card shadow="never" class="boxcard">
            <!-- 仪表盘 -->
            <div style="display: flex;align-items: center;justify-content: center;">
                <el-progress type="dashboard" :percentage="20" :color="colors" :stroke-width="10">
                    <template #default="{ percentage }">
                        <span class="percentage-value">{{ percentage }}%</span>
                        <span class="percentage-label">文章审核进度</span>
                    </template>
                </el-progress>
                <div style="width: 100px;"></div>
                <el-progress type="dashboard" :percentage="80" :color="colors" :stroke-width="10">
                    <template #default="{ percentage }">
                        <span class="percentage-value">{{ percentage }}%</span>
                        <span class="percentage-label">评论审核进度</span>
                    </template>
                </el-progress>
                <div style="width: 100px;"></div>
                <el-progress type="dashboard" :percentage="60" :color="colors" :stroke-width="10">
                    <template #default="{ percentage }">
                        <span class="percentage-value">{{ percentage }}%</span>
                        <span class="percentage-label">综合审核进度</span>
                    </template>
                </el-progress>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.boxcard {
    margin-top: 20px;
    margin-left: 30px;
    border-radius: 7px;
    margin-bottom: 20px;
    width: 800px
}

.mainTitle {
    margin-left: 30px;
    font-size: 18px;
    color: #000;
    font-weight: bolder;
}

.percentage-value {
    display: block;
    margin-top: 10px;
    font-size: 28px;
}

.percentage-label {
    display: block;
    margin-top: 10px;
    font-size: 12px;
}
</style>