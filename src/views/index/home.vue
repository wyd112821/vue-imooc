<template>
  <div class="home mt-10">

    <!-- 轮播图 -->
    <div class="banner">
      <swiper :options="boptions" ref="mySwiper" v-if="bannerlist.length != 0">
        <swiper-slide v-for="(banner, index) in bannerlist" :key="banner.id">
          <img :src="banner.image" @click="toClassDetail(index)">
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </div>

    <!-- 公告 -->
    <div class="notice imooc-container imooc-flex imooc-flex-between fz-small">
      <div class="info">
        <div class="content cr-basic hide-text-1">公告：新人注册专享35元大礼包，你来我就送！</div>
      </div>
      <div class="btn">详情</div>
    </div>

    <!-- 实战推荐 -->
    <div class="rec imooc-container">
      <!-- 头部 -->
      <div class="head imooc-flex imooc-flex-between">
        <div class="title">实战推荐</div>
        <div class="more-link">
          <router-link to="/index/coding" class="cr-basic">更多实战</router-link>
        </div>
      </div>

      <!-- 列表 -->
      <ul class="rec-list">
        <li class="rec-item" v-for="rec in reclist" :key="rec.id" :class="{'istop': rec.istop}" @click="toClassDetail(rec.id)">
          <imooc-citem :course="rec" width="13rem"></imooc-citem>
        </li>
      </ul>
    </div>

    <!-- 新上好课 -->
    <div class="new imooc-container">
      <!-- 头部 -->
      <div class="head imooc-flex imooc-flex-between">
        <div class="title">新上好课</div>
        <div class="more-link">
          <router-link to="/index/course" class="cr-basic">更多好课程</router-link>
        </div>
      </div>

      <!-- 列表 -->
      <ul class="rec-list">
        <swiper :options="noptions" ref="mySwiper" v-if="cNewList.length != 0">
          <swiper-slide v-for="cne in cNewList" :key="cne.id">
            <li class="rec-item imooc-flex" v-for="ne in cne" :key="ne.id" @click="toClassDetail(ne.id)">
              <imooc-citem :course="ne" width="13rem" height="auto"></imooc-citem>
            </li>
          </swiper-slide>
          <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
        </swiper>
      </ul>
    </div>

    <!-- 猿问精选 -->
    <div class="wenda imooc-container">
      <!-- 头部 -->
      <div class="head imooc-flex imooc-flex-between">
        <div class="title">猿问精选</div>
        <div class="more-link">
          <router-link to="/" class="cr-basic">更多猿问</router-link>
        </div>
      </div>

      <!-- 列表 -->
      <ul class="wenda-list">
        <li class="wenda-item" v-for="wenda in wendalist" :key="wenda.id">
          <div class="title">
            <router-link to="/">{{ wenda.title }}</router-link>
          </div>
          <div class="active-num cr-basic fz-small">共{{ wenda.num }}个回答</div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import sliceArray from "@/public/javascripts/sliceArray";
import citem from "@/components/citem";
export default {
  data() {
    return {
      bannerlist: [],
      reclist: [],
      newlist: [],
      wendalist: [],
      boptions: {
        effect: "coverflow",
        slidesPerView: 1.1,
        spaceBetween: 65,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 2,
          slideShadows: true
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      noptions: {
        spaceBetween: 10,
        slidesPerView: 1.1,
        centeredSlides: false,
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  created() {
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      this.$http.get("/homeData").then(res => {
        console.log(res);
        let data = res.data.data;
        this.bannerlist = data.bannerlist;
        this.reclist = data.reclist;
        this.newlist = data.newlist;
        this.wendalist = data.wendalist;
      });
    },
    toClassDetail(id) {
      this.$router.push({ name: "cdetail", params: { id } });
    }
  },
  computed: {
    cNewList() {
      let list = this.newlist;
      let result = sliceArray(list, 3);
      return result;
    }
  },
  components: {
    swiper,
    swiperSlide,
    "imooc-citem": citem
  }
};
</script>

<style lang="scss" scoped>
$active: #ebebeb;
.home {
  .rec-item {
    // 置顶样式
    &.istop {
      display: inline-block;
      width: 49%;
      min-width: 10.5rem;
      &:first-child {
        margin-right: 2%;
      }
    }
  }
  // 猿问精选
  .wenda-item {
    margin-top: 1rem;
    &:active {
      background-color: $active;
    }
  }
}
</style>

<style lang="scss">
// 新手好课swiper pagination的切换动画
.new {
  background-color: #f4f4f4;
  .swiper-container {
    padding-bottom: 3rem;
    .swiper-pagination {
      bottom: 0rem;
      span {
        background-color: #d9dde1;
        opacity: 0.6;
        transition: width 0.2s ease-in;
        border-radius: 0.6rem;
        &.swiper-pagination-bullet-active {
          width: 3rem;
          background-color: #d9dde1;
          opacity: 1;
        }
      }
    }
  }
}
</style>

