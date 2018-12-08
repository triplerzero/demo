<template>
    <div>
      <Herder :title="title"></Herder>
      <Tab @handle="handle"></Tab>
      <Main :data="data"></Main>
      <Bottom :active="active"></Bottom>
    </div>
</template>

<script>
  import Herder from '../../base/b-header/b-header'
  import Tab from '../../base/b-tab/b-tab'
  import Bottom from '../../base/b-bottom/b-bottom'
  import axios from 'axios'
  import {url} from '../../api/getEssenceApi/getEssenceApi'
  import Main from '../../base/b-main/b-main'
    export default {
    data(){
      return {
        title:"百思",
        active:"index",
        type:1,
        data:[]
      }
    },
        components:{
          Herder,
          Tab,
          Bottom,
          Main
        },
      methods:{
      getData:function () {
        let type=this.type;
        axios.get(url,{
          params:{type}
        }).then((res)=>{
          console.log(res.data);
          this.data=res.data.list;
           console.log(this.data);
        })
      },
        handle:function (handle) {
        data:[]
        this.type=handle;
        console.log(handle);
        this.getData();
        }
      },
      created(){
        this.getData();
      }
    }
</script>

<style scoped>

</style>
