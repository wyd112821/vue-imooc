<template>
  <div class="type">
    <!-- 头部 -->
    <imooc-header :title="title[$route.params.id] + '培养计划'"></imooc-header>

    <!-- 主要内容 -->
    <div class="content imooc-flex imooc-flex-center">
      <span>暂无数据</span>
      <!-- <ul class="timeshaft-list">
        <li class="timeshart-item imooc-flex" v-for="course in courselist" :key="course.id">
          <div class="line"></div>
          <div class="info">
            <div class="title"></div>
            <div class="box imooc-flex">
              <div class="icon">
                <img :src="course.icon">
              </div>
              <div class="intro">
                <div class="title">{{ course.title }}</div>
                <div class="people cr-basic fz-small">{{ course.type }}{{course.level}} &#8901; {{ course.people }}人在学</div>
                <div class="money fz-small cr-main" v-if="course.money">&#165; {{ course.money }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import header from "@/components/header";
export default {
  data() {
    return {
      courselist: [],
      title: [
        "Web前端攻城狮",
        "Java攻城狮",
        "Android攻城狮",
        "PHP攻城狮",
        "IOS/C++攻城狮"
      ]
    };
  },
  activated() {
    // this.getCourseData();
  },
  methods: {
    getCourseData() {
      this.$http.get("/codeData").then(res => {
        console.log(res);
        let data = res.data.data;
        this.courselist = data.codelist;
      });
    }
  },
  components: {
    "imooc-header": header
  }
};
</script>

<style lang="scss" scoped>
// @import "@/public/stylesheets/theme.scss";
// .type {
//   .timeshaft-list {
//     .timeshart-item {
//       .box {
//         flex: 1;
//         .icon {
//           width: 4rem;
//           height: 100%;
//         }
//       }
//     }
//   }
// }
.type {
  height: 100vh;
  .content {
    height: 100%;
  }
}
</style>
