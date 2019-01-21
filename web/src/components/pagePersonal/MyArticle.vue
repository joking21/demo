<template>
  <div class="myArticle">
    <Collapse v-model="activeName" accordion>
      <CollapseItem :title="item.title" :name="item.id" v-for="item in articleList" :key="item.id">
        <div class="descrip">
          <span>类型：{{item.typeName}}</span>
          <span>时间：{{item.time}}</span>
          <span>权限：{{item.power == 1 ? '所有人可见' : '仅自己可见'}}</span>
          <span class="operation">
            <i class="icon-shanchu iconfont" @click="deleteArticle(item.id)" style="color: #F56C6C"></i>
            <i class="icon-xiugai iconfont" @click="openDialog(item)" style="color: #67C23A"></i>
          </span>
        </div>
        <div v-html="item.content"></div>
      </CollapseItem>
    </Collapse>
    <Dialog
      title="修改文章"
      :visible.sync="dialogVisible"
      width="80%"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <Publish
        :resTitle="title"
        :resContent="content"
        :articleId="titleId"
        :resTypeId="typeId"
        :resPower="power"
        :resFun="resFun"
        :cancelRes="cancelRes"
      />
    </Dialog>
  </div>
</template>
<style lang="less">
.myArticle {
  .el-collapse-item__header {
    font-size: 16px;
    color: #16c8da;
  }
  .descrip {
    margin-bottom: 8px;
    position: relative;
    span {
      margin-right: 15px;
      font-size: 12px;
    }
    .operation {
      position: absolute;
      right: 20px;
      .iconfont {
        font-size: 20px;
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
}
</style>
<script>
import { Collapse, CollapseItem, Button, Dialog } from "element-ui";
import { getData } from "../../util/request";
import Publish from "./Publish.vue";
import { MessageBox } from "element-ui";
import { success } from "../../util/notice";
export default {
  data() {
    return {
      articleList: [],
      activeName: "",
      dialogVisible: false,
      title: "",
      content: "",
      typeId: "",
      power: "",
      titleId: ""
    };
  },
  created: function() {
    getData(
      "PagePersonal.getArticleByme",
      { id: JSON.parse(sessionStorage.getItem("userInformation")).id },
      this.handleSuccess
    );
  },
  components: {
    Collapse,
    CollapseItem,
    Button,
    Dialog,
    Publish
  },
  methods: {
    openDialog(data) {
      this.dialogVisible = true;
      this.title = data.title;
      this.content = data.content;
      this.typeId = data.typeId;
      this.power = data.power;
      this.titleId = data.id;
    },
    handleSuccess(res) {
      this.articleList = res.result;
    },
    resFun() {
      this.dialogVisible = false;
      getData(
        "PagePersonal.getArticleByme",
        { id: JSON.parse(sessionStorage.getItem("userInformation")).id },
        this.handleSuccess
      );
    },
    cancelRes() {
      this.dialogVisible = false;
    },
    deleteArticle(id) {
      MessageBox.confirm("删除将不能回复，确定删除吗?", "警告", {
        confirmButtonText: "是",
        cancelButtonText: "否",
        type: "warning"
      }).then(() => {
        getData("PagePersonal.deleteArticle", { id: id }, this.deleteSuccess);
      }).catch(() => {
        console.log('取消');
      });
    },
    deleteSuccess() {
      success("删除成功");
      getData(
        "PagePersonal.getArticleByme",
        { id: JSON.parse(sessionStorage.getItem("userInformation")).id },
        this.handleSuccess
      );
    }
  }
};
</script>


