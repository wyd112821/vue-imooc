<template>
  <div class="return-btn" :class="{'white': white}">
    <span class="icon-return" @click="$router.go(-1)"></span>
  </div>
</template>

<script>
export default {
  props: ["white"]
};
</script>

<style lang="scss" scoped>
.return-btn {
  position: fixed;
  top: 2rem;
  left: 1rem;
  font-size: 2.6rem;
  &.white {
    span.icon-return {
      color: #fff !important;
    }
  }
}
</style>

