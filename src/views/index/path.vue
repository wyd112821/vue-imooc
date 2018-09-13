<template>
  <div class="path mt-10">

    <!-- 分类 -->
    <ul class="type-list imooc-flex">
      <li class="type-item" v-for="(type, index) in typelist" :key="type.id" @click="toTypeDetail(index)">
        <div class="icon">
          <img :src="type.icon">
        </div>
        <div class="text fz-small">{{ type.text }}</div>
      </li>
    </ul>

    <!-- 课程列表 -->
    <ul class="class-list imooc-container imooc-flex imooc-flex-between">
      <li class="class-item" v-for="clas in classlist" :key="clas.id" @click="toClassDetail(clas.id)">
        <div class="icon">
          <img :src="clas.icon">
        </div>
        <div class="info">
          <div class="title">{{ clas.title }}</div>
          <div class="tips cr-basic fz-small">{{ clas.step }}步骤&#8901;{{ clas.classnum }}门课&#8901;{{ clas.people }}人在学</div>
          <div class="money fz-small">&#165; {{ clas.money }}</div>
        </div>
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      typelist: [
        {
          icon: require("@/public/images/web.png"),
          text: "Web前端攻城狮"
        },
        {
          icon: require("@/public/images/java.png"),
          text: "Java攻城狮"
        },
        {
          icon: require("@/public/images/android.png"),
          text: "Android攻城狮"
        },
        {
          icon: require("@/public/images/php.png"),
          text: "PHP攻城狮"
        },
        {
          icon: require("@/public/images/ios.png"),
          text: "IOS/C++攻城狮"
        }
      ],
      classlist: []
    };
  },
  created() {
    this.getPathData();
  },
  methods: {
    getPathData() {
      this.$http.get("/pathData").then(res => {
        console.log(res);
        let data = res.data.data;
        this.classlist = data.classlist;
      });
    },
    toClassDetail(id) {
      this.$router.push({ name: "cdetail", params: { id } });
    },
    toTypeDetail(id) {
      this.$router.push({ name: "type", params: { id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.type-list {
  padding: 0 1rem;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  .type-item {
    flex-shrink: 0;
    padding: 0.5rem 1.5rem;
    text-align: center;
    .icon {
      display: inline-block;
      width: 3rem;
    }
    &:active {
      background-color: #ebebeb;
    }
  }
}

.class-list {
  flex-wrap: wrap;
  .class-item {
    flex-basis: 48%;
    border: 0.1rem solid #ebebeb;
    margin-bottom: 1.5rem;
    box-shadow: 0 0 1rem 0.1rem rgba($color: #000, $alpha: 0.1);
    .info {
      padding: 1rem;
    }
    &:active {
      background-color: #ebebeb;
    }
  }
}
</style>
