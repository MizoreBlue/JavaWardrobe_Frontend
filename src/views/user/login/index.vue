<template>
    <div class="login_container">
        <div class="flex-center-wrapper">
            <el-row justify="center" align="middle" class="full-height-row">
                <el-col :span="12" :xs="20" :sm="16" :md="12" :lg="8" :xl="6">
                    <el-form class="login_form">
                        <h1>Hello</h1>
                        <h2>欢迎来到网上衣橱</h2>
                        <el-form-item>
                            <el-input placeholder="请输入用户名" :prefix-icon="User" v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input placeholder="请输入密码" :prefix-icon="Lock" v-model="loginForm.password" show-password
                                type="password">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button :loading="loading" type="primary" style="width: 100%;" @click="login()">
                                登录
                            </el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script setup lang="ts" name="userLogin">
// Elment Plus
import { Lock, User } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus';

import useUserStore from '@/store/modules/user';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

// pinia vue router
const userStore = useUserStore()
const $router = useRouter() //获得一个路由器

let loading = ref(false)
let loginForm = reactive({
    username: 'zhangsan',
    password: '123456'
})

let login = async () => {
    loading.value = true //登录效果
    try {
        // 发送一个登录请求
        await userStore.userLogin(loginForm)
        //登录成功
        ElNotification.success({
            type: 'success',
            message: '登录成功'
        })
        $router.push('/') //用户首页
        loading.value = false
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
    width: 100%;
    height: 100vh;
    background: url('') no-repeat;
    background-size: cover;
}

.flex-center-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

/* 可选：给表单容器一些样式 */
.full-height-row {
    width: 100%;
}

/* 表单样式 */
.login_form {
    padding: 40px;
    background: url('@/assets/images/login_form.png');
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
}

.login_form h1 {
    font-size: 30px;
    text-align: center;
    margin-bottom: 15px;
}

.login_form h2 {
    text-align: center;
    margin-bottom: 20px;
}

.login_form .el-form-item {
    margin-bottom: 24px;
    /* Element Plus 默认可能更小，可以微调 */
}

/* 仅针对登录页的 el-col 移除 padding */
.flex-center-wrapper ::v-deep .el-col {
    padding: 0;
}
</style>
