<template>
  <div class="sign">
    <p class="logo"><img src="../img/qqicon.png" /><span>QQ</span></p>
    <div class="signin">
      <input type="text" id="account">
      <input type="text" id="password">
      <router-link to="/message"><el-button type="primary" class="sign-btn">登录</el-button></router-link>
      <span class="forgetpw">忘记密码?</span>
      <span class="newaccount">新用户注册</span>
    </div>
    <p class="promise">登录即代表阅读并同意<span>服务条款</span></p>
  </div>
</template>

<script>
export default {
  name: 'sign',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  .sign{
    width: 100%;
    height: 1136px;
    background-image: url("../img/backimg.jpeg");
    background-repeat: inherit;
  }
  .logo{
    position: absolute;
    top: 18%;
    left: 8%;
  }
  .logo img{
    width: 20%;
  }
  .logo span{
    font-size: 75px;
    color: #fff;
  }
  .signin{
    width: 84%;
    position: absolute;
    top: 28%;
    left: 8%;
   }
  .signin input{
    background: none;
    width: 100%;
    height: 90px;
    border: none;
    border-bottom: 1px solid #fff;
  }
  .sign-btn{
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;
    height: 75px;
    font-size: 40px;
  }
  .forgetpw{
    color: #1d84e0;
    font-size: 25px;
  }
  .newaccount{
    color: #1d84e0;
    font-size: 25px;
    position: absolute;
    right: 0;
  }
  .promise{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 8%;
    font-size: 25px;
  }
  .promise span{
    color: #1d84e0;
  }
</style>
