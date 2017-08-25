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
*     Initial: 2017/08/25       Chen Shuaikang
*/
<template>
  <div id="open">
    <div class="my">
      <img src="../../../img/qianbao.png" class="add"/><p>QQ钱包<img src="../../../img/renzheng.png" class="renzheng" /></p>
      <p class="intro">QQ钱包官方账户。为用户提供安全支付体系...</p>
    </div>
    <div class="my">
      <img src="../../../img/xinwen.png" class="add"/><p>腾讯新闻<img src="../../../img/renzheng.png" class="renzheng" /></p>
      <p class="intro">家事国事天下事，事事关心；独家深度新鲜事...</p>
    </div>
    <div class="my">
      <img src="../../../img/yinyue.png" class="add"/><p>QQ音乐<img src="../../../img/renzheng.png" class="renzheng" /></p>
      <p class="intro">大牌何其多，巅峰榜上任你点将，QQ音乐为...</p>
    </div>
    <div class="my">
      <img src="../../../img/tuandui.png" class="add"/><p>QQ团队<img src="../../../img/renzheng.png" class="renzheng" /></p>
      <p class="intro">QQ团队所有成员感谢您一路相伴，欢迎您来...</p>
    </div>
    <div class="my">
      <img src="../../../img/Kge.png" class="add"/><p>全民K歌<img src="../../../img/renzheng.png" class="renzheng" /></p>
      <p class="intro">提供全民K歌相关应用的最新资讯以及K歌比赛...</p>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  #open{
    width: 100%;
    position: absolute;
    top: 440px;
    border-top: 1px solid #8492A6;
  }
  .my{
    height: 130px;
    border-bottom: 1px solid #8492A6;
  }
  .my p{
    margin-left: 140px;
    transform: translateY(-95px);
  }
  .add{
    transform: translateY(15px);
    margin-left: 25px;
  }
  .intro{
    font-size: 30px;
    color: #8492A6;
  }
  .renzheng{
    margin-left: 10px;
  }
</style>
