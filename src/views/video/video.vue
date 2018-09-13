<template>
  <transition name="slidedown">
    <div class="video imooc-flex imooc-flex-center">
      <imooc-return white="true"></imooc-return>
      <video :src="src" preload controls>
        你的浏览器不支持video标签
      </video>
    </div>
  </transition>
</template>

<script>
import back from "@/components/return";
export default {
  data() {
    return {
      src: ""
    };
  },
  created() {
    this.src = this.$route.params.src;
  },
  components: {
    "imooc-return": back
  }
};
</script>

<style lang="scss" scoped>
.video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  overflow: hidden;
  background-color: #000;
  video {
    width: 100%;
  }
}
</style>
