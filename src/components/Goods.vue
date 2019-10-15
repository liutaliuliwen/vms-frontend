<template>
  <div class="goods">
      <!-- <h1>Goods</h1> -->
      
      <GoodsType/>
      <GoodsManage/>
  </div>
</template>

<script>
import GoodsType from './GoodsType'
import GoodsManage from './GoodsManage'
export default {
  name: 'Goods',
    //导入想要使用的组件
  components: {
      GoodsManage,GoodsType
  },

  data() {
  },

  methods: {

  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
