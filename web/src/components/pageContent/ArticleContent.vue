<template>
  <div class="article-content">
    <p class="title">{{content.title}}</p>
    <p class="info">
      <span>作者：{{content.userName}}</span>
      <span style="margin-left: 10px;">类型：{{content.typeName}}</span>
    </p>
    <div v-html="content.content"></div>
  </div>
</template>
<style lang="less">
.article-content {
  .title {
    padding: 15px;
    font-size: 18px;
    text-align: center;
    font-weight: 800;
  }
  .info {
    font-size: 14px;
    text-align: center;
  }
}
</style>

<script>
export default {
  data() {
    return {
      content: {}
    };
  },
  created: function() {
    this.getData("PageArticle.getContent", { id: this.id }, this.dealData);
  },
  props: ["id", "getData"],
  methods: {
    dealData(res) {
      this.content = res.result[0];
    }
  }
};
</script>
