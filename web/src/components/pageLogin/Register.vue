<template>
  <div class="register">
    <div class="panel">
      <div class="info">
        <Row>
          <Col :span="6" style="text-align: right;">
            <span class="name">用户名：</span>
          </Col>
          <Col :span="18">
            <input type="text" v-model="name" maxlength="20">
          </Col>
        </Row>
        <Row>
          <Col :span="6" style="text-align: right;">
            <span class="name">密码：</span>
          </Col>
          <Col :span="18">
            <input type="text" v-model="password" maxlength="20">
          </Col>
        </Row>
        <Row>
          <Col :span="6" style="text-align: right;">
            <span class="name">验证码：</span>
          </Col>
          <Col :span="18">
            <input type="text" v-model="verif" maxlength="10">
            <div id="verif"></div>
          </Col>
        </Row>
        <Row>
          <Col :span="24" style="text-align: center;">
            <button @click="submit">注&nbsp;&nbsp;册</button>
          </Col>
        </Row>
        <router-link to="/login">
          <p style="color: #0FF; text-align: right; padding-right: 50px; font-size: 14px;">已有账号，去登录</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.register {
  background: url("../../assets/register.jpg");
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  .panel {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 600px;
    height: 300px;
    margin: auto;
    background: rgba(255, 255, 255, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 5px #fff;
  }
  .info {
    padding: 15px;
    margin-top: 20px;
    .name {
      font-size: 16px;
      color: #0ff;
      line-height: 33px;
    }
    input {
      padding: 0 15px !important;
      font-size: 16px;
      color: #0ff;
      border: 1px solid rgb(19, 28, 43) !important;
      display: block;
      height: 33px;
      width: 272px;
      margin-bottom: 10px;
      outline: 0;
      background-color: rgba(19, 28, 43, 0.4);
    }
    input::-webkit-input-placeholder {
      color: #0ff;
      font-size: 16px;
    }
    button {
      outline: none;
      font-weight: 600;
      width: 200px;
      height: 33px;
      background: rgba(19, 28, 43, 0.4);
      color: #fff;
      font-size: 20px;
      margin-top: 15px;
      border: 1px solid rgb(19, 28, 43) !important;
      box-shadow: 0 0 5px rgba(19, 28, 43, 0.7);
      cursor: pointer;
    }
    button:hover {
      background: rgba(19, 28, 43, 0.8);
      color: #fff;
    }
  }
}
</style>

<script>
import { Row, Col } from "element-ui";
import getGVerify from "./verification";
import { warningTip } from "../../util/notice";
export default {
  data() {
    return {
      verifyCode: "",
      name: "",
      password: "",
      verif: ""
    };
  },
  props: ["postData"],
  components: {
    Row,
    Col
  },
  mounted: function() {
    this.verifyCode = new getGVerify("verif");
  },
  methods: {
    submit() {
      if (!this.name) {
        warningTip("请输入名称");
        return;
      }
      if (!this.password) {
        warningTip("请输入密码");
        return;
      }
      if (!this.verifyCode.validate(this.verif)) {
        warningTip("验证码有误");
        return;
      }
      this.postData(
        "PageLogin.userAdd",
        { name: this.name, password: this.password },
        this.handleSuccess
      );
    },
    handleSuccess(res) {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>


