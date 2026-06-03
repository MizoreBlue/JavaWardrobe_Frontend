<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到网上衣橱</h2>
          <el-form-item>
            <el-input placeholder="请输入用户名" :prefix-icon="User" v-model="loginForm.username"></el-input>
            <el-input placeholder="请输入密码" :prefix-icon="Lock" v-model="loginForm.password" show-password
              type="password">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" style="width: 100%;" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts" name="Login">
import { Lock, User } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus';
import axios from 'axios'
import { reactive, ref } from 'vue';

let loading = ref(false)
let loginForm = reactive({
  username: 'admin',
  password: '111111'
})

let login = async () => {
  try {
    // 发送一个登录请求
    const result = await axios.post('api/user/login', loginForm)
    console.log(result)
  } catch (error) {
    // 登录失败
    loading.value = false
    ElNotification.error({
      type: 'error',
      message: (error as Error).message
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  background: url('https://picsum.photos/1920/1080?random=1') no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  .login_form {
    background-color: aqua;
    background-size: cover;
    position: relative;
    top: 30vh;
    width: 80%;
    padding: 40px;

    h1 {
      font-size: 40px;
      color: white;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin: 20px 0;
    }
  }
}
</style>
