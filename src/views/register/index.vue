<template>
  <div class="register-container">
    <el-form ref="registerForm" :model="registerForm" :rules="registerRules" class="register-form" label-position="left">
      <div class="title-container">
        <h3 class="title">Register Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="registerForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          ref="password"
          v-model="registerForm.password"
          placeholder="Password"
          name="password"
          type="password"
          tabindex="2"
        />
      </el-form-item>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleRegister"
      >Register</el-button>

      <div class="tips">
        <span>Already have an account? <router-link to="/login">Login</router-link></span>
      </div>

      <el-alert
        :show="registerStatus !== null"
        :title="registerStatus"
        :type="registerStatusType"
        closable
        @close="registerStatus = null"
      />

    </el-form>
  </div>
</template>

<script>
import { registerMember } from '@/api/register'
export default {
  name: 'Register',
  data() {
    const validateUsername = (rule, value, callback) => {
      // 添加用户名验证规则
      // ...
    }
    const validatePassword = (rule, value, callback) => {
      // 添加密码验证规则
      // ...
    }

    return {
      registerStatus: null, // 注册状态信息
      registerStatusType: '', // 注册状态的类型，可以是'success'或'error'
      registerForm: {
        username: '',
        password: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false
    }
  },
  methods: {
    handleRegister() {
      this.$router.push('/login')

      registerMember(this.registerForm).then((res) => {
        // console.log('注册成功1', res.data)
        this.registerStatus = 'Registration successful' // 设置成功消息
        this.registerStatusType = 'success' // 设置成功消息类型
        // // 跳转到登录页面
        this.$router.push('/login')
      })
        .catch((error) => {
          // console.log('注册成功2', typeof (res.data))
          this.registerStatus = 'Registration failed' // 设置失败消息
          this.registerStatusType = 'error' // 设置失败消息类型
          console.error(error)
        })
    }

  }
}
</script>

<style scoped>
/* 添加样式以美化页面 */
.register-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  margin-top: 150px;
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
}

.svg-container {
  display: inline-block;
  margin-right: 10px;
}

.tips {
  text-align: center;
  margin-top: 20px;
}
</style>
