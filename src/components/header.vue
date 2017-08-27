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
<div class="head">
  <router-link to="/left"><div class="account"><img src="../img/qqhead.jpg" /></div></router-link>
  <div class="search">
    <span class="search-icon"><i class="el-icon-search" style="margin-top: 5px"></i>搜索</span>
  </div>
</div>
</template>

<script>
  import ElIcon from '../../node_modules/element-ui/packages/icon/src/icon'
  export default {
    components: {ElIcon},
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.head{
  background-color: #20A0FF;
  width: 100%;
  height: 150px;
  position: fixed;
  top: 0;
  z-index: 99;
}
  .account{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 25px;
    top: 50px;
  }
  .account img{
    width: 75px;
    height: 75px;
  }
  .search{
    width: 94%;
    height: 50px;
    border-radius: 10px;
    position: absolute;
    top: 165px;
    left: 3%;
    text-align: center;
    background-color: #EFF2F7;
  }
  .search-icon{
    font-size: 30px;
    line-height: 50px;
    color: #8492A6;
  }
</style>
