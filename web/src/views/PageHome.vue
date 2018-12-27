<template>
  <div>
    <Header/>
    <Toobar />
    <div class="content">
       <Article />
    </div>
    <Footer />
  </div>
</template>
   
  <script >
import "../css/PageHome.less";
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Toobar from "../common/Toobar.vue";
import Article from "../components/pageHome/Article.vue"
export default {
  // name: "indexP",
  data() {
    return {};
  },
  methods: {},
  components: {
    Header,
    Footer,
    Toobar,
    Article
  }
};
</script>