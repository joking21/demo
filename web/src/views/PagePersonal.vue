<template>
  <Container>
  <Aside width="200px">
     <dAside />
  </Aside>
  <Container style="flex-direction: column; height: 100vh;">
    <Header style="padding: 0px">
        <dHeader personal="1" />
    </Header>
    <Main>
        <div v-if='this.$store.state.personal==="1"'>
           <Information />
        </div>
         <div v-if='this.$store.state.personal==="2"'>
           222
        </div>
         <div v-if='this.$store.state.personal==="3"'>
           333
        </div>
    </Main>
    <Footer style="height: auto; padding: 0px;" class="personal">
        <dFooter />
    </Footer>
  </Container>
</Container>

</template>
<style>

</style>
<script>
// 导入组件
import dHeader from "../common/Header.vue";
import dFooter from "../common/Footer.vue";
import dAside from "../common/Aside.vue";
// import Publish from "../components/pagePublish/Publish.vue";
import { postData, getData } from "../util/request";
import { Container, Aside, Header, Main, Footer } from 'element-ui';
import Information from "../components/pagePersonal/Information.vue"
export default {
  data() {
    return {
      postData: postData,
      getData: getData,
    };
  },
  components: {
    Container,
    Aside,
    Header,
    Main,
    Footer,
    dHeader,
    dFooter,
    dAside,
    Information
  }
};
</script>


