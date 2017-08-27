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
    <div class="title">
      <span class="more">好友动态</span>
      <router-link to="/space">
        <div><img src="../../img/arrowleft.png" class="arrowleft" /><p id="dyna">动态</p></div>
      </router-link>
      <div class="add">
        <img src="../../img/adds.png" alt="">
      </div>
    </div>
    <img src="../../img/spaceback.jpg" class="back"/>
    <img src="../../img/qqhead.jpg" class="head" />
    <div class="fangke">
      <p>今日访客&nbsp97</p>
      <p>总浏览量&nbsp52430</p>
    </div>
    <div class="middle">
      <div class="middle-title">
        <el-row>
          <el-col :span="4" class="titles">相册</el-col>
          <el-col :span="4" class="titles">说说</el-col>
          <el-col :span="4" class="titles">个性化</el-col>
          <el-col :span="4" class="titles">游戏</el-col>
          <el-col :span="4" class="titles">消息</el-col>
          <el-col :span="4" class="titles">动漫</el-col>
        </el-row>
      </div>
    </div>
    <div class="footer">
      <img src="../../img/shuoshuo.jpg" style="width: 100%" />
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
  .title{
    width: 100%;
    height: 200px;
    position: fixed;
    top: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0));
  }
  .back{
    width: 100%;
  }
  .middle{
    width: 100%;
    height: 200px;
    line-height: 330px;
    text-align: center;
    position: absolute;
    top: 35%;
    background: linear-gradient(to top, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0));
  }
  .footer{
    width: 100%;
    position: absolute;
    top: 50%;
  }
  .titles{
    color: #fff;
    font-size: 30px;
  }
  .arrowleft{
    position: absolute;
    top: 55px;
  }
  .more {
    position: absolute;
    left: 50%;
    top: 65px;
    transform: translateX(-50%);
    color: #fff;
  }
  #dyna{
    color: #fff;
    position: absolute;
    top: 65px;
    margin-left: 60px;
  }
  .add{
    width: 65px;
    height: 65px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 65px;
    right: 30px;
  }
  .fangke{
    position: absolute;
    top: 35%;
    right: 35px;
  }
  .fangke p{
    font-size: 30px;
  }
  .head{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    top: 30%;
    left: 30px;
  }
</style>
