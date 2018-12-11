<template>
  <div>
    <tab-header></tab-header>
    <div class="tempList">
      <ol>
        <li v-for="todo in todos">{{ todo.text }}</li>
      </ol>
       <!-- <img src="./assets/bridge.png" /> -->
       <!-- <img src="./../assets/bridge.png" /> -->
       <img src="../assets/bridge.png" />
      <!-- <img src="D:\practiceByme\demo\web\src\views\page" /> -->
      <button @click="eClick()">事ffvvd件1</button>
      <!-- <a href="/login">eeee</a> -->
    </div>
  </div>
</template>
   
  <script >
    export default {
    name: "indexP",
    data() {
        return {
        todos: [
            { text: "Learn JavaScript" },
            { text: "Learn Vue" },
            { text: "Build something awesome" }
        ]
        };
    },
    methods: {
        eClick() {
        console.log(9999);
        }
    },
    components: {}
 };
</script>