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
        active:"attention"
      }
    },
    components:{
      Bottom
    }
  }
</script>

<style scoped>

</style>
