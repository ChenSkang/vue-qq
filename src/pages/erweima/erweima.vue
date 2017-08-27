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
      <span class="more">我的二维码</span>
        <div  onclick="window.history.go(-1)">
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">返回</p>
        </div>
    </div>
    <img src="../../img/erweimaye.jpg" style="width: 100%" />
    <div class="foot">
      <el-row>
        <el-col :span="8"><el-button type="primary"><img src="../../img/shouqian.png" /></el-button><p>收钱</p></el-col>
        <el-col :span="8"><el-button type="primary"><img src="../../img/fukuan.png" /></el-button><p>付款</p></el-col>
        <el-col :span="8"><el-button type="primary"><img src="../../img/sao.png" /></el-button><p>扫一扫</p></el-col>
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
  .foot{
    text-align: center;
  }
  .foot p{
    font-size: 35px;
    margin-top: 20px;
  }
</style>
