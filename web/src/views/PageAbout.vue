<template>
<div class="d-container">
   <div class="d-header"></div>
   <div class="d-main">
     hahdhasdsads
     <p>hahdhasdsadshahdhasdsadshahdhasdsadshahdhasdsads</p>
     <p>hahdhasdsadshahdhasdsadshahdhasdsadshahdhasdsads</p>
     <p>hahdhasdsadshahdhasdsadshahdhasdsadshahdhasdsads</p>
   </div>
   <div class="d-footer"></div>
</div>
</template>
<style>
.d-container{
  position: relative;
  min-height: 100vh;
  width: 100%;
}
.d-header{
  height: 20px;
  width: 100%;
  background: #ff0000;
}
.d-main{
  min-height: 20px;
  width: 100%;
  background: #ffff00;
  padding-bottom: 40px;
}
.d-footer{
  position: absolute;
  bottom: 0px;
  height: 20px;
  width: 100%;
  background: #0fff00;
}
</style>

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
  },
  methods:{
    test(){
      var tt = function(x){
        console.log(this.x);
      }
      // var 
    }
  }
};
</script>

