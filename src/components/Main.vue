<template>
  <div class="main">
      <Header/>
      <h1>This is main</h1>
  </div>
</template>

<script>
import Header from './Header'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Main',
  props: {   
  },
  //导入想要使用的组件
  components: {
      Header
  },

  data() {
      return {
          userName: '',
          roleName: ''
      }
  },

  methods: {
      getCurrentUserInfo(){
          axios.get('/user/getCurrentUserInfo').then(response => {
               console.log(response)             
           
           })
      }
  },

  mounted(){
       
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
