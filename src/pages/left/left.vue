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
    <img src="../../img/spaceback.jpg" style="width: 100%" />
    <div class="return" onclick="window.history.go(-1)"><img src="../../img/return.png" />返回</div>
    <router-link to="/erweima">
      <img src="../../img/erweima.png" class="erweima" />
    </router-link>
    <div class="main">
      <router-link to="/myself">
        <img src="../../img/qqhead.jpg" class="head" />
        <p class="username">{{name}}</p>
        <p class="styles">{{styles}}</p>
      </router-link>
      <ul class="functions">
        <li><img src="../../img/huiyuan.png" />了解会员特权</li>
        <li><img src="../../img/qianbaotwo.png" />QQ钱包</li>
        <li><img src="../../img/gexingzhuangban.png" />个性装扮</li>
        <li><img src="../../img/shoucang.png" />我的收藏</li>
        <li><img src="../../img/xiangce.png" />我的相册</li>
        <router-link to="/file">
          <li><img src="../../img/wenjian.png" />我的文件</li>
        </router-link>
        <li><img src="../../img/mingpian.png" />我的名片夹</li>
        <router-link to="/setup"><li><img src="../../img/setup.png" />设置</li></router-link>
      </ul>
      <div class="weather">
        <p class="temperature">17°</p>
        <p class="city">保定市</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: '慢走 ♡',
        styles: '你见过四个角的星星吗'
      }
    }
  }
</script>

<style scoped>
  .return{
    height: 50px;
    position: absolute;
    top: 50px;
    left: 20px;
  }
  .return img{
    transform: translateY(10px);
  }
  .erweima{
    position: absolute;
    right: 20px;
    top: 50px;
  }
  .main{
    position: absolute;
    top: 200px;
    width: 100%;
    background: rgba(255, 255, 255, .4);
  }
  .head{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-left: 30px;
    margin-top: 100px;
  }
  .username{
    color: black;
    font-size: 50px;
    margin-left: 210px;
    margin-top: -120px;
  }
  .styles{
    color: black;
    font-size: 30px;
    margin-left: 210px;
  }
  .functions{
    margin-top: 80px;
  }
  .functions li{
    height: 100px;
    line-height: 100px;
    color: black;
  }
  .functions li img{
    margin-left: 50px;
    margin-right: 20px;
    transform: translateY(10px);
  }
  .weather{
    position: absolute;
    bottom: 20px;
    right: 80px;
  }
  .temperature{
    font-size: 80px;
    color: #20A0FF;
  }
  .city{
    font-size: 35px;
  }
</style>
