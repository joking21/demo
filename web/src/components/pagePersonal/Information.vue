<template>
  <div class="personal">
    <div class="show-info" v-if="!revise">
      <div>
        <img :src="imageUrl" class="img-show">
      </div>
      <div>用户名: &nbsp;&nbsp;{{name}}</div>
      <div>密&nbsp;码:&nbsp;&nbsp;*****</div>
      <div>
        <Button plain size="small" @click="reviseFun(true)">修&nbsp;&nbsp;改</Button>
      </div>
    </div>
    <div v-if="revise">
      <Form
        label-width="100px"
        :rules="rules2"
        style="width: 500px; margin: 0 auto;"
        ref="userForm"
        :model="userForm"
      >
        <FormItem label="头像：">
          <div>
            <Upload
              class="avatar-uploader"
              :http-request="uploadSectionFile"
              :show-file-list="false"
              action
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="img-show">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </Upload>
          </div>
        </FormItem>
        <FormItem label="用户名：" prop="name">
          <Input v-model="name" readonly/>
        </FormItem>
        <FormItem label="密码：" prop="password">
          <Input type="password" v-model="userForm.password" autocomplete="off"/>
        </FormItem>
        <FormItem label="确认密码：" prop="confirmPassword">
          <Input type="password" v-model="userForm.confirmPassword" autocomplete="off"/>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="submit">修改</Button>
          <Button @click="reviseFun(false)">取消</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<style lang="less">
.personal {
  .show-info {
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
  .img-show {
    width: 100px;
    height: 100px;
    border: 1px solid #ff0000;
    display: inline-block;
    border-radius: 100px;
  }
}
</style>
<script>
import { Input, Button, Upload, Form, FormItem } from "element-ui";
import axios from "axios";
import { parseImg } from "../../util/util";
import { uploadFile, getData } from "../../util/request";
import { warningTip } from "../../util/notice";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.userForm.confirmPassword !== "") {
          this.$refs.userForm.validateField("confirmPassword");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      name: "",
      password: "",
      confirmPassword: "",
      revise: false,
      imageUrl: "",
      imgData: "",
      userForm: {
        password: "",
        confirmPassword: ""
      },
      rules2: {
        password: [{ validator: validatePass, trigger: "change" }],
        confirmPassword: [{ validator: validatePass2, trigger: "change" }]
      }
    };
  },
  components: {
    Input,
    Button,
    Upload,
    Form,
    FormItem
  },
  created: function() {
    getData(
      "PagePersonal.getUser",
      { id: JSON.parse(sessionStorage.getItem("userInformation")).id },
      this.handleUser
    );
  },
  methods: {
    reviseFun(bull) {
      this.revise = bull;
    },
    uploadSectionFile(param) {
      this.imgData = param.file;
      param.onSuccess("OK");
    },
    successFun(res) {
      this.reviseFun(false);
      getData(
      "PagePersonal.getUser",
      { id: JSON.parse(sessionStorage.getItem("userInformation")).id },
      this.handleUser
    );
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    submit() {
      this.$refs["userForm"].validate(valid => {
        if (valid) {
          const formData = new FormData();
          formData.append("file", this.imgData);
          formData.append(
            "userId",
            JSON.parse(sessionStorage.getItem("userInformation")).id
          );
          formData.append("userName", this.name);
          formData.append("userPassword", this.userForm.password);
          uploadFile("PagePersonal.updateUser", formData, this.successFun);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleUser(res) {
      this.imageUrl = parseImg(res.result[0] && res.result[0].img);
      this.name = res.result[0] && res.result[0].name;
      this.password = res.result[0] && res.result[0].password;
      this.confirmPassword = res.result[0] && res.result[0].password;
      this.userForm = {
        password: res.result[0] && res.result[0].password,
        confirmPassword: res.result[0] && res.result[0].password
      };
    }
  }
};
</script>


