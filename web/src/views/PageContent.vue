<template>
  <div>
    <Header/>
    <Toobar/>
      <div class="content">
          <ArticleContent />
          {{this.$route.params.id}}
      </div>
    <Footer/>
  </div>
</template>
<script>
// 导入组件
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Toobar from "../common/Toobar.vue";
import ArticleContent from "../components/pageContent/ArticleContent.vue";
export default {
  components: {
    Header,
    Footer,
    Toobar,
    ArticleContent,
  }
};
</script>

