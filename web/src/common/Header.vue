<template>
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
        <a href="/login">登录</a>
      </Col>
    </Row>
  </div>
</template>
<script>
import ToobarTab from "./toobar.vue";
import { Menu, MenuItem, Submenu, Row, Col } from "element-ui";
export default {
  //   name: "header",
  components: {
    Menu,
    MenuItem,
    Submenu,
    Row,
    Col
  },
  methods: {
    loginOut() {
      sessionStorage.removeItem("token");
      this.$store.commit("changeName");
      location.href = "/login";
    }
  },
  computed: {
    token() {
      return this.$store.state.token;
    }
  }
};
</script>
