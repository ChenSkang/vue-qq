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
<div id="group">
  <img src="../../../img/zhaoquntu.jpg" style="width: 100%">
  <p class="menu-title"><img src="../../../img/fenlei.png" />热门分类</p>
  <el-row class="menu">
    <el-col :span="6"><div><img src="../../../img/shenghuo.png" /><p>生活</p></div></el-col>
    <el-col :span="6"><div><img src="../../../img/yundong.png" /><p>运动</p></div></el-col>
    <el-col :span="6"><div><img src="../../../img/aixin.png" /><p>交友</p></div></el-col>
    <el-col :span="6"><div> <img src="../../../img/xuegao.png" /><p>玩乐</p></div>
    </el-col>
  </el-row>
  <el-row class="menu">
    <el-col :span="6"><div><img src="../../../img/game.png" /><p>游戏</p></div></el-col>
    <el-col :span="6"><div><img src="../../../img/cheyou.png" /><p>车友</p></div></el-col>
    <el-col :span="6"><div><img src="../../../img/fensi.png" /><p>粉丝</p></div></el-col>
    <el-col :span="6"><div><img src="../../../img/hangye.png" /><p>行业</p></div></el-col>
  </el-row>
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
#group{
  width: 100%;
  position: absolute;
  top: 440px;
}
  .menu-title{
    height: 80px;
    line-height: 80px;
    font-size: 35px;
  }
  .menu-title img{
    margin-left: 25px;
    margin-right: 15px;
    transform: translateY(10px);
  }
  .menu div{
    text-align: center;
  }
  .menu img{
    margin-top: 25px;
  }
  .menu p{
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 35px;
  }
</style>
