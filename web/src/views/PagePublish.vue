<template>
  <div>
    <Header/>
    <Toobar/>
    <div class="content">
      <Publish :postData="postData" :getData="getData" />
    </div>
    <Footer/>
  </div>
</template>
<script>
// 导入组件
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Toobar from "../common/Toobar.vue";
import Publish from "../components/pagePublish/Publish.vue";
import { postData, getData } from "../util/request";
export default {
  data() {
    return {
      postData: postData,
      getData: getData,
    };
  },
  components: {
    Header,
    Footer,
    Toobar,
    Publish
  }
};
</script>

