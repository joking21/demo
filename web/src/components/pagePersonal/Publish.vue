<template>
  <div class="article">
    <div>
      <div style="font-size: 16px; margin-bottom: 15px;">
        <Tooltip class="item" effect="dark" content="标题" placement="bottom">
          <i class="icon-biaoti iconfont" style="font-size: 22px; margin-right: 24px;"/>
        </Tooltip>
        <Input class="input-style" placeholder="请输入标题" v-model="title" clearable/>
      </div>
      <div style="font-size: 16px; margin-bottom: 15px;">
        <Tooltip class="item" effect="dark" content="文章类型" placement="bottom">
          <i class="icon-type iconfont" style="font-size: 22px; margin-right: 24px;"/>
        </Tooltip>
        <Select class="input-style" v-model="type" placeholder="请选择文章类型">
          <Option v-for="item in typeData" :key="item.id" :label="item.name" :value="item.id"></Option>
        </Select>
      </div>
      <div style="font-size: 16px; margin-bottom: 15px;">
        <Tooltip class="item" effect="dark" content="权限设置" placement="bottom">
          <i
            class="icon-setting-permissions iconfont"
            style="font-size: 22px; margin-right: 24px;"
          />
        </Tooltip>
        <Radio v-model="radio" label="1">所有人可见</Radio>
        <Radio v-model="radio" label="2">仅自己可见</Radio>
      </div>
    </div>
    <VueEditor id="editor1" v-model="content"></VueEditor>
    <div v-if="!resFun" style="margin-top: 15px; text-align: center;">
      <Button
        :loading="loading"
        style="width: 118px;"
        type="primary"
        plain
        @click="submitFun"
      >发&nbsp;&nbsp;布</Button>
    </div>
    <div v-else style="margin-top: 15px; text-align: center;">
      <Button
        :loading="loading"
        style="width: 118px;"
        type="primary"
        plain
        @click="submitFun"
      >确认修改</Button>
      <Button
        :loading="loading"
        style="width: 118px;"
        type="danger"
        plain
        @click="cancelRes"
      >取消</Button>
    </div>
  </div>
</template>
<style lang="less">
#editor1 {
  height: 350px;
}
.article {
  .input-style {
    width: 300px !important;
    .el-input__inner {
      border-left: none;
      border-right: none;
      border-top: none;
    }
  }
}
</style>
<script>
// 导入组件
import { Radio, Input, Button, Tooltip, Select, Option } from "element-ui";
import { VueEditor } from "vue2-editor";
import { warningTip } from "../../util/notice";
import { postData, getData } from "../../util/request";
export default {
  data() {
    return {
      content: this.resContent
        ? this.resContent
        : "<h4>It is a great day!</h4>",
      radio: this.resPower ? this.resPower : "1",
      title: this.resTitle,
      typeData: [],
      type: this.resTypeId ? this.resTypeId : 1,
      loading: false
    };
  },
  props: ["resTitle", "resContent", "resTypeId", "resPower", "resFun", "articleId", 'cancelRes', 'resvise'],
  components: {
    VueEditor,
    Radio,
    Input,
    Button,
    Tooltip,
    Select,
    Option
  },
  created: function() {
    getData("PagePublish.getType", null, this.getType);
  },
  methods: {
    submitFun() {
      if (!this.title) {
        warningTip("请输入标题");
        return;
      }
      this.loading = true;
      const data = {
        userId: JSON.parse(sessionStorage.getItem("userInformation")).id,
        title: this.title,
        content: this.content,
        typeId: this.type,
        power: this.radio
      };
      if(this.resFun) data.id = this.articleId;
      const url = this.resFun ? 'PagePersonal.updateArticle' : 'PagePublish.addArticle'
       postData(
          url,
          data,
          this.successPublish,
          this.changeLoad
        );
    },
    changeLoad() {
      this.loading = false;
    },
    successPublish() {
      this.loading = false;
      if (this.resFun) {
        // 修改
        this.resFun();
      } else {
        this.$store.commit('changePersonal', '2');
        // this.$router.push({ path: "/article" });
      }
    },
    getType(res) {
      this.typeData = res.result;
    }
  }
};
</script>

