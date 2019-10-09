<template>
  <div class="main">
      <Header/>
      <div class="content">
          <Nav class="nav"/>
           <!-- 路由出口 -->
             <router-view></router-view>

          <!-- <Tab/> -->
      </div>
  </div>
</template>

<script>
import Header from './Header'
import axios from 'axios'
import qs from 'qs'
import Nav from './Nav'
import Tab from './Tab'
export default {
  name: 'Main',
  props: {   
  },
  //导入想要使用的组件
  components: {
      Header,
        Nav,
        Tab
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
    .content {
        display: flex;
    }

    .nav {
        width: 200px;
    }

  
</style>
