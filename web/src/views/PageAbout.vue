
<template>
  <div>
    <Header/>
    <Toobar/>
    <div class="content">
      待开发
    </div>
    <Footer/>
  </div>
</template>
<script>
// 导入组件
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Toobar from "../common/Toobar.vue";
export default {
  components: {
    Header,
    Footer,
    Toobar
  }
};
</script>

