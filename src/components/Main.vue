<template>
  <div class="main">
      <Header/>
      <div class="content">
          <Menu class="menu"/>
          <Tab class="tab"/>
      </div>
  </div>
</template>

<script>
import Header from './Header'
import Menu from './Menu'
import Tab from './Tab'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'Main',
  props: {   
  },
  //导入想要使用的组件
  components: {
      Header,
      Menu,
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
           
           }).catch(e => {
               console.error(e)
           })
      }
  },

  mounted(){
       this.getCurrentUserInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
        display: flex;
    }

    .menu {
        width: 200px;
    }

    .tab {
        flex: 1;
    }
</style>
