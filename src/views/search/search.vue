<template>
  <transition name="slidedown">
    <div class="search imooc-container">
      <!-- 表单 -->
      <div class="form-wrapper imooc-flex">
        <div class="input">
          <input type="text" v-model="word" placeholder="请输入搜索关键词" @keyup.enter="search">
          <div class="search-btn" @click.prevent="search">
            <span class="icon-search">
              <span class="path1"></span><span class="path2"></span><span class="path3"></span>
            </span>
          </div>
        </div>
        <div class="cancel-btn imooc-flex imooc-flex-center">
          <span @click="$router.go(-1)">取消</span>
        </div>
      </div>

      <!-- 历史搜索 -->
      <dl class="history-list mb-10" v-if="historylist.length">
        <dd>历史搜索</dd>
        <dt v-for="his in historylist" :key="his.id" @click="choiceWord(his)">{{ his }}</dt>
        <dd v-if="historylist.length == 0" class="no-result cr-basic">暂无</dd>
      </dl>

      <!-- 热门搜索 -->
      <dl class="hot-list">
        <dd>热门搜索</dd>
        <dt v-for="hot in hotlist" :key="hot.id" @click="choiceWord(hot)">{{ hot }}</dt>
      </dl>

      <!-- 搜索结果 -->
      <dl class="result-list mt-10" v-if="word.length != 0">
        <dd>搜索结果</dd>
        <dt v-for="re in resultlist" :key="re.id">{{ re }}</dt>
        <dd v-if="resultlist.length == 0" class="no-result cr-basic">无搜索结果</dd>
      </dl>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      word: "",
      hotlist: [
        "java编程",
        "h5开发",
        "php课程",
        "大数据",
        "云计算",
        "人工智能"
      ],
      historylist: [],
      resultlist: [],
      dbdata: [
        "java编程java编1程javaa2编程java编程",
        "h5开发阿斯顿撒1饿嗡嗡1的2撒旦",
        "php课程阿桑的歌2合同1如2何提高",
        "撒打撒打撒德瓦2太热太aas热大数据",
        "云计算12222222",
        "人工智人工智能assssssss1s人工智s能ass1sssssss人工智s能assssssssss能asssssssss"
      ]
    };
  },
  created() {
    this.historylist = JSON.parse(this.$storage.get("history")) || [];
  },
  methods: {
    search() {
      this.resultlist = [];
      if (this.word == "") return false;
      this.setHistory(this.word);
      // 过滤数据
      this.dbdata.filter(item => {
        if (item.indexOf(this.word) != -1) {
          this.resultlist.push(item);
        }
      });
    },
    choiceWord(word) {
      this.word = word;
      this.search();
    },
    setHistory(word) {
      if (!this.$storage.get("history")) {
        this.$storage.set("history", "[]");
      }
      let history = JSON.parse(this.$storage.get("history"));
      if (history.length >= 10) {
        history.splice(0, 1);
      }
      history.indexOf(word) == -1 && history.push(word);
      this.$storage.set("history", JSON.stringify(history));
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/public/stylesheets/theme.scss";
.search {
  position: relative;
  background-color: #fff;
  z-index: 3;
  height: 100vh;
  .form-wrapper {
    height: 4rem;
    margin-bottom: 2rem;
    .input {
      position: relative;
      flex: 1;
      margin-right: 1rem;
      input {
        width: 100%;
        height: 100%;
        padding: 1rem;
      }
      .search-btn {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 2rem;
        line-height: 4.5rem;
        width: 2rem;
        font-size: 2rem;
      }
    }
  }
  .hot-list,
  .history-list {
    dt {
      display: inline-block;
      background-color: #f1f1f1;
      padding: 0.5rem 1rem;
      margin: 1rem 0.5rem 0 0;
      vertical-align: top;
    }
  }
  .no-result {
    margin: 1rem 0;
  }
  .result-list {
    dt {
      margin-top: 1rem;
      color: $main;
      animation: bounce-in 0.3s;
    }
  }
}
</style>
