<template>
  <div class="d-module">
    <div>
      <span class="title">最新动态</span>
      <span>
        <router-link to="/article">+More</router-link>
      </span>
    </div>
    <Row>
      <Col :span="12" v-for="item in articleList" :key='item.id'>
        <div class="new-info">
          <div class="info-title">
            <router-link :to="`/article/detail/${item.id}`">{{item.title}}</router-link>
          </div>
          <div class="info-content">{{dealContent(item.content)}}</div>
          <div class="info-attribute">
            <span>作者：{{item.userName}}</span>
            <span>时间：{{item.time}}</span>
            <span>类型：{{item.typeName}}</span>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import { TimeConversion } from "../../util/util";
import { Row, Col } from "element-ui";
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
  components: {
    Row,
    Col
  },
  methods: {
    dealArticle(res) {
      this.articleList = res.result;
    },
    dealContent(html) {
      const dd = html.replace(/<\/?.+?>/g, "");
      const str = dd.substr(0, 40) + "...";
      return str;
    }
  }
};
</script>
