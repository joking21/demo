<template>
  <div>
    <Login :postData="postData"></Login>
  </div>
</template>
<script>
// 导入组件
import '../css/PageLogin.less'
import { postData } from "../util/request";
import Login from "../components/pageLogin/Login.vue";
// import
export default {
  name: "PageLogin",
  data() {
    return {
      postData: postData,
    }
  },
  components: {
    Login,
  }
};
</script>

