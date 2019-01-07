<template>
  <div>
    <Header/>
    <Toobar/>
      <div class="content">
          <Article :getData='getData' />
      </div>
    <Footer/>
  </div>
</template>
<script>
// 导入组件
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";
import Toobar from "../common/Toobar.vue";
import Article from "../components/pageArticle/Article.vue";
import { getData } from "../util/request";
export default {
  data(){
    return{
      getData: getData,
    }
  },
  components: {
    Header,
    Footer,
    Toobar,
    Article,
  },
  created: function(){
    
  },
};
</script>

