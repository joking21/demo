<template>
  <div>
    <Login :postData="postData"></Login>
  </div>
</template>
<script>
// 导入组件
import { postData } from "../util/request";
import Login from "../components/pageLogin/Login.vue";
// import
export default {
  data() {
    return {
      postData: postData,
    }
  },
  name: "PageLogin",
  components: {
    Login,
  }
};
</script>

