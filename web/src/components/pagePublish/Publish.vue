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
    <div style="margin-top: 15px; text-align: center;">
      <Button
        :loading="loading"
        style="width: 118px;"
        type="primary"
        plain
        @click="submitFun"
      >发&nbsp;&nbsp;布</Button>
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
export default {
  data() {
    return {
      content: "<h4>It is a great day!</h4>",
      radio: "1",
      title: "",
      typeData: [{ id: 1, name: "前端" }, { id: 2, name: "后台" }],
      type: 1,
      loading: false
    };
  },
  props: ["postData"],
  components: {
    VueEditor,
    Radio,
    Input,
    Button,
    Tooltip,
    Select,
    Option
  },
  methods: {
    submitFun() {
       if (!this.title) {
        warningTip("请输入标题");
        return;
      }
      this.loading = true;
      const data = {
        userId: JSON.parse(sessionStorage.getItem("token")).id,
        title: this.title,
        content: this.content,
        typeId: this.type,
        power: this.radio
      };
      // this.postData("PagePublish.addArticle", data, this.changeLoad);
    },
    changeLoad() {
      this.loading = false;
    }
  }
};
</script>

