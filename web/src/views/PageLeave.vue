<template>
  <div>
    <Header/>
    <Toobar/>
    <div class="content">
      <Leave />
    </div>
    <Footer/>
  </div>
</template>
<script>
// 导入组件
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Toobar from "../common/Toobar.vue";
import Leave from "../components/pageLeave/Leave.vue";
export default {
  components: {
    Header,
    Footer,
    Toobar,
    Leave
  }
};
</script>

