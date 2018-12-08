<template>
  <div>
    <Bottom :active="active"></Bottom>
  </div>
</template>

<script>
  import Bottom from '../../base/b-bottom/b-bottom'
  export default {
    data(){
      return {
        active:"me"
      }
    },
    components:{
      Bottom
    }
  }
</script>

<style scoped>

</style>
