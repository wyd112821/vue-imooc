<template>
  <div class="teacher imooc-container">
    <p class="bold">讲师</p>
    <div class="item imooc-flex imooc-container">
      <div class="avatar mr-10">
        <img :src="teacher.avatar" class="avatar">
      </div>
      <div class="info imooc-flex imooc-flex-column imooc-flex-between">
        <div class="name bold">{{ teacher.name }}</div>
        <div class="type cr-basic">{{ teacher.type }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      default() {
        return {
          avatar: "",
          name: "谢李康",
          type: "慕课讲师"
        };
      }
    }
  }
};
</script>

