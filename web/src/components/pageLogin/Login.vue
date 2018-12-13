
<template>
  <div>
    <BgTest></BgTest>
    <div class="login-btn">
      <div class="login-model">
        <input type="text" v-model="name" placeholder="用户名">
        <input style="padding-right: 30px; width: 310px;" type="password" v-model="pass" placeholder="密码">
        <i class="login-icon iconfont icon-denglu1" />
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "element-ui";
import BgTest from "./Bg.vue";
export default {
  data() {
    return {
      name: "",
      pass: ""
    };
  },
  props: ["postData"],
  components: {
    Button,
    BgTest: BgTest
  },
  methods: {
    submitFun() {
      console.log(this.name);
      this.postData("Login.userAdd", { name: this.name, password: this.pass });
      //    const $this = this;
      //    sessionStorage.setItem("token", $this.name);
      //    $this.$store.commit('changeName');
      //    location.href='/';
    }
  }
};
</script>

