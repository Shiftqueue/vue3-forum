<!-- 步骤一 -->
<script setup>
import { TopRight, MagicStick } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const nextStep=()=>{
  router.push({
    path: '/register/2'
  })
}
</script>

<template>
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <h1 style="margin-top: 70px;margin-bottom: 10px;">欢迎在此相聚</h1>
        <el-tag effect="dark" round type="success">步骤1 账户与密码</el-tag>
        <el-card class="box-card">
            <div class="card-header">
                <img style="height: 60px;" src="@/assets/imgs/login_mini.png">
            </div>
            <div>
                <!-- 账号 -->
                <el-input class="input" placeholder="创建你的账号名">
                    <template #prepend>
                        <el-icon>
                            <TopRight />
                        </el-icon>
                    </template>
                </el-input>
                <!-- 密码 -->
                <el-input class="input" show-password placeholder="设置你的密码">
                    <template #prepend>
                        <el-icon>
                            <TopRight />
                        </el-icon>
                    </template>
                </el-input>
                <!-- 验证码 -->
                <div style="margin-top: 5px;">
                    <el-input class="input-mini" placeholder="验证码">
                        <template #append>
                            <el-button @click="refreshCaptcha">刷新</el-button>
                        </template>
                    </el-input>
                    <!-- 验证码图片 -->
                    <img class="img" :src="captcha">
                </div>

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
    margin-top: 25px;
    height: 38px;
    width: 100%;
}

.input-mini {
    margin-top: 20px;
    height: 38px;
    width: 50%;
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