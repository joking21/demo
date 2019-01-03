<template>
  <div>
    <Register :postData="postData"></Register>
  </div>
</template>
<script>
// 导入组件
import '../css/PageLogin.less'
import { postData } from "../util/request";
import Register from "../components/pageLogin/Register.vue";
export default {
  name: "PageLogin",
  data() {
    return {
      postData: postData,
    }
  },
  components: {
    Register,
  }
};
</script>

