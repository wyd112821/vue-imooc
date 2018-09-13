<template>
  <div class="detail">
    <!-- 头部 -->
    <imooc-header title="课程介绍"></imooc-header>

    <!-- 主要内容 -->
    <div class="content" v-if="courseData">
      <div class="background"></div>
      <div class="title fz-big">{{ courseData.title }}</div>
      <!-- 介绍 -->
      <ul class="intro-list cr-basic fz-small has-line">
        <li class="intro-item">
          <span class="key">难度:</span>
          <span class="value">{{ courseData.intro.level }}</span>
        </li>
        <li class="intro-item">
          <span class="key">时长:</span>
          <span class="value">{{ courseData.intro.time }} </span>
        </li>
        <li class="intro-item">
          <span class="key">人数:</span>
          <span class="value">{{ courseData.intro.people }} </span>
        </li>
        <li class="intro-item">
          <span class="key">评分:</span>
          <span class="value">{{ courseData.intro.rate.toFixed(2) }} </span>
        </li>
      </ul>
      <!-- 讲师 -->
      <imooc-teacher :teacher="courseData.teacher"></imooc-teacher>
      <!-- 课程须知 -->
      <div class="should-know imooc-container">
        <p class="bold">课程须知</p>
        <p class="mt-10 cr-basic fz-small">{{courseData.know }}</p>
      </div>
    </div>

    <!-- 底部 -->
    <div class="btn footer" @click="toStudy">开始学习</div>
  </div>
</template>

<script>
import header from "@/components/header";
import teacher from "@/components/teacher";
export default {
  data() {
    return {
      courseData: null
    };
  },
  activated() {
    this.getCourseData();
  },
  methods: {
    getCourseData() {
      // 这是课程id,由于这里都是随机生成的数据,传了也没又意义
      let id = this.$route.params.id;
      this.$http.get("/csdetail").then(res => {
        let data = res.data.data;
        this.courseData = data.courseData;
      });
    },
    toStudy() {
      this.$toast.show(`开始学习: ${this.courseData.title}`);
    }
  },
  components: {
    "imooc-header": header,
    "imooc-teacher": teacher
  }
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/theme.scss";
.detail {
  padding-top: 4rem;
  padding-bottom: 10rem;
  .background {
    background-color: $basic;
    height: 15rem;
  }
  .title,
  .intro-list {
    text-align: center;
    padding: 1rem;
  }
  .intro-list {
    .intro-item {
      display: inline-block;
    }
  }
  .should-know {
    .title {
      text-align: left;
    }
  }
}
.footer {
  padding: 1.5rem;
  text-align: center;
  color: #fff;
  background-color: $main;
  box-shadow: none;
}
</style>
