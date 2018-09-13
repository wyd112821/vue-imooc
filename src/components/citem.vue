<template>
  <div class="citem imooc-flex" :class="{'istop': course.istop}">
    <div class="icon" :style="{width: width, height: height}">
      <img :src="course.icon">
    </div>
    <div class="info imooc-flex imooc-flex-column imooc-flex-around">
      <div class="title hide-text-2">{{ course.title }}</div>
      <div class="intro hide-text-2">{{ course.intro }}</div>
      <div class="people cr-basic fz-small" v-if="course.type">{{ course.type }}{{course.level}} &#8901; {{ course.people }}人在学</div>
      <div class="money fz-small cr-main" v-if="course.money">&#165; {{ course.money }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      type: Object,
      default() {
        return {
          title: "",
          intro: "",
          level: "",
          people: "",
          money: ""
        };
      }
    },
    width: {
      default() {
        return "auto";
      }
    },
    height: {
      default() {
        return "auto";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$active: #ebebeb;
// 列表公共样式（实战推荐、新上好课）
.citem {
  &:active {
    background-color: $active;
  }
  margin: 1.5rem 0 0 0;
  .icon {
    margin-right: 1rem;
    img {
      height: 100%;
    }
  }
  .info {
    flex: 1;
    .title {
      word-break: break-all;
    }
  }
  // 置顶样式
  &.istop {
    position: relative;
    padding: 1rem;
    color: #fff;
    line-height: 1.7;
    a {
      color: #fff;
    }
    .icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .people {
      color: #fff;
    }
    .money {
      color: #fff;
    }
  }
}
</style>
