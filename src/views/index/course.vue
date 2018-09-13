<template>
  <div class="course imooc-flex">
    <!-- 菜单列表 -->
    <div class="wrapper menu-wrapper" ref="mwrapper">
      <ul class="menu-list">
        <li class="menu-item imooc-flex imooc-flex-center"
          v-for="(course, index) in courselist"
          :key="course.id"
          :class="{'active': currentIndex == index}"
          @click="selectMenu(index)">
          <span>{{ course.title }}</span>
        </li>
      </ul>
    </div>

    <!-- 对应的内容 -->
    <div class="wrapper content-wrapper" ref="cwrapper">
      <ul class="content-list">
        <li class="content-item" v-for="course in courselist" :key="course.id">
          <div class="title mb-10">{{ course.title }}</div>
          <ul class="type-list imooc-flex" v-if="course.content.typelist.length">
            <li class="type-item" v-for="(type, index) in course.content.typelist" :key="type.id" @click="toDetail(index)">
              <div class="icon">
                <img :src="type.icon">
                <p class="hide-text-1">{{ type.text }}</p>
              </div>
            </li>
          </ul>
          <ul class="course-list">
            <li class="course-item imooc-flex" v-for="(course, index) in course.content.courselist" :key="course.id" @click="toDetail(index)">
              <imooc-citem :course="course" width="6rem"></imooc-citem>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import citem from "@/components/citem";
export default {
  data() {
    return {
      courselist: [],
      mscroll: null,
      cscroll: null,
      scrollY: 0,
      listHeight: []
    };
  },
  created() {
    this.getCourseData();
  },
  mounted() {
    this.initBetterScroll();
  },
  activated() {
    // 移除index的padding-bottom
    document.querySelector(".index").classList.remove("haspadding");
  },
  deactivated() {
    // 加上index的padding-bottom
    document.querySelector(".index").classList.add("haspadding");
  },
  methods: {
    getCourseData() {
      this.$http.get("/courseData").then(res => {
        console.log(res);
        let data = res.data.data;
        this.courselist = data.courselist;
      });
    },
    initBetterScroll() {
      this.$nextTick(function() {
        setTimeout(() => {
          let wrapper = this.$refs.cwrapper;

          // 初始化better-scroll插件
          this.cscroll = new BScroll(wrapper, {
            click: true,
            probeType: 3
          });

          // 监听内容区的滚动
          this.cscroll.on("scroll", pos => {
            this.scrollY = Math.abs(Math.round(pos.y));
          });

          // 计算高度
          this.caclHeight();
        }, 500);
      });
    },
    caclHeight() {
      let content = document.querySelectorAll(".content-wrapper .content-item");
      let height = 0;
      this.listHeight.push(height);
      content.forEach(item => {
        height += item.clientHeight;
        this.listHeight.push(height);
      });
    },
    selectMenu(index) {
      let content = document.querySelectorAll(".content-wrapper .content-item");
      let el = content[index];
      this.cscroll.scrollToElement(el, 300);
    },
    toDetail(id) {
      this.$router.push({ name: "csdetail", params: { id: id } });
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (
          !height2 ||
          (this.scrollY >= height1 && this.scrollY <= height2 - 50)
        ) {
          return i;
        }
      }
      return 0;
    }
  },
  components: {
    "imooc-citem": citem
  }
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/theme.scss";
.course {
  height: calc(100vh - 8rem);
  overflow: hidden;
  .menu-wrapper {
    width: 8rem;
    flex: 0 0 8rem;
  }
  .content-wrapper {
    flex: 1;
    overflow: hidden;
  }
  .menu-list {
    text-align: center;
    background-color: #fff;
    font-size: 1.2rem;
    li {
      width: 100%;
      height: 6rem;
      padding: 0 1rem;
      border-bottom: 0.1rem solid #ebebeb;
      &:last-child {
        border: none;
      }
      &.active {
        color: $main;
      }
    }
  }
  .content-list {
    background-color: #f4f5f6;
    padding: 1rem;
    overflow: hidden;
    .content-item {
      margin-bottom: 1rem;
      padding-top: 1rem;
    }
    .type-list {
      flex-wrap: wrap;
      padding: 1rem 1rem 0;
      margin-bottom: 2rem;
      background-color: #fff;
      border-radius: 1rem;
      text-align: center;
      .type-item {
        align-self: flex-start;
        flex-basis: 33%;
        margin-bottom: 1rem;
        &:active {
          background-color: #f1f1f1;
        }
        p {
          margin-top: 0.5rem;
        }
        .icon {
          img {
            width: 4rem;
            margin: 0 auto;
          }
        }
      }
    }
  }
  .course-list {
    .course-item {
      &:active {
        background-color: #f1f1f1;
      }
      margin-top: 1rem;
      .icon {
        width: 6rem;
        margin-right: 1rem;
      }
      .info {
        flex: 1;
      }
    }
  }
}
</style>


