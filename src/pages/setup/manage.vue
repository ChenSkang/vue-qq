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
      <span class="more">帐号管理</span>
      <router-link to="/setup">
        <div>
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">设置</p>
        </div>
      </router-link>
    </div>
    <div class="main">
      <ul>
        <li><img src="../../img/qqhead.jpg" class="head" /><p style="margin-left: 100px">慢走 ♡</p><img src="../../img/duihao.png" class="arrow" /></li>
        <li><img src="../../img/qqhead.jpg" class="head" /><p style="margin-left: 100px">第二个账号</p></li>
        <li><p style="text-align: center;color: #20A0FF">＋添加或注册帐号</p></li>
      </ul>
      <ul>
        <li>关联QQ号<img src="../../img/arrow.png" class="arrow" /></li>
      </ul>
      <ul>
        <li>在线状态<img src="../../img/duihao.png" class="arrow" /></li>
        <li>隐身状态</li>
        <li>忙碌状态</li>
      </ul>
      <ul>
        <router-link to="/"><li>退出当前帐号</li></router-link>
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
    width: 75px;
    height: 75px;
    border-radius: 50%;
    position: absolute;
    left: 25px;
    top: 12px;
  }
  .arrow{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 20px;
    top: 30px;
  }
</style>
