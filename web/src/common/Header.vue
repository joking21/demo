<template>
  <div class="header">
    <div v-if="token" class="has-user">
      <Menu class="el-menu-demo header-menu-demo" mode="horizontal">
        <Submenu index="1">
          <template slot="title">{{JSON.parse(token).name}}</template>
          <MenuItem class="header-menu-itme" index="1-1" @click="loginOut()">退出</MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div v-else class="no-user">
      <a href="/login">登录</a>&nbsp;|&nbsp;
      <a href="/register">注册</a>
    </div>
  </div>
</template>
<script>
import {
  Menu,
  MenuItem,
  Submenu,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "element-ui";
export default {
  //   name: "header",
  components: {
    Menu,
    MenuItem,
    Submenu,
    Row,
    Col,
    Carousel,
    CarouselItem
  },
  methods: {
    loginOut() {
      sessionStorage.removeItem("token");
      this.$store.commit("changeName");
      location.reload();
    }
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  }
};
</script>
