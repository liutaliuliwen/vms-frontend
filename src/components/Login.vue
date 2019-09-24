<template>
  <div class="login">
       <h1>进销存系统</h1>
      <el-form label-position="left" status-icon label-width="80px" :model="loginForm" ref="loginForm" :rules="rules">
        <el-form-item label="用户名" prop="userName">
            <el-input v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>  
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submitButton">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>           
        </el-form-item>
        <p class="copyright">© 2018-2019 <a>物道科技</a>  版权所有</p>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'Login',
  props: {
    
  },
  data() {
      return {
          loginForm: {
              userName: "",
              password: ""
          },
          rules: {
              userName: [
                  {required: true, message: '请输入用户名称', trigger: 'blur'}
              ],
              password:[
                  {required: true, message: '请输入用户密码', trigger: 'blur'}
              ]
          }
      }
  },
  methods: {
      submitForm(formName) {
            this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.loginForm)
           axios.post('/user/login',qs.stringify(this.loginForm)).then(response => {
               console.log(response)
               const {success, roleList} = response.data
               if(success){
                  this.$router.push('/main') 
               }
    
           })
          } else {
            // console.debug('error submit!!')
            return false
          }
        });
      },
      resetForm(formName) {
          this.$refs[formName].resetFields()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
}
.login {
    border: 1px solid #eee;
    padding: 20px;
    border-radius: 5px;
    width: 400px;
    margin: 20px auto;
}
.copyright {
    text-align: center;
}

.submitButton {
    margin-left: 60px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
