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
*     Initial: 2017/08/27       Chen Shuaikang
*/
<template>
  <div>
    <div class="title">
      <span class="more">我的文件</span>
      <router-link to="/message">
        <div>
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">返回</p>
        </div>
      </router-link>
    </div>
    <div class="main">
      <ul>
        <li><img src="../../img/diannao.png" class="head" /><p style="margin-left: 100px">传文件/照片到我的电脑</p><img src="../../img/arrow.png" class="arrow" /></li>
        <li><img src="../../img/wenjian.png" class="head" /><p style="margin-left: 100px">面对面快传</p><img src="../../img/arrow.png" class="arrow" /></li>
        <li><img src="../../img/beifen.png" class="head" /><p style="margin-left: 100px">备份相册到微云</p><img src="../../img/arrow.png" class="arrow" /></li>
      </ul>
      <p id="myfile">我的文件</p>
      <ul>
        <li>最近文件<img src="../../img/arrow.png" class="arrow" /></li>
        <li>本机文件<img src="../../img/arrow.png" class="arrow" /></li>
        <li>电脑文件<img src="../../img/arrow.png" class="arrow" /></li>
        <li>微云文件<img src="../../img/arrow.png" class="arrow" /></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .title{
    background-color: #20A0FF;
    width: 100%;
    height: 150px;
    z-index: 999;
  }
  .arrowleft{
    position: fixed;
    top: 55px;
  }
  .more {
    position: fixed;
    left: 50%;
    top: 65px;
    transform: translateX(-50%);
    color: #fff;
  }
  #dyna{
    color: #fff;
    position: fixed;
    top: 65px;
    margin-left: 60px;
  }
  .main{
    position: absolute;
    top: 150px;
    width: 100%;
    background-color: #F9FAFC;
  }
  .main ul{
    margin-top: 45px;
    border-top: 1px solid #8492A6;
  }
  .main li{
    color: black;
    height: 100px;
    background-color: #fff;
    border-bottom: 1px solid #8492A6;
    line-height: 100px;
    text-indent: 20px;
    position: relative;
  }
  .head{
    width: 60px;
    height: 60px;
    position: absolute;
    left: 25px;
    top: 20px;
  }
  .arrow{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 30px;
  }
  #myfile{
    font-size: 30px;
    text-indent: 20px;
    height: 50px;
    line-height: 50px;
    margin-top: 5px;
    margin-bottom: -30px;
  }
</style>
