<template>
  <ul class="tab imooc-flex imooc-flex-between">
    <li class="tab-item" v-for="tab in tablist" :key="tab.id" :class="{'active': $route.path == tab.url}">
      <router-link :to="tab.url">{{ tab.content }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["tablist"]
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/theme.scss";
.tab {
  // background-color: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 2rem 0 2rem;
  .tab-item {
    text-align: center;
    height: 3rem;
    cursor: pointer;
    &.active {
      border-bottom: 0.2rem solid $main;
      a {
        display: block;
        width: 100%;
        height: 100%;
        color: $main;
      }
    }
  }
}
</style>
