<template>
  <div class="d-module">
    <p class="title">最新动态</p>
    <div class="new-info" v-for="item in articleList">
      <div class="info-title">
        <router-link :to="`/article/detail/${item.id}`">{{item.title}}</router-link>
      </div>
      <div class="info-content">{{dealContent(item.content)}}</div>
      <div class="info-attribute">
        <span>作者：{{item.userName}}</span>
        <span>时间：{{TimeConversion(item.time)}}</span>
        <span>类型：{{item.typeName}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { TimeConversion } from "../../util/util";
export default {
  data() {
    return {
      articleList: [],
      TimeConversion: TimeConversion
    };
  },
  created: function() {
    this.getData("PageHome.getNewArticle", null, this.dealArticle);
  },
  props: ["getData"],
  methods: {
    dealArticle(res) {
      this.articleList = res.result;
      console.log(this.articleList);
    },
    dealContent(html) {
      const dd = html.replace(/<\/?.+?>/g, "");
      const str = dd.substr(0, 50) + "...";
      return str;
    }
  }
};
</script>
