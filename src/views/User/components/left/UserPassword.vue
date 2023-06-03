<script setup>
import { InfoFilled } from '@element-plus/icons-vue'
import { ref } from 'vue';
const oldpwd = ref('')
const newpwd = ref('')
</script>

<template>
    <div>
        <el-card shadow="hover" class="collapse">
            <el-collapse accordion>
                <el-collapse-item name="1">
                    <template #title>
                        修改密码
                    </template>
                    <div>
                        <el-input class="input" v-model="password" type="oldpwd" placeholder="输入旧密码" show-password />
                    </div>
                    <div style="margin-top: 20px;">
                        <el-input class="input" v-model="password" type="newpwd" placeholder="输入新密码" show-password />
                    </div>
                    <div style="margin-top: 20px;">
                        <el-button type="primary" @click="createArticle" style="margin-bottom: 15px;">
                            提交
                        </el-button>
                    </div>
                </el-collapse-item>
            </el-collapse></el-card>
    </div>
</template>

<style scoped>
.input {
    height: 35px;
}

.collapse {
    margin-left: 20px;
    margin-top: 21px;
    width: 300px;
    border-radius: 7px;
}
</style>
  

  