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
    <img src="../../img/cat.jpg" class="back" />
    <div class="title">
      <router-link to="/message">
        <div class="return">
          <img src="../../img/arrowleft.png" class="arrow-left" />
          <p id="dyna">返回</p>
        </div>
      </router-link>
    </div>
    <router-link to="/erweima">
      <img src="../../img/erweima.png" class="erweima" />
    </router-link>
    <div class="user-message">
      <div>
        <img src="../../img/qqhead.jpg" class="user-head"/>
      </div>
      <p class="user-name">慢走 ♡</p>
      <p class="user-style">你见过四个角的星星吗</p>
    </div>
    <div class="footer">
      <el-row>
        <el-col :span="12">
          <el-button class="footer-btn">个性名片</el-button>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" class="footer-btn">编辑资料</el-button>
        </el-col>
      </el-row>
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
    width: 100%;
    position: fixed;
  }
  .back{
    width: 100%;
    height: 500px;
    z-index: -1;
  }
  .erweima{
    position: absolute;
    right: 20px;
    top: 70px;
  }
  .title span{
    color: #fff;
    font-family: PingFang SC;
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrow-left{
    transform: translate(-30px);
  }
  .return{
    position: fixed;
    top: 65px;
    left: 25px;
  }
  #dyna{
    color: #fff;
    position: fixed;
    top: 75px;
    margin-left: 30px;
  }
  .user-message{
    width: 100%;
    text-align: center;
  }
  .user-head{
    width: 200px;
    height: 200px;
    margin-top: -110px;
    border-radius: 50%;
    background-color: #fff;
  }
  .user-name{
    margin-top: -10px;
    font-family: 黑体;
  }
  .user-style{
    margin-top: 10px;
    font-size: 30px;
    color: #8492A6;
  }
  .footer{
    width: 100%;
    height: 120px;
    line-height: 120px;
    text-align: center;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #8492A6;
  }
  .footer-btn{
    width: 350px;
    height: 80px;
    border: 1px solid #8492A6;
  }
</style>
