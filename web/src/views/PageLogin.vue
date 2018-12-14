<template>
  <div>
    <Login :getData="getData"></Login>
  </div>
</template>
<script>
// 导入组件
import '../css/PageLogin.less'
import { postData, getData } from "../util/request";
import Login from "../components/pageLogin/Login.vue";
// import
export default {
  name: "PageLogin",
  data() {
    return {
      postData: postData,
      getData: getData,
    }
  },
  components: {
    Login,
    // postData,
    // getData,
  }
};
</script>

