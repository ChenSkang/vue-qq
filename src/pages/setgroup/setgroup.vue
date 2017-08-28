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
      <span class="more">选择群分类</span>
      <router-link to="/contact">
        <div>
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">返回</p>
        </div>
      </router-link>
    </div>
    <div class="main">
      <el-row>
        <el-col :span="12"><router-link to="/groups"><div class="groups">同学</div></router-link></el-col>
        <el-col :span="12"><router-link to="/groups"><div class="groups">同事</div></router-link></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><router-link to="/groups"><div class="groups">亲友</div></router-link></el-col>
        <el-col :span="12"><router-link to="/groups"><div class="groups">家校</div></router-link></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><router-link to="/groups"><div class="groups">行业交流</div></router-link></el-col>
        <el-col :span="12"><router-link to="/groups"><div class="groups">生活休闲</div></router-link></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><router-link to="/groups"><div class="groups">兴趣爱好</div></router-link></el-col>
        <el-col :span="12"><router-link to="/groups"><div class="groups">置业安家</div></router-link></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><router-link to="/groups"><div class="groups">学习考试</div></router-link></el-col>
        <el-col :span="12"><router-link to="/groups"><div class="groups">品牌产品</div></router-link></el-col>
      </el-row>
      <el-row>
        <el-col :span="12"><router-link to="/groups"><div class="groups">游戏</div></router-link></el-col>
        <el-col :span="12"><router-link to="/groups"><div class="groups">粉丝</div></router-link></el-col>
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
  .groups{
    height: 120px;
    line-height: 120px;
    background-color: #fff;
    border: 1px solid #8492A6;
    width: 85%;
    text-align: center;
    margin: 30px;
    color: black;
  }
</style>
