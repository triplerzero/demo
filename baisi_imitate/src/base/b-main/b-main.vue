<template>
    <div class="main">
      <div class="main_con" v-for="(item,index) in data">
        <div class="author">
          <p class="avatar">
            <img :src="item.profile_image" alt="">
          </p>
          <p class="name">{{item.screen_name}}</p>
        </div>
        <div class="con">
          <p class="text">{{item.text}}</p>
          <div class="content">
            <img :src="item.cdn_img" alt="" v-if="!item.videouri">
            <video :src="item.videouri" controls v-if="item.videouri"></video>
            <audio :src="item.voiceuri" controls v-if="item.voiceuri"></audio>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
        }
      },
       props:{
         data:Array
       },
      methods:{
        // str=str.replace(/\r/g,"&nbsp;")
        // str=str.replace(/\n/g,"<br />")
      }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
.main{
  width: 100%;
  margin-top: 82px;
  overflow: hidden;
  margin-bottom: 56px;
}
.main_con{
  width: 100%;
  background: #fff;
  margin-top: 10px;
  overflow: hidden;
}
.author{
  width: 100%;
  padding: 10px;
  overflow: hidden;
}
.author p{
  float: left;
  margin-left: 10px;
  font-size: 13px;
  color: #898989;
}
.author p.avatar{
}
.author p.avatar img{
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.author p.name{
  height: 40px;
  line-height: 40px;
}
.con p.text{
  text-align: left;
  line-height: 140%;
  font-size: 16px;
  padding:0 20px ;
}
.con  div.content{

}
.con  div.content img{
  padding: 10px 20px;
  width: 100%;
}
.con  div.content video{
  padding: 10px 20px;
  width: 100%;
}
.con  div.content audio{
    padding: 10px 20px;
    width: 100%;
  }
</style>
