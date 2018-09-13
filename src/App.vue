<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <imooc-toast></imooc-toast>
  </div>
</template>

<script>
import toast from "@/components/toast.vue";
export default {
  name: "App",
  created() {
    this.getUserInfo();
    this.getShopCartInfo();
  },
  methods: {
    getUserInfo() {
      let userInfo = this.$storage.get("userInfo") || null;
      if (userInfo) {
        userInfo = JSON.parse(userInfo);
      }
      this.$store.commit("set_userInfo", userInfo);
      console.log(this.$store.state.userInfo);
    },
    getShopCartInfo() {
      let shopCartInfo = this.$storage.get("shopCartInfo") || null;
      if (shopCartInfo) {
        shopCartInfo = JSON.parse(shopCartInfo);
      }
      this.$store.commit("set_shopCartInfo", shopCartInfo);
      console.log(this.$store.state.shopCartInfo);
    }
  },
  components: {
    "imooc-toast": toast
  }
};
</script>

<style lang="scss">
@import "@/public/stylesheets/main.scss";
</style>

