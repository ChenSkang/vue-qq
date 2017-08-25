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
<div>
  <div class="my">
    <img src="../../img/computer.png"/><p>我的电脑</p>
    <p class="intro">无需数据线，手机轻松传文件。</p>
  </div>
  <div class="my">
    <img src="../../img/dayinji.png"/><p>我的打印机</p>
    <p class="intro">将文件发送到电脑连接的打印机。</p>
  </div>
  <div class="my">
    <img src="../../img/newshebei.png"/><p>发现新设备</p>
    <p class="intro">搜索附近的设备，用QQ轻松连接设备。</p>
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
  .my{
    height: 120px;
    border-bottom: 1px solid #D3DCE6;
  }
  .my p{
    margin-left: 120px;
    transform: translateY(-70px);
  }
  .my img{
    transform: translateY(25px);
    margin-left: 25px;
  }
  .intro{
    font-size: 25px;
    color: #8492A6;
  }
</style>
