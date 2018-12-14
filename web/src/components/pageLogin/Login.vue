
<template>
  <div>
    <BgTest></BgTest>
    <div class="login-btn">
      <div class="login-model">
        <i class="login-name iconfont icon-yonghuming" title="用户名"/>
        <input type="text" v-model="name">
        <i class="login-password iconfont icon-mima" title="密码"/>
        <input type="password" v-model="pass">
        <i class="login-icon iconfont icon-denglu" @click="submitFun()"/>
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
  props: ["getData"],
  components: {
    Button,
    BgTest: BgTest
  },
  methods: {
    submitFun() {
      this.getData("PageLogin.login", { name: this.name, password: this.pass }, this.dealUser);
    },
    dealUser() {
      // sessionStorage.setItem("token", this.name);
      // this.$store.commit("changeName");
      // location.href = "/";
    }
  }
};
</script>

