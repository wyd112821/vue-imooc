<template>
  <div class="login">
    <imooc-return></imooc-return>
    <div class="title">{{ title }}</div>
    <!-- 注册面板 -->
    <div class="form-wrapper register-wrapper" v-show="state == 1">
      <div class="input-line">
        <input type="text" placeholder="手机号" v-model="phone" pattern="\d*" @keydown.enter="register">
      </div>
      <div class="input-line">
        <input type="text" placeholder="请输入验证码" v-model="smscode" pattern="\d*" @keydown.enter="register">
      </div>
      <div class="btn register-btn" @click="register">下一步</div>
    </div>
    <!-- 登录面板 -->
    <div class="form-wrapper register-wrapper" v-show="state == 2">
      <div class="input-line">
        <input type="text" placeholder="手机号/邮箱" v-model="username" @keydown.enter="login">
      </div>
      <div class="input-line">
        <input type="password" placeholder="密码" v-model="password" @keydown.enter="login">
      </div>
      <div class="btn register-btn" @click="login">登录</div>
    </div>
    <p class="agreement text-center mt-10">登录/注册即视为同意<a href="https://www.baidu.com" class="cr-main">慕课网注册协议</a></p>
    <p class="forget text-center" v-show="state == 2">忘记密码</p>
    <p class="to-login text-center" v-show="state == 1" @click="state = 2">已有慕课网账号？去登录</p>
    <p class="to-login text-center" v-show="state == 2" @click="state = 1">没有账号，去注册</p>
  </div>
</template>

<script>
import back from "@/components/return";
export default {
  data() {
    return {
      state: 2,
      phone: "",
      smscode: "",
      username: "13192733603",
      password: "123456",
      preg: /^[1][3,4,5,7,8][0-9]{9}$/,
      ereg: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
    };
  },
  methods: {
    register() {
      if (!this.phone) {
        this.$toast.show("请输入你的手机号");
        return false;
      } else if (!this.preg.test(this.phone)) {
        this.$toast.show("请输入正确的手机号");
        return false;
      } else if (!this.smscode) {
        this.$toast.show("请输入你的验证码");
        return false;
      }
      this.$toast.show("注册成功");
    },
    login() {
      if (!this.username) {
        this.$toast.show("请输入你的手机/邮箱");
        return false;
      } else if (
        !(this.ereg.test(this.username) || this.preg.test(this.username))
      ) {
        this.$toast.show("请输入正确的手机/邮箱");
        return false;
      } else if (!this.password) {
        this.$toast.show("请输入你的密码");
        return false;
      }
      this.$toast.show("登录成功");
      this.setUserInfo();
    },
    setUserInfo() {
      let userInfo = {
        id: 1,
        username: this.username
      };
      this.$storage.set("userInfo", userInfo);
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  },
  computed: {
    title() {
      return this.state == 1 ? "注册" : "登录";
    }
  },
  components: {
    "imooc-return": back
  }
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/theme.scss";
.login {
  height: 100vh;
  padding: 6rem 3rem 2rem;
  overflow: hidden;
  .title {
    font-size: 2.6rem;
    text-align: center;
  }
  .form-wrapper {
    margin-top: 2rem;
    .input-line {
      input {
        width: 100%;
        border-bottom: 0.1rem solid #ebebeb;
        padding: 2rem 0;
        caret-color: $main;
      }
    }
    .btn {
      width: 100%;
      text-align: center;
      color: #fff;
      height: 5rem;
      line-height: 5rem;
      background-color: #2b343b;
      // background-color: $main;
      margin-top: 4rem;
      border-radius: 0.4rem;
    }
  }
  .forget,
  .to-login {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
  .to-login {
    position: absolute;
    width: 100%;
    bottom: 4rem;
    left: 0;
  }
}
</style>
