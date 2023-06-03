<!-- 步骤2 -->
<script setup>
import { TopRight, MagicStick } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const nextStep = () => {
    router.push({
        path: '/register/3'
    })
}


</script>

<template>
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <h1 style="margin-top: 70px;margin-bottom: 10px;">增进彼此了解</h1>
        <el-tag effect="dark" round type="success">步骤2 联系方式</el-tag>
        <el-card class="box-card">
            <div class="card-header">
                <img style="height: 60px;" src="@/assets/imgs/login_mini.png">
            </div>
            <div style="margin-top: 30px;">
                <el-text>你的邮箱</el-text>
                <el-input class="input" placeholder="设置邮箱">
                    <template #prepend>
                        <el-icon>
                            <TopRight />
                        </el-icon>
                    </template>
                </el-input>
                <el-text>你的电话</el-text>
                <el-input class="input" show-password placeholder="设置电话">
                    <template #prepend>
                        <el-icon>
                            <TopRight />
                        </el-icon>
                    </template>
                </el-input>

                <!-- 下一步 -->
                <div style="text-align:center;margin-top: 40px;">
                    <el-button-group>
                        <el-button type="primary" @click="nextStep" size="large">下一步
                            <el-icon style="margin-left: 10px;" size="20">
                                <MagicStick />
                            </el-icon>
                        </el-button>
                    </el-button-group>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style scoped>
.input {
    margin-top: 5px;
    height: 38px;
    width: 100%;
    margin-bottom: 20px;
}

.img {
    height: 50px;
    margin-top: 20px;
    margin-left: 10px;
}

.card-header {
    display: flex;
    justify-content: center;
    align-items: center;
}


.box-card {
    margin-top: 10px;
    margin-left: 0;
    width: 340px;
    height: 410px;
    border-radius: 15px;
}
</style>