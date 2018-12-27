<template>
  <div>
    <Header/>
    <Toobar/>
    <div class="content">
      <Publish :postData="postData" />
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
import { postData } from "../util/request";
export default {
  data() {
    return {
      postData: postData,
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

