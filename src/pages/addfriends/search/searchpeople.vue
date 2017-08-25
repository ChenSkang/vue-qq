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
<div id="people">
  <div class="my">
    <img src="../../../img/lianxiren.png"/><p>添加手机联系人</p>
    <p class="intro">孙悟空、哪吒、李小白</p>
  </div>
  <div class="my">
    <img src="../../../img/saoyisao.png"/><p>扫一扫添加好友</p>
    <p class="intro">扫一扫二维码吧</p>
  </div>
  <div class="my">
    <img src="../../../img/duoren.png"/><p>面对面发起聊天</p>
    <p class="intro">与身边的朋友进入同一个多人聊天</p>
  </div>
  <div class="my">
    <img src="../../../img/chazhao.png"/><p>按条件查找陌生人</p>
    <p class="intro">条件：女、保定、好看</p>
  </div>
  <div class="my">
    <img src="../../../img/fujin.png"/><p>查看附近的人</p>
    <p class="intro">附近的朋友</p>
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
#people{
  width: 100%;
  position: absolute;
  top: 440px;
  border-top: 1px solid #8492A6;
}
.my{
  height: 120px;
  border-bottom: 1px solid #8492A6;
}
.my p{
  margin-left: 120px;
  transform: translateY(-60px);
}
.my img{
  transform: translateY(25px);
  margin-left: 25px;
}
.intro{
  font-size: 30px;
  color: #8492A6;
}
</style>
