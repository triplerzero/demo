<template>
    <div class="bottom">
      <ul class="bottom_list">
        <li><Router-link to="/" :class="active=='index'?'active':''">
          <p class="icon"><i class="el-icon-menu"></i></p>
          <p class="text">精华</p>
        </Router-link></li>
        <li><Router-link to="/new" :class="active=='new'?'active':''">
          <p class="icon"><i class="el-icon-time"></i></p>
          <p class="text">推荐关注</p>
        </Router-link></li>
        <li><Router-link to="/attention" :class="active=='attention'?'active':''">
          <p class="icon"><i class="el-icon-star-on"></i></p>
          <p class="text">关注</p>
        </Router-link></li>
        <li><Router-link to="/me" :class="active=='me'?'active':''">
          <p class="icon"><i class="el-icon-view"></i></p>
          <p class="text">我的</p>
        </Router-link></li>
      </ul>
    </div>
</template>

<script>
    export default {
      props:{
        active:String
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
.bottom{
  background: #f56c6c;
  height: 54px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.bottom_list{
    width: 100%;
    height: 54px;
    padding: 4px 0;
  }
.bottom_list li{
    width: 25%;
    height: 50px;
    float: left;
  }
.bottom_list li a{
  display: block;
  height: 50px;
  color: #fff;
}
  .icon{
    font-size: 26px;
  }
  .text{
    font-size: 12px;
  }
  .bottom_list li a.active{
    color: #feffa8;
  }
</style>
