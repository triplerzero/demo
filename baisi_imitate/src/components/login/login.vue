<template>
    <div class="container">
        <Header :title="title"></Header>
        <div class="content">
        <el-input suffix-icon="el-icon-edit" placeholder="请输入用户名" v-model="user"></el-input>
        <el-input type="password" suffix-icon="el-icon-edit" placeholder="请输入密码" v-model="pwd"></el-input>
        <el-button type="danger" class="registerBtn" @click="handleLogin">登录</el-button>
        <router-link to="/register" class="link">已有账号，前往注册 <i class="el-icon-arrow-right"></i></router-link>
        </div>
    </div>
</template>

<script>
     import Header from "../../base/b-header/b-header";
     import axios from 'axios';
    export default {
        data(){
          return {
                title:"登录",
                user:'',
                pwd:''
          }
        },
        components:{
            Header
        },
        methods: {
          handleLogin:function () {
            let user=this.user;
            let pwd=this.pwd;
            axios.post('user/login',{user,pwd}).then(res=>{
              if(res.status==200&&res.data.code==0){
                console.log(res.data)
                console.log("登录成功")
              }else {
                this.$message({
                  message: res.data.msg,
                  type: 'error',
                  center:'true'
                });
              }
            })
          }
        }
    }
</script>

<style>
    .content{
        clear: both;
    }
    .el-input{
        margin-bottom: 10px;
    }
    .el-input__inner:focus{
        border-color: #f56c6c;
    }
    .registerBtn{
        width: 100%;
        margin-bottom: 10px;
    }
    .link{
        font-size: 12px;
        color: #f56c6c;
        float: right;
        cursor: pointer;
        height: 30px;
        line-height: 30px;
    }
    .link:hover{
        color: #f56c6c;
    }
    .content{
        margin-top: 100px;
    }
</style>
