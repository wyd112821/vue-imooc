<template>
  <div class="index haspadding">
    <!-- 头部 -->
    <imooc-header></imooc-header>
    
    <!-- 子路由视图 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <!-- 下载慕课 -->
    <imooc-download></imooc-download>
  </div>
</template>

<script>
import header from "@/components/header";
import download from "@/components/download";
export default {
  components: {
    "imooc-header": header,
    "imooc-download": download
  }
};
</script>

<style lang="scss" scoped>
.index {
  min-height: 100vh;
  padding-top: 8rem;
  &.haspadding {
    padding-bottom: 5rem;
  }
}
</style>



