<style lang="less">
  @import './login.less';
</style>

<template>
  <div class="login">
    <div style="width:1220px;height:720px; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto;">
      <img v-show=showStartGif src="~@/assets/dpic/loading.gif" alt="规划设计智能管理平台">
      <div  v-show=!showStartGif class="login-back">
        <input id="accountInput" v-model="account" style="width:145px;height:24px;position:absolute;left:587px;top:339px;border:0px;background:rgba(0, 0, 0, 0);color:white;" />
        <input id="passwordInput" v-model="password" type="password" style="width:145px;height:24px;position:absolute;left:587px;top:427px;border:0px;background:rgba(0, 0, 0, 0);color:white;" />
        <span style="position:absolute;left:650px;top:470px;color:white;">用户注册</span>
        <span style="position:absolute;left:710px;top:470px;color:white;">忘记密码</span>
        <div class="login-btn" @click="login">登 录</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      showStartGif: true,
      account: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    login () {
      let userName = this.account
      let password = this.password
      this.handleLogin({ userName: userName, password: password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: 'home'
          })
        })
      })
    }
  },
  mounted: function () {
    setTimeout(() => {
      this.showStartGif = false
    }, 3000)
  }
}
</script>

<style>

</style>
