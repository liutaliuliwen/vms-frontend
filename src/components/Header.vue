<template>
  <div class="header">
     <!-- <h2>进销存管理系统</h2>
     <h3>Powered By 道物科技</h3>
     <p class="welcome">欢迎你</p> -->
     <div></div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {   

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        height: 100px;
        background: skyblue;
        position: relative;
        overflow: hidden;
    }
    .header > h2 {
        margin: 0;
        position: absolute;
        top: 40px;
        left: 40px;
    }
    .header > h3 {
        position: absolute;
        top: 50px;
        left: 100px;
    }

    .welcome {
        position: absolute;
        top: 50px;
        left: 500px;
    }
</style>
