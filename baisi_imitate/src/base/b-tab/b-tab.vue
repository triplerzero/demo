<template>
    <div class="b_tab">
      <ul class="tab_lists">
        <li :class="active==1?'active':''" @click="handleAll">全部</li>
        <li :class="active==41?'active':''" @click="handleMovie">视频</li>
        <li :class="active==10?'active':''" @click="handleImg">图片</li>
        <li :class="active==29?'active':''" @click="handleJoke">段子</li>
        <li :class="active==31?'active':''" @click="handleAudio">声音</li>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          active:1
        }
      },
       methods:{
         handleAll:function () {
           this.$emit('handle',1);
           this.active=1;
         },
         handleMovie:function () {
           this.$emit('handle',41);
           this.active=41;
         },
         handleImg:function () {
           this.$emit('handle',10);
           this.active=10;
         },
         handleJoke:function () {
           this.$emit('handle',29);
           this.active=29;
         },
         handleAudio:function () {
           this.$emit('handle',31);
           this.active=31;
         }
       }
    }
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  .b_tab{
    position: fixed;
    left: 0;
    top: 51px;
    height: 30px;
    width: 100%;
    background: #ffffff;
    z-index: 100;
  }
  .tab_lists{
    height: 30px;
    width: 100%;
    overflow: hidden;
  }
  .tab_lists li{
    width: 20%;
    float:left;
    height: 30px;
    line-height: 30px;
  }
  .active{
    border-bottom: 1px solid #f56c6c;
    color: #f56c6c;
  }
</style>
