<template>
  <div class="d-module">
    <p class="title">最新动态</p>
    <div class="new-info" v-for="item in articleList">
      <p class="info-title">
        <a>{{item.title}}</a>
      </p>
      <p class="info-content" v-html="item.content">
        <!-- {{item.content}} -->
      </p>
      <p class="info-attribute">
        <span>作者：{{item.userName}}</span>
        <span>时间：{{TimeConversion(item.time)}}</span>
        <span>类型：{{item.typeName}}</span>
      </p>
    </div>
  </div>
</template>
<script>
import { TimeConversion } from "../../util/util"
export default {
  data() {
    return {
      articleList: [],
      TimeConversion: TimeConversion,
    };
  },
  created: function() {
    this.getData("PagePublish.getNewArticle", null, this.dealArticle);
  },
  props: ["getData"],
  methods: {
      dealArticle(res){
         this.articleList = res.result;
         console.log(this.articleList);
      }
  }
};
</script>
