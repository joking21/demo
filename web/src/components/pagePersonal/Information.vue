<template>
  <div class="personal">
    <div class="show-info" v-if="!revise">
      <div>
        <img class="img-show" src="../../assets/test1.jpg" alt>
      </div>
      <div>用户名: &nbsp;&nbsp;******</div>
      <div>密码:&nbsp;&nbsp;******</div>
      <div>
        <Button plain size="small" @click="reviseFun">修&nbsp;&nbsp;改</Button>
      </div>
    </div>
    <div v-if="revise">
      <div>用户名：
        <Input v-model="name" placeholder="请输入用户名"/>
      </div>
      <div>密码：
        <Input v-model="password" placeholder="请输入用户名"/>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.personal {
  .show-info {
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    .img-show {
      width: 100px;
      height: 100px;
      border: 1px solid #ff0000;
      display: inline-block;
      border-radius: 100px;
    }
  }
}
</style>
<script>
import { Input, Button } from "element-ui";
export default {
  data() {
    return {
      name: "",
      password: "",
      revise: false
    };
  },
  components: {
    Input,
    Button
  },
  methods: {
    reviseFun() {
      this.revise = true;
    }
  }
};
</script>


