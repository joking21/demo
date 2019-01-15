<template>
  <div class="header">
    <router-link v-if="personal"  to="/">
      <i class="icon-fanhui iconfont" style="z-index: 100; font-size: 26px; font-weight: 600; position: absolute;"/>
    </router-link>
    <div v-if="userInformation" class="has-user">
      <Menu class="el-menu-demo header-menu-demo" mode="horizontal">
        <Submenu index="1">
          <template slot="title">{{JSON.parse(userInformation).name}}</template>
          <MenuItem class="header-menu-itme" index="1-1">
            <router-link to='/personal'> 个人中心 </router-link>
          </MenuItem>
          <MenuItem class="header-menu-itme" index="1-2" @click="loginOut()">退出</MenuItem>
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
  props: ['personal'],
  methods: {
    loginOut() {
      sessionStorage.removeItem("userInformation");
      this.$store.commit("changeName");
      location.href = '/';
    }
  },
  computed: {
    userInformation() {
      return this.$store.state.userInformation;
    }
  }
};
</script>
