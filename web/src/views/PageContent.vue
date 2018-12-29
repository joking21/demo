<template>
  <div>
    <Header/>
    <Toobar/>
      <div class="content">
          <ArticleContent :getData='getData' :id='id'/>
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
import { getData } from "../util/request";
export default {
  data(){
    return{
      getData: getData,
      id: ''
    }
  },
  components: {
    Header,
    Footer,
    Toobar,
    ArticleContent,
  },
  created: function(){
    this.id = this.$route.params.id;
  },
};
</script>

