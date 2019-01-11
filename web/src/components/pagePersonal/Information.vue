<template>
  <div class="personal">
    <div class="show-info" v-if="!revise">
      <div>
        <img class="img-show" src="../../assets/test1.jpg" alt>
      </div>
      <div>用户名: &nbsp;&nbsp;******</div>
      <div>密&nbsp;码:&nbsp;&nbsp;******</div>
      <div>
        <Button plain size="small" @click="reviseFun">修&nbsp;&nbsp;改</Button>
      </div>
    </div>
    <div v-if="revise">
      <div>
        <Upload
          class="avatar-uploader"
          :http-request='uploadSectionFile'
          :show-file-list="false"
          action=''
          :before-upload="beforeAvatarUpload"
          ref="upload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </Upload>
      </div>
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
import { Input, Button, Upload } from "element-ui";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      password: "",
      revise: false,
      imageUrl: ''
    };
  },
  props:['postData'],
  components: {
    Input,
    Button,
    Upload
  },
  methods: {
    reviseFun() {
      this.revise = true;
    },
    uploadSectionFile(param){
      console.log(param.file);
      // return true;
      // console.log(JSON.stringify(param.file))
      // lastModified: 1547025602927
      // lastModifiedDate: Wed Jan 09 2019 17:20:02 GMT+0800 (中国标准时间) {}
      // name: "test1.jpg"
      // size: 16020
      // type: "image/jpeg"
      // uid: 1547111577518
      // webkitRelativePath: ""
      // this.postData('PageCommon.imageUpload',param.file, this.successFun )

       const formData = new FormData();
        const file = this.$refs.upload.uploadFiles[0];
        console.log(file);
        const headerConfig = { 'Content-Type': 'multipart/form-data' };
        if (!file) { // 若未选择文件
          alert('请选择文件');
          return;
        }
        formData.append('file', param.file);
        //  formData.append('file', file);
        // console.log(formData);
        // formData.append('name', this.name);
        // formData.append('age', this.age);
        // this.$http.post('/files/upload/image', formData, headerConfig).then(res => {
        //   console.log(res);
        // })
        console.log(formData);
            axios.post('/dw/files/upload/image', formData, headerConfig)
        .then(function (response) {
         console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          
        });
    },
    successFun(res){
      consle.log(res);
    },
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(this.imageUrl);
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
    }
  }
};
</script>


