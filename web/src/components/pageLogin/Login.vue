
<template>
  <div>
    <input type="text" v-model="name">
    <input type="password" v-model="pass">
    <button @click="submitFun()">提交</button>
    <Button type="primary" plain>默认按钮</Button>
  </div>
</template>
<script>
import { Button } from 'element-ui';
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  props:['postData'],
  components: {
    Button,
  },
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

