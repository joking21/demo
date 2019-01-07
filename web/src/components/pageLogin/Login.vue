
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
      <div style="position: absolute; bottom: 10px; right: 0px;">
        <router-link to="/register">
          <p style="color: #0FF; text-align: right; padding-right: 50px; font-size: 14px;">没有账号，去注册</p>
        </router-link>
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
      this.getData(
        "PageLogin.login",
        { name: this.name, password: this.pass },
        this.dealUser
      );
    },
    dealUser(res) {
      sessionStorage.setItem("token", JSON.stringify(res.result[0]));
      this.$store.commit("changeName");
      location.href = "/";
    }
  }
};
</script>

