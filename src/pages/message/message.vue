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
  <div class="title">
    <span class="message">消息</span>
    <span class="actions" @click="showfunction = !showfunction"><img src="../../img/add.png" /></span>
  </div>
  <div class="functions" v-if="showfunction">
    <ul>
      <li>创建群聊</li>
      <li>加好友/群</li>
      <li>扫一扫</li>
      <li>面对面快传</li>
      <li>付款</li>
      <li>拍摄</li>
      <li>面对面红包</li>
    </ul>
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
        showfunction: false
      }
    },
    methods: {
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
  .message {
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .actions{
    position: fixed;
    top: 65px;
    right: 25px;
    text-align: right;
  }
  .functions{
    width: 45%;
    position: absolute;
    background-color: #fff;
    top: 175px;
    right: 20px;
    border: 1px solid #8a8a8a;
    border-radius: 10px;
  }
  .functions li{
    margin: 20px 0 30px 25px;
  }
</style>
