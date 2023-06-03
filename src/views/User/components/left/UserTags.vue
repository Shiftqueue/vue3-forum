<!-- 对标签进行增删改查 -->
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { getUserTagList, updateTagName, deleteTag, postNewTag } from '@/apis/user';
// 数据
const tagsData = ref([]);
let loadTagsData = ref()
// 接收回传信息
const msg = ref('')
onMounted: {
  // 加载参数
  // loadTagsData = async () => {
  //   const res = await getUserTagList();
  //   tagsData.value = res.data.pageInfo.list;
  // };
  // loadTagsData();

  // 模拟数据
  tagsData.value = [{
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
  },]
}

// 编辑
const editedTag = ref({
  tagId: 0,
  name: ''
});

// 是否启动编辑栏
const edit = ref({
  tag: 0,
  status: false
})

// 开启编辑
const openEdit = (tagId) => {
  edit.value.status = true;
  edit.value.tag = tagId
}

//新增标签
const addNewTag = () => {
  let tag = ref({
    name: editedTag.value.name
  })
  // postNewTag(tag.value).then((res) => {
  //   console.log(res);
  //   msg.value = ''
  //   msg.value = res.msg
  //   loadTagsData();
  // })
  alert('模拟新增')
}

// 提交修改
const handleSubmit = (tagId) => {
  edit.value.status = false
  editedTag.value.tagId = tagId
  // updateTagName(editedTag.value).then((res) => {

  //   msg.value = ''
  //   msg.value = res.msg
  //   loadTagsData();
  // })
  alert('模拟修改')
};

// 删除标签
const handleDelete = (tagId) => {
  // deleteTag(tagId).then((res) => {
  //   msg.value = ''
  //   msg.value = res.msg
  //   loadTagsData();
  // })
  alert('模拟删除')
};

</script>

<template>
  <div>
    <el-text class="mainTitle">我的标签</el-text>
    <el-card shadow="hover" class="collapse">
      <!-- 提示信息 -->
      <el-text type="danger" class="center">{{ msg }}</el-text>
      <!-- 新增标签 -->
      <div class="center">
        <el-input v-model="editedTag.name" placeholder="在这里输入名字" class="input" />
        <el-button type="success" @click="addNewTag()">新增</el-button>
      </div>
      <!-- 遍历信息 -->
      <div v-for="(tag, index) in tagsData" style="margin-top: 10px;">
        <div class="center">
          <el-text>序号:{{ index + 1 }}</el-text>
          <el-tag class="tag">{{ tag.name }}</el-tag>
          <div class="flex-grow" />
          <!-- 删除与编辑 -->
          <el-button style="margin-left: 5px;" @click="handleDelete(tag.tagId)" text>删除</el-button>
          <el-button @click="openEdit(tag.tagId)" text>编辑</el-button>
        </div><!-- 编辑框 -->
        <div v-if="edit.status && tag.tagId === edit.tag" style="margin-top: 10px;">
          <div class="center">
            <el-input v-model="editedTag.name" placeholder="在这里输入新的名字" class="input" />
            <el-button type="primary" @click="handleSubmit(tag.tagId)">确定</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mainTitle {
  margin-left: 30px;
  font-size: 18px;
  color: #000;
  font-weight: bolder;
}

.input {
  margin-right: 10px;
  height: 33px;
}

.collapse {
  margin-left: 20px;
  margin-top: 21px;
  width: 750px;
  border-radius: 7px;
}

.title {
  margin-left: 11px;
  font-size: 14px;
  font-weight: bolder;
}

.tag {
  margin-left: 30px;
  margin-right: 5px;
}
</style>
