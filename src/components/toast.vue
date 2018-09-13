

<template>
  <div class="toast imooc-flex imooc-flex-center" v-show="$store.state.toast != ''">
    <div class="toast-value">{{ $store.state.toast }}</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.toast {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1.5rem;
  margin: auto;
  max-width: 30rem;
  min-height: 4rem;
  text-align: center;
  z-index: 101;
  .toast-value {
    padding: 1rem 1.5rem;
    background-color: #474747;
    color: #fff;
    border-radius: 2rem;
    font-size: 1.2rem;
  }
}
</style>

