<template>
  <div class="detail">
    <!-- 头部 -->
    <imooc-header title="实战详情"></imooc-header>
     
    <!-- 主要内容 -->
    <div class="content" v-if="classData">
      <!-- 上部分信息 -->
      <div class="imooc-container">
        <!-- 标题 -->
        <div class="title bold">{{ classData.title }}</div>
        <!-- 副标题 -->
        <div class="content mb-10">{{ classData.content }}</div>
        <!-- 价格 -->
        <div class="imooc-flex imooc-flex-between">
          <div class="money">
            <div class="rel-money bold">&#165;{{ classData.money + '.00' }}</div>
            <div class="old-money fz-small cr-basic">&#165;{{ classData.money + 50 + '.00' }}</div>
          </div>
          <div class="btn play-btn bold" @click="showVideo">
            <span class="icon-play">
              <span class="path1"></span><span class="path2"></span><span class="path3"></span>
            </span>
          </div>
        </div>
        <!-- 套餐介绍 -->
        <ul class="intro">
          <li class="intro-item imooc-flex">
            <div class="title bold">促销</div>
            <div class="content">已支持支付宝花呗付款</div>
          </li>
          <li class="intro-item imooc-flex">
            <div class="title bold">参数</div>
            <div class="content">难度&#8901;{{ intro.level }}&#8901;{{ intro.people }}人学&#8901;{{ intro.rate.toFixed(2) }}分</div>
          </li>
          <li class="intro-item imooc-flex">
            <div class="title bold">套餐</div>
            <div class="content">最高立省&#165;{{ intro.disccount }}，更多套餐有惊喜</div>
          </li>
          <li class="intro-item imooc-flex">
            <div class="title bold">服务</div>
            <div class="content">问答社区&#8901;源码开放&#8901;教辅材料&#8901;Git代码存储</div>
          </li>
        </ul>
      </div>
      <!-- 图片介绍 -->
      <ul class="image-list">
        <li class="image-item" v-for="image in classData.imagelist" :key="image.id">
          <img :src="image">
        </li>
      </ul>
      <!-- 章节 -->
      <div class="chapter imooc-container">
        <div class="title bold">章节</div>
        <ul class="chapter-list" :class="{'show-all': showAll}">
          <li class="chapter-item" v-for="chapter in classData.chapterlist" :key="chapter.id">
            <div class="title bold">{{ chapter.title }}</div>
            <ul class="class-list cr-basic">
              <li class="class-item" v-for="clas in chapter.classlist" :key="clas.id">{{ clas }}</li>
            </ul>
          </li>
          <!-- 透明遮罩 -->
          <li class="more-mask" v-if="!showAll"></li>
        </ul>
        <!-- 查看全部 -->
        <div class="check-all" v-if="!showAll" @click="showAll = !showAll">查看全部</div>
      </div>
      <!-- 教师 -->
      <div class="tacher has-line">
        <imooc-teacher :teacher="classData.teacher"></imooc-teacher>
      </div>
      <!-- 评分 -->
      <div class="rate imooc-container">
        <p>评价</p>
        <!-- 评分 -->
        <div class="rate-container imooc-flex">
          <div class="item bold">{{ classData.rate.rate[0].toFixed(2) }}</div>
          <div class="item">
            <p class="bold">内容实用</p>
            {{ classData.rate.rate[1].toFixed(2) }}
          </div>
          <div class="item">
            <p class="bold">通俗易懂</p>
            {{ classData.rate.rate[2].toFixed(2) }}
          </div>
          <div class="item">
            <p class="bold">逻辑清晰</p>
            {{ classData.rate.rate[3].toFixed(2) }}
          </div>
        </div>
        <!-- 评论 -->
        <ul class="comment-list">
          <li class="comment-item" v-for="comment in classData.rate.commentlist" :key="comment.id">
            <div class="info imooc-flex imooc-flex-between">
              <div class="left imooc-flex">
                <div class="avatar mr-10">
                  <img :src="comment.avatar" class="avatar">
                </div>
                <div class="name bold">{{ comment.name }}</div>
              </div>
              <div class="right">
                <div class="rate cr-basic">{{ comment.rate.toFixed(2) }}分</div>
              </div>
            </div>
            <div class="comment">{{ comment.comment }}</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 底部 -->
    <div class="footer imooc-flex">
      <div class="chat imooc-flex imooc-flex-center">
        <div class="content">
          <div class="icon"></div>
          <p class="fz-small">咨询</p>
        </div>
      </div>
      <div class="buttons imooc-flex">
        <div class="btn add-btn" @click="addToCar($event)">加入购物车</div>
        <div class="btn buy-btn" @click="toPayPage">立即购买</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import header from "@/components/header";
import teacher from "@/components/teacher";
export default {
  data() {
    return {
      classData: null,
      intro: null,
      showAll: false
    };
  },
  activated() {
    this.getClassData();
    window.scrollTo(0, 0);
  },
  methods: {
    getClassData() {
      // 这是课程id,由于这里都是随机生成的数据,传了也没又意义
      let id = this.$route.params.id;
      this.$http.get("/cdetail").then(res => {
        console.log(res);
        let data = res.data.data;
        this.classData = data.classData;
        this.intro = this.classData.intro;
      });
    },
    toPayPage() {
      alert(
        `购买课程《${this.classData.title}》,一共支付${this.classData.money}元`
      );
    },
    addToCar(e) {
      if (this.$store.state.userInfo) {
        let data = this.classData;
        let id = this.$route.params.id;

        // 本课程的数据
        let shop = {
          id: id,
          icon: data.icon,
          title: data.title,
          intro: data.content,
          money: data.money
        };

        // 购物车的数据
        let shopCartInfo = this.$storage.get("shopCartInfo");
        shopCartInfo = shopCartInfo ? JSON.parse(shopCartInfo) : new Array();

        // 将课程数据添加到购物车
        shopCartInfo.push(shop);
        this.$storage.set("shopCartInfo", shopCartInfo);
        this.$store.commit("set_shopCartInfo", shopCartInfo);

        // 小球丢进购物车动画
        this.doAnimation(e);
      } else {
        this.$router.push({ name: "login" });
      }
    },
    doAnimation(e) {
      // 获取鼠标点击时的x,y坐标
      let { pageX, pageY } = e;

      // 获取购物车图标的x,y坐标
      let cart = document.querySelector(".icon-cart");
      let { x, y } = cart.getBoundingClientRect();

      // 在鼠标点击处生成小球
      let circle = document.createElement("span");
      circle.className = "circle";
      circle.style.cssText = `top: ${pageY}px; left: ${pageX}px`; // 初始化小球位置
      document.body.appendChild(circle);

      // 小球移动到购物车
      setTimeout(() => {
        circle.style.cssText = `top: ${y}px; left: ${x + 5}px`;

        // 根据css设置的过渡时间移除小球、购物车做放大动画
        setTimeout(() => {
          circle.remove();
          cart.classList.add("scale");
          setTimeout(() => {
            cart.classList.remove("scale");
          }, 100);
        }, 900);
      }, 50);
    },
    showVideo() {
      this.$router.push({
        name: "video",
        params: {
          src: "https://v3.mukewang.com/shizhan/5b308443e520e529098b45b3/H.mp4"
        }
      });
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
  padding: 4rem 0 6rem;
  .content {
    .title {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    .rel-money {
      color: $main;
      font-size: 2rem;
    }
    .old-money {
      text-decoration: line-through;
    }
    .play-btn {
      font-size: 2.5rem;
    }
    .intro {
      margin-top: 1rem;
      padding: 0 1rem;
      background-color: #f4f5f7;
      border-radius: 1rem;
      font-size: 1.2rem;
      .intro-item {
        padding: 1rem 0;
        height: 4.5rem;
        line-height: 2;
        border-bottom: 0.1rem solid #d9dde1;
        &:last-child {
          border-bottom: none;
        }
      }
      .title {
        font-size: 1.2rem;
        margin-right: 1rem;
      }
    }
    .chapter {
      .title {
        font-size: 1.6rem;
      }
      .chapter-list {
        position: relative;
        height: 50rem;
        overflow: hidden;
        transition: all 0.5s linear;
        &.show-all {
          height: auto;
        }
      }
      .class-list {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        li {
          padding: 1rem;
          border-bottom: 0.1rem solid #ebebeb;
        }
      }
      .more-mask {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 20rem;
        background: linear-gradient(
          bottom,
          #fff 0,
          rgba(255, 255, 255, 0) 100%
        );
      }
      .check-all {
        color: $main;
        text-align: center;
        margin-top: 2rem;
      }
    }
    .teacher {
      .item {
        padding-bottom: 0;
      }
    }
    .rate {
      .rate-container {
        padding-top: 1.5rem;
        .item {
          flex: 1;
          text-align: center;
          &:first-child {
            font-size: 3rem;
            color: $main;
          }
        }
      }
      .comment-item {
        padding: 1.5rem;
        border-radius: 1rem;
        background-color: #f4f5f7;
        margin-top: 1rem;
        .info {
          line-height: 4rem;
          margin-bottom: 1rem;
        }
      }
    }
  }
}
.footer {
  padding: 0.5rem 1.5rem;
  .chat {
    flex-basis: 6rem;
    text-align: center;
  }
  .buttons {
    flex: 1;
    border-radius: 3rem;
    overflow: hidden;
    .btn {
      flex: 1;
      text-align: center;
      padding: 1.2rem;
      background-color: $main;
      color: #fff;
    }
    .add-btn {
      background-color: rgba($main, 0.7);
    }
  }
}
</style>
