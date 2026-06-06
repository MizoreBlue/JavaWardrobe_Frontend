<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="LoginForms">
          <h1>Hello</h1>
          <h2>网上衣橱管理后台</h2>
          <el-form-item prop="username">
            <el-input placeholder="请输入用户名" :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input placeholder="请输入密码" :prefix-icon="Lock" v-model="loginForm.password" show-password
              type="password">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" style="width: 100%" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts" name="adminLogin">
// element plus 组件
import { Loading, Lock, User } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'

// vue 路由 pinia
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { reactive, ref } from 'vue'
import { getTime } from '@/utils/time'

const userStore = useUserStore()
const $router = useRouter()
//表单校验规则
const usernameValidator = (rule: any, value: any, callback: any) => {
  if (value.length < 5) {
    callback(new Error('用户名不能小于5位'))
  } else callback()
}
const passwordValidator = (rule: any, value: any, callback: any) => {
  if (value.length < 6) {
    callback(new Error('密码不能小于6位'))
  } else callback()
}
const LoginForms = ref()
const rules = {
  username: { trigger: 'change', validator: usernameValidator },
  password: { trigger: 'change', validator: passwordValidator },
}


let loading = ref(false)
let loginForm = reactive({
  username: 'admin',
  password: '111111',
})




let login = async () => {
  await LoginForms.value.validate() //用于表单校验，返回一个Promise对象
  loading.value = true
  try {
    // 发送一个登录请求
    await userStore.userLogin(loginForm)
    // 登录成功
    ElNotification.success({
      type: 'success',
      message: '欢迎回来',
      title: `Hi,${getTime()}好`
    })
    // 登录成功，跳转到管理员首页
    $router.push('/admin/')
    // 关闭按钮加载效果
    Loading.value = false
  } catch (error) {
    // 登录失败
    loading.value = false
    ElNotification.error({
      type: 'error',
      message: (error as Error).message,
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
    background: url('@/assets/images/login_form.png') no-repeat;
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
