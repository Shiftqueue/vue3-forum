<!-- 页脚组件 -->
<script setup>
import { Sunrise } from '@element-plus/icons-vue'
</script>

<template>
  <div style="background-color: white;">
    <div style="height: 20px;"></div>
    <div class="footer">
      <el-space direction="vertical">
        <el-text>
          <el-icon><Sunrise /></el-icon>
          Forum
        </el-text>
        <el-row>
          <el-rate/>
        </el-row>
        <el-text>
          copyright © Forum 自由论坛
        </el-text>
      </el-space>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

