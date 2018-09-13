<template>
  <div class="path">

    <!-- 分类 -->
    <ul class="type-list imooc-container imooc-flex">
      <li class="type-item" v-for="(type, index) in typelist"
        :key="type.id"
        :class="{'active': index === currActive}"
        @click="changeType(index)">{{ type }}
      </li>
    </ul>

    <!-- 课程列表 -->
    <ul class="class-list">
      <li class="class-item imooc-flex imooc-container" v-for="code in codelist" :key="code.id" @click="toClassDetail(code.id)">
        <imooc-citem :course="code" width="10rem" height="7rem"></imooc-citem>
      </li>
    </ul>
    
  </div>
</template>

<script>
import citem from "@/components/citem";
export default {
  data() {
    return {
      typelist: [
        "全部",
        "前沿技术",
        "前端开发",
        "后端开发",
        "移动开发",
        "算法&数学",
        "云计算&大数据",
        "人工智能"
      ],
      currActive: 0,
      codelist: []
    };
  },
  created() {
    this.getPathData();
  },
  methods: {
    getPathData() {
      this.$http.get("/codeData").then(res => {
        console.log(res);
        let data = res.data.data;
        this.codelist = data.codelist;
      });
    },
    changeType(index) {
      this.currActive = index;
      this.getPathData();
    },
    toClassDetail(id) {
      this.$router.push({ name: "cdetail", params: { id } });
    }
  },
  components: {
    "imooc-citem": citem
  }
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/theme.scss";
.type-list {
  flex-wrap: wrap;
  background-color: $black;
  color: #fff;
  .type-item {
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    text-align: center;
    border: 0.1rem solid #fff;
    margin: 0.5rem 0;
    margin-right: 1rem;
    border-radius: 3rem;
    &.active {
      background-color: $main;
      border-color: $main;
    }
    .icon {
      display: inline-block;
      width: 3rem;
    }
  }
}

.class-list {
  .class-item {
    border-bottom: 0.1rem solid #ebebeb;
    &:last-child {
      border: none;
    }
    .icon {
      width: 10rem;
      height: 7rem;
      margin-right: 1rem;
      img {
        height: 100%;
      }
    }
    .info {
      flex: 1;
      .title,
      .intro,
      .tips {
        margin-bottom: 0.5rem;
      }
    }
    &:active {
      background-color: #ebebeb;
    }
  }
}
</style>
