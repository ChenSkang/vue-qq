/*
* MIT License
*
* Copyright (c) 2017 TechCatsLab Inc.
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
/**
* Revision History:
*     Initial: 2017/08/22       Chen Shuaikang
*/
<template>
  <div class="sign">
    <img src="../img/backimg.jpg" class="back"/>
    <p class="logo"><img src="../img/qqicon.png" /><span>QQ</span></p>
    <div class="signin">
      <input type="text" id="account" v-model="account">
      <input type="text" id="password" v-model="password">
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
      account: '1981856494',
      password: '* * * * * * * *'
    }
  }
}
</script>

<style scoped>
  .sign{
    width: 100%;
    height: 100%;
  }
  .back{
    width: 100%;
    height: 1350px;
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
    color: #fff;
    width: 100%;
    height: 90px;
    border: none;
    border-bottom: 2px solid #fff;
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
    font-size: 30px;
  }
  .newaccount{
    color: #1d84e0;
    font-size: 30px;
    position: absolute;
    right: 0;
  }
  .promise{
    width: 100%;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 8%;
    font-size: 35px;
  }
  .promise span{
    color: #1d84e0;
    font-size: 35px;
  }
</style>
