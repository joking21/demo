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
      <a>注册</a>
    </div>
  </div>
  <!-- <div>
    <div class="header">
      <Row v-if="token">
        <Col :span="2" :offset="22">
          <Menu class="el-menu-demo header-menu-demo" mode="horizontal">
            <Submenu index="1">
              <template slot="title">{{token}}</template>
              <MenuItem class="header-menu-itme" index="1-1" @click="loginOut()">退出</MenuItem>
            </Submenu>
          </Menu>
        </Col>
      </Row>
      <Row v-else>
        <Col :span="2" :offset="22">
          <a href="/login">登录</a>&nbsp;|&nbsp;<a>注册</a>
        </Col>
      </Row>
    </div>
 <Carousel arrow="always">
      <CarouselItem v-for="item in 3" :key="item" :class="'baner'+item">
      </CarouselItem>
    </Carousel>
  </div>-->
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
      // location.href = "/login";
    }
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  }
};
</script>
