<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElButton } from 'element-plus'
import UserPassword from '@/views/User/components/left/UserPassword.vue'
// 侧栏是否打开
const visible = ref(false)
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()

// 表单数据
const ruleForm = reactive({
    nickname: '',
    gender: '',
    email: '',
    mobile: '',
    age: '',
    description: '',
    // 图像
    avator: '',
})
const password = ref('')
// 配置表单规则
const rules = reactive<FormRules>({
    // 用户昵称
    name: [
        { required: true, message: '请输入用户昵称', trigger: 'blur' },
        { min: 3, max: 15, message: '长度在 3 至 15', trigger: 'blur' },
    ],
    //邮箱
    email: [
        {
            required: true,
            message: '请输入邮箱',
            trigger: 'change',
        },
    ],
    //电话
    mobile: [
        {
            required: true,
            message: '请输入电话',
            trigger: 'change',
        },
    ],
    // 用户年龄
    age: [
        {
            required: true,
            message: '请输入年龄',
            trigger: 'change',
        },
    ],
    // 性别
    gender: [
        {
            required: true,
            message: '选择性别',
            trigger: 'change',
        },
    ],
    // 描述
    desc: [
        { required: true, message: '请输入描述', trigger: 'blur' },
    ],
})
// 判定验证是否通过
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>
  
<template>
    <div>
        <!-- 标题 -->
        <div>
            <el-text class="mainTitle">管理资料与密码</el-text>
        </div>
        <div style="display: flex;">
            <el-card shadow="hover" class="box-card">
                <!-- 用户资料表单 -->
                <div class="profile">
                    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="90px" label-position="left"
                        class="demo-ruleForm" :size="formSize" status-icon>
                        <el-form-item label="修改头像">
                            <el-avatar style="margin-right: 10px;margin-left: 8px;"> user </el-avatar>
                        </el-form-item>
                        <el-form-item label="用户昵称" prop="name">
                            <el-input class="input" v-model="ruleForm.nickname" />
                        </el-form-item>
                        <el-form-item label="邮箱" prop="email">
                            <el-input class="input-mini" v-model="ruleForm.email" />
                        </el-form-item>
                        <el-form-item label="电话" prop="mobile">
                            <el-input class="input-mini" v-model="ruleForm.mobile" />
                        </el-form-item>
                        <el-form-item label="年龄" prop="age">
                            <el-input class="input-mini" v-model="ruleForm.age" />
                        </el-form-item>

                        <el-form-item label="性别" prop="gender">
                            <el-radio-group v-model="ruleForm.gender">
                                <el-radio label="男" />
                                <el-radio label="女" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="用户描述" prop="desc">
                            <el-input v-model="ruleForm.description" type="textarea" />
                        </el-form-item>
                        <!-- 提交表单 -->
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(ruleFormRef)">
                                保存
                            </el-button>
                            <el-button type="danger" @click="resetForm(ruleFormRef)">清除</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
            <UserPassword/>
        </div>
    </div>
</template>
  
<style scoped>
.box-card {
    margin-top: 21px;
    margin-left: 20px;
    border-radius: 7px;
    width: 700px;
    padding-right: 30px;
}

.card {
    margin-top: 21px;
    margin-left: 20px;
    border-radius: 5px;
    width: 300px;
    height: 300px;
}

.input {
    width: 500px;
    height: 40px;
}

.input-mini {
    width: 250px;
    height: 40px;
}

.mainTitle {
    margin-left: 30px;
    font-size: 18px;
    color: #000;
    font-weight: bolder;
}

.profile {
    margin-left: 30px;
    margin-top: 20px;
}
</style>
