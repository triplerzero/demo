<template>
    <div class="con">
        <Header :title="title"></Header>
        <div class="content">
        <el-input suffix-icon="el-icon-edit" placeholder="请输入用户名" v-model="user"></el-input>
        <el-input  type="password" suffix-icon="el-icon-edit" placeholder="请输入密码" v-model="pwd"></el-input>
          <el-input  type="password" suffix-icon="el-icon-edit" placeholder="确认密码" v-model="cfpwd"></el-input>
        <el-button type="danger" class="registerBtn" @click="handleRegister()">注册</el-button>
        <router-link to="/login" class="link">已有账号，前往登录 <i class="el-icon-arrow-right"></i></router-link>
        </div>
    </div>
</template>

<script>
    import Header from "../../base/b-header/b-header";
    import axios from "axios";
    export default {
        data(){
            return{
                title:"注册",
                user:'',
                pwd:'',
                cfpwd:''
            }
        },
        components:{
            Header
        },
        methods:{
          handleRegister:function () {
            let user=this.user;
            let pwd=this.user;
            let cfpwd=this.cfpwd;
            if(pwd!=cfpwd){
              this.$message({
                message: '两次密码不一致',
                type: 'error',
                center:'true'
              });
              return;
            }
              axios.post('/user/register',{user,pwd}).then(res=>{
                if(res.status==200&&res.data.code==0){
                  console.log(res.data);
                  console.log("注册成功");
                  this.$message({
                    message: '注册成功',
                    type: 'success',
                    center:'true'
                  });
                  this.$router.push('/login');
                }else {
                  this.$message({
                    message: res.data.msg,
                    type: 'error',
                    center:'true'
                  })
                }
              })
          }
        },
        created(){

        },
      watch:{
          // user:function(){
          //   console.log(this.user);
          // }
    }
    }
</script>

<style>
    .content{
        margin-top: 100px;
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

</style>
