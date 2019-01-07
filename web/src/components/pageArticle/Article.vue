<template>
  <div>
    <div class="new-info" v-for="item in dataList">
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
    <div style="padding: 15px; text-align: right;">
      <Pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10,20,30,40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></Pagination>
    </div>
  </div>
</template>
<style lang="less">
</style>

<script>
import { TimeConversion } from "../../util/util";
import { Pagination } from "element-ui";
export default {
  data() {
    return {
      dataList: [],
      TimeConversion: TimeConversion,
      currentPage: 1,
      pageSize: 10,
      total: 1,
    };
  },
  props: ["getData"],
  components: {
    Pagination
  },
  created: function() {
    // this.getData("PageArticle.getList", { num: this.pageSize, page: this.currentPage }, this.successFun);
    this.getList(this.pageSize, this.currentPage);
  },
  methods: {
    getList(pageSize, currentPage){
        this.getData("PageArticle.getList", { num: pageSize, page: currentPage }, this.successFun);
    },
    successFun(res) {
      this.dataList = res.result.data;
      this.currentPage  =  res.result.page;
      this.pageSize = res.result.num;
      this.total = parseInt(res.result.total)* parseInt(res.result.num);
    },
    dealContent(html) {
      const dd = html.replace(/<\/?.+?>/g, "");
      const str = dd.substr(0, 50) + "...";
      return str;
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
         this.pageSize = val;
         this.getList(val, this.currentPage);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
         this.currentPage = val;
         this.getList(this.pageSize, val);
      }
  }
};
</script>

