<template>
  <div style="height: 100vh; background: #545c64;">
    <!--  @open="handleOpen"
    @close="handleClose"-->
    <Menu
      style="border-right: none"
      :default-active="this.$store.state.personal"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="selectJump"
    >
      <MenuItem index="1">
        <i class="icon-gerenxinxi iconfont" style="font-size: 20px;  margin-right: 5px;"></i>
        <span slot="title">个人信息</span>
      </MenuItem>
      <MenuItem index="2">
        <i class="icon-navicon-wzgl iconfont" style="font-size: 20px;  margin-right: 5px;"></i>
        <span slot="title">我的文章</span>
      </MenuItem>
      <MenuItem index="3">
        <i class="icon-wenzhangfenxiang iconfont" style="font-size: 20px;  margin-right: 5px;"></i>
        <span slot="title">发布文章</span>
      </MenuItem>
    </Menu>
  </div>
</template>
<style>
</style>
<script>
import { Menu, MenuItem } from "element-ui";
export default {
  components: {
    Menu,
    MenuItem
  },
  methods: {
    selectJump(index) {
        this.$store.commit('changePersonal', index);
    }
  }
};
</script>


