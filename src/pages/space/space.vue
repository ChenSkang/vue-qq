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
  <footers></footers>
  <div class="title"><span class="friends">动态</span></div>
  <router-link to="/more"><div class="title"><span class="more">更多</span></div></router-link>
  <div class="main">
    <el-row>
      <el-col :span="8">
        <img src="../../img/qqspaceicon.png" />
        <p class="names">好友动态</p>
      </el-col>
      <el-col :span="8">
        <img src="../../img/there.png" id="there" />
        <p class="names" style="transform: translateY(25px)">附近</p>
      </el-col>
      <el-col :span="8">
        <img src="../../img/hobby.png" />
        <p class="names">兴趣部落</p>
      </el-col>
    </el-row>
  </div>
  <div class="game">
    <p id="mygame"><img src="../../img/game.png" />游戏</p>
    <img src="../../img/arrow.png" id="arrow">
  </div>
</div>
</template>

<script>
  import footers from '../../components/footer.vue'
  export default {
    components: {
      footers
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .title span{
    color: #fff;
    font-family: PingFang SC;
    font-size: 40px;
    width: 100%;
  }
  .friends {
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .more{
    position: fixed;
    top: 65px;
    right: 25px;
    text-align: right;
  }
  .main{
    width: 100%;
    text-align: center;
    height: 200px;
    position: absolute;
    top: 230px;
    background-color: #F9FAFC;
  }
  .main img{
    height: 110px;
    width: 110px;
    transform: translateY(10px)
  }
  #there{
    width: 85px;
    height: 85px;
    transform: translateY(25px);
  }
  .names{
    font-size: 30px;
  }
  .game{
    position: relative;
    top: 450px;
    height: 100px;
    width: 100%;
    border-top: 1px solid #D3DCE6;
    border-bottom: 1px solid #D3DCE6;
  }
  #mygame{
    margin-left: 30px;
  }
  .game img{
    transform: translateY(20px);
    margin-right: 30px;
  }
  #arrow{
    width: 50px;
    height: 50px;
    position: absolute;
    right: 30px;
    top: 10px;
  }
</style>
