<template>
  <div>
    <!-- <tab-header></tab-header> -->
    <Header />
    <div class="content">
      首页
      <!-- <ol>
        <li v-for="todo in todos">{{ todo.text }}</li>
      </ol>

      <img src="../assets/bridge.png">

      <button @click="eClick()">事ffvvd件1</button>
      <a href="/login">eeee</a> -->
    </div>
  </div>
</template>
   
  <script >
  import '../css/PageHome.less' 
  import Header from '../common/Header.vue';
export default {
  name: "indexP",
  data() {
    return {

    };
  },
  methods: {

  },
  components: {
    Header,
  }
};
</script>