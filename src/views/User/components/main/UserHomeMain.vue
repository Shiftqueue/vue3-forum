<script setup>
import { getUserInfo } from '@/apis/user';
import { onMounted, ref } from "vue";
import { getUserTagList } from '@/apis/user';
// 用户信息表
let userData = ref([
  {
    uid: 0,
    nickname: '我在学pinia',
    account: '20230408',
    gender: 'man',
    age: '22',
    email: '2710740557@qq.com',
    mobile: '保密',
    description: '欢迎发邮件到我的信箱',
    avator: 'src/assets/imgs/uid2.png'
  }
]);

// 获取用户标签序列
const tags = ref([])
onMounted(() => {
  // 获取后台数据
  // getUserInfo().then(res => {
  //   userData.value = [res.data];
  //   console.log(userData.value[0]);
  // });
  // getUserTagList(userData.value[0].uid).then(res => {
  //   console.log('用户主页',res);
  //   tags.value=res.data.pageInfo.list
  // });
  tags.value = [
    {
      name: 'vue'
    },
    {
      name: 'axios'
    },
    {
      name: 'java'
    },
    {
      name: 'pinia'
    },
    {
      name: 'python'
    },
  ]
});
</script>

<template>
  <div>
    <el-text class="mainTitle">我的信息</el-text>
    <el-card class="box-card">
      <div class="card-header">
        <!-- 用户基础信息展示 -->
        <div>
          <!-- 用户图标与用户名 -->
          <img :src="userData[0].avator" class="img">
          <span>{{ userData[0].nickname }}</span>
        </div>
        <div>
          <span>我的标签: </span>
          <!-- 标签 -->
          <el-tag class="tag" v-for="tag in tags">{{ tag.name }}</el-tag>
        </div>
      </div>
      <!-- 展示简介 -->
      <div style="margin-top: 15px;margin-bottom: 10px;">
        <el-text class="title">我的简介:</el-text>
        <el-text class="text">{{ userData[0].description }}</el-text>
      </div>
      <!-- 展示基础资料 -->
      <div>
        <el-table :data="userData" style="width: 700px">
          <el-table-column prop="account" label="账户号" width="150" />
          <el-table-column prop="gender" label="性别" width="100" />
          <el-table-column prop="age" label="年龄" width="100" />
          <el-table-column prop="email" label="邮箱" width="200" />
          <el-table-column prop="mobile" label="电话" width="150" />
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.img {
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.mainTitle {
  margin-left: 30px;
  font-size: 18px;
  color: #000;
  font-weight: bolder;
}

.title {
  margin-left: 11px;
  font-size: 14px;
  font-weight: bolder;
}

.text {
  margin-left: 10px;
  font-size: 14px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tag {
  margin-right: 5px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-top: 20px;
  margin-left: 30px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 750px;
}
</style>
