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
    <router-link to="/contact">
      <img src="../../img/arrowleft.png" class="arrowleft" />
      <p id="dyna">联系人</p>
    </router-link>
    <span class="new">新朋友</span>
    <router-link to="/addfriend">
      <span class="add">添加</span>
    </router-link>
  </div>
  <div id="main">
    <div class="my-title">好友推荐</div>
    <div class="my">
      <img src="../../img/headone.jpg" class="head-img"/><p>气球男生</p>
      <p class="intro">我手里拿的是龙猫</p>
      <el-button class="objects-btn">添加</el-button>
    </div>
    <div class="my">
      <img src="../../img/headthree.jpg" class="head-img"/><p>气球女生</p>
      <p class="intro">我手里拿的不是龙猫</p>
      <el-button class="objects-btn">添加</el-button>
    </div>
    <div class="my">
      <img src="../../img/headtwo.jpg" class="head-img"/><p>猫女生</p>
      <p class="intro">我抱着小猫</p>
      <el-button class="objects-btn">添加</el-button>
    </div>
    <div class="my">
      <img src="../../img/headfour.jpg" class="head-img"/><p>猫男生</p>
      <p class="intro">我头顶着小猫</p>
      <el-button class="objects-btn">添加</el-button>
    </div>
    <div class="my">
      <img src="../../img/headfive.jpg" class="head-img"/><p>小孩子</p>
      <p class="intro">嘿，可爱吧hhhh</p>
      <el-button class="objects-btn">添加</el-button>
    </div>
    <div class="my-title" style="text-align: center;">查看更多推荐好友＞</div>
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
    background-color: #20A0FF;
    width: 100%;
    height: 150px;
    position: fixed;
    top: 0;
  }
  .new{
    color: #fff;
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
  }
  .add{
    color: #fff;
    position: absolute;
    top: 65px;
    right: 25px;
    text-align: right;
  }
  .arrowleft{
    position: absolute;
    top: 55px;
  }
  #dyna{
    color: #fff;
    position: fixed;
    top: 65px;
    margin-left: 60px;
  }
  #main{
    width: 100%;
    position: absolute;
    top: 150px;
  }
  .my{
    position: relative;
    height: 150px;
    border-bottom: 1px solid #8492A6;
  }
  .my p{
    margin-left: 150px;
    transform: translateY(30px);
  }
  .head-img{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    position: absolute;
    left: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
  .my-title{
    font-size: 35px;
    color: #8492A6;
    margin: 25px;
  }
  .intro{
    font-size: 30px;
    color: #8492A6;
  }
  .objects-btn{
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
