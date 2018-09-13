<template>
  <div class="footer download imooc-flex imooc-flex-between" v-if="isshow">
    <div class="info imooc-flex">
      <div class="icon">
      <img src="@/public/images/logo-small.png">
    </div>
    <div class="tips">慕课网APP，下载课程随身学习</div>
    </div>
    <div class="btn">打开</div>
  </div>
</template>

<script>
export default {
  computed: {
    isshow() {
      return this.$route.path != "/index/course";
    }
  }
};
</script>

<style lang="scss" scoped>
.download {
  padding: 1rem 2rem;
  .icon {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }
  .tips {
    line-height: 3rem;
  }
  .btn {
    align-self: center;
  }
}
</style>
