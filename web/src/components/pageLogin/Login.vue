<template>
  <div>
    <input type="text" v-model="name">
    <input type="password" v-model="pass">
    <button @click="submitFun()">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  props:['postData'],
  methods: {
    submitFun() {
      console.log(this.name);
      this.postData('Login.userAdd', {name: this.name,password: this.pass});
      //    const $this = this;
      //    sessionStorage.setItem("token", $this.name);
      //    $this.$store.commit('changeName');
      //    location.href='/';
    }
  }
};
</script>