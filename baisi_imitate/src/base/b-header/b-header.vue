<template>
    <div id="nav">
        <p class="title"><span class="icon" @click="back"><i class="el-icon-arrow-left"></i></span><span class="text">{{title}}</span></p>
    </div>
</template>

<script>
    export default {
        data(){
           return{}
        },
        props:{
            title:String
        },
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  #nav {
      background:#f56c6c;
      padding: 15px 5%;
      font-weight:bold ;
      color: #fff;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 100;
    }
    p.title{
        margin: 0;
        width: 100%;
        text-align: center;
    }
    .icon{
       float: left;
    }
    .text{
      padding-right: 16px;
    }
</style>
