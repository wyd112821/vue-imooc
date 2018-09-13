<template>
  <header class="header">
    <nav class="nav imooc-flex imooc-flex-between">
      <div class="info imooc-flex">
        <!-- 详情 -->
        <div class="btn return-btn mr-10" @click="$router.back()" v-if="!isIndex">
          <span class="icon-return"></span>
        </div>
        <div class="title" v-if="!isIndex">{{ title }}</div>
        <!-- 主页 -->
        <div class="logo" v-if="isIndex">
          <img src="@/public/images/logo.png">
        </div>
      </div>
      <ul class="menu-list imooc-flex" v-if="!isCart">
        <!-- 详情 -->
        <li class="menu-item cart-item" v-if="!isIndex" @click="toCart">
          <span class="icon-cart">
            <span class="path1"></span><span class="path2"></span>
          </span> 
        </li>
        <!-- 主页 -->
        <li class="menu-item" v-if="isIndex" @click="toSearch">
          <span class="icon-search">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span>
          </span> 
        </li>
        <li class="menu-item">
          <!-- 未登录 -->
          <span class="icon-head" v-if="!$store.state.userInfo" @click="toLogin"></span>
          <!-- 已登录 -->
          <span class="icon-people" v-else @click="toUser">
            <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span>
          </span>
        </li>
      </ul>
    </nav>
    <imooc-tab v-if="isIndex" :tablist="tablist"></imooc-tab>
  </header>
</template>

<script>
import tab from "@/components/tab";
export default {
  props: ["title"],
  data() {
    return {
      tablist: [
        {
          content: "首页",
          url: "/index/home"
        },
        {
          content: "课程",
          url: "/index/course"
        },
        {
          content: "路径",
          url: "/index/path"
        },
        {
          content: "实战",
          url: "/index/coding"
        },
        {
          content: "手记",
          url: "/index/article"
        },
        {
          content: "猿问",
          url: "/index/wenda"
        }
      ]
    };
  },
  components: {
    "imooc-tab": tab
  },
  computed: {
    isIndex() {
      return /index/.test(this.$route.path);
    },
    isCart() {
      return /cart/.test(this.$route.path);
    }
  },
  methods: {
    toSearch() {
      this.$router.push({ name: "search" });
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    toUser() {
      let id = this.$store.state.userInfo.id;
      this.$router.push({ name: "user", params: { id: id } });
    },
    toCart() {
      if (this.$store.state.userInfo) {
        this.$router.push({ name: "cart" });
      } else {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  .nav {
    padding: 1.2rem 1.5rem;
    .logo {
      width: 7rem;
    }
    .return-btn {
      width: 2rem;
      padding-top: 0.2rem;
    }
    .menu-item {
      margin-left: 2rem;
      font-size: 1.5rem;
      color: #666;
      .icon-cart {
        display: block;
        transition: all 0.1s ease;
        &.scale {
          transform: scale(1.5);
        }
      }
    }
  }
}
</style>
