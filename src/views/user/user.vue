<template>
  <transition name="slideright">
    <div class="user imooc-container">
      <imooc-return></imooc-return>
      <div class="head">
        <!-- 头像 -->
        <span class="avatar icon-people">
          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span>
        </span>

        <!-- 账户名 -->
        <div class="username mt-10">{{ $store.state.userInfo.username }}</div>
      </div>

      <!-- 退出登录 -->
      <div class="btn logout-btn" @click="logout">登出</div>
    </div>
  </transition>
</template>

<script>
import back from "@/components/return";
export default {
  methods: {
    logout() {
      if (confirm("确定执行登出操作吗?")) {
        let userInfo = "";
        this.$storage.set("userInfo", "");
        this.$store.commit("set_userInfo", userInfo);
        window.location.href = "/";
      }
    }
  },
  components: {
    "imooc-return": back
  }
};
</script>

<style lang="scss" scoped>
.user {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background-color: #fff;
}
.head {
  padding: 5rem 0;
  text-align: center;
  .avatar {
    font-size: 6rem;
    width: 6rem;
  }
}
.logout-btn {
  width: 100%;
  text-align: center;
  color: #fff;
  height: 5rem;
  line-height: 5rem;
  background-color: #2b343b;
  margin-top: 4rem;
  border-radius: 0.4rem;
}
</style>

