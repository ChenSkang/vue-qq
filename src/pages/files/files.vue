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
    <div class="title">
      <span class="more">设置</span>
      <router-link to="/contact">
        <div>
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">返回</p>
        </div>
      </router-link>
    </div>
    <div class="main">
      <ul>
        <li>帐号管理</li>
        <li>手机号码</li>
        <li>QQ达人</li>
      </ul>
      <ul>
        <li>消息通知</li>
        <li>聊天记录</li>
        <li>空间清理</li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
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
    position: absolute;
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
</style>
