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
*     Initial: 2017/08/26       Chen Shuaikang
*/
<template>
  <div>
    <router-link to="/space"><div class="return"><img src="../../img/return.png" /></div></router-link>
    <img src="../../img/buluo.jpg" style="width: 100%" />
    <ul class="main">
      <li><img src="../../img/guanzhubuluo.png" class="icons" />关注的部落</li>
      <li><img src="../../img/fabiao.png" class="icons" />我的发表</li>
      <li><img src="../../img/pinglun.png" class="icons" />我的评论</li>
      <li><img src="../../img/liuyan.png" class="icons" />留言消息</li>
      <li><img src="../../img/xitong.png" class="icons" />系统通知</li>
    </ul>
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
  .return{
    position: absolute;
    top: 30px;
    left: 20px;
  }
  .main li{
    height: 100px;
    line-height: 100px;
    border-bottom: 1px solid gainsboro;
  }
  .icons{
    margin-left: 50px;
    margin-right: 30px;
    transform: translateY(10px);
  }
</style>
