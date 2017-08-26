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
    <span class="user-name">{{username}}</span>
    <router-link to="/message">
      <div class="arrow">
        <img src="../../img/arrowleft.png" class="arrowleft" />
      </div>
    </router-link>
    <img src="../../img/phone.png" class="phone" />
    <img src="../../img/chatren.png" class="chat" />
  </div>
  <div class="main">
    <ul>
      <li v-for="(message, index) in messages">
        <div class="message"><p>{{message}}</p></div>
        <div class="head"><img src="../../img/qqhead.jpg" style="width: 75px;height: 75px"/></div>
      </li>
    </ul>
  </div>
  <div class="footer">
    <el-row :gutter="10" class="send-message">
      <el-col :span="20"><div><input class="message-input" v-model="nowmessage" @keyup.enter="sendMessage"></div></el-col>
      <el-col :span="4"><div><el-button class="message-btn" type="primary" :disabled="ifmessages" @click="sendMessage">发送</el-button></div></el-col>
    </el-row>
    <el-row class="send-colors">
      <el-col :span="3"><img src="../../img/yuyin.png" /></el-col>
      <el-col :span="3"><img src="../../img/imgs.png" /></el-col>
      <el-col :span="3"><img src="../../img/xiangji.png" /></el-col>
      <el-col :span="3"><img src="../../img/chuo.png" /></el-col>
      <el-col :span="3"><img src="../../img/hongbao.png" /></el-col>
      <el-col :span="3"><img src="../../img/gif.png" /></el-col>
      <el-col :span="3"><img src="../../img/biaoqing.png" /></el-col>
      <el-col :span="3"><img src="../../img/tianjia.png" /></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
  import bus from '../../assets/bus'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button'
  export default {
    components: {ElButton},
    data () {
      return {
        username: '',
        nowmessage: '',
        messages: []
      }
    },
    computed: {
      ifmessages: function () {
        if (this.nowmessage) {
          return false
        } else {
          return true
        }
      }
    },
    methods: {
      sendMessage () {
        let div = document.getElementsByClassName('main')
        div[0].scrollTop = div[0].scrollHeight
        if (this.nowmessage) {
          this.messages.push(this.nowmessage)
          this.nowmessage = ''
        }
      }
    },
    mounted () {
      bus.$on('looks', (imgSrc, title, style) => {
        this.username = title
        this.messages = []
      })
      bus.$on('lookss', (imgSrcs, titles, styles) => {
        this.username = titles
        this.messages = []
      })
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
    z-index: 999;
  }
  .user-name{
    color: #fff;
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrowleft{
    transform: translate(-30px);
  }
  .arrow{
    position: absolute;
    top: 60px;
    left: 25px;
  }
  .phone{
    position: absolute;
    top: 65px;
    right: 120px;
  }
  .chat{
    position: absolute;
    top: 65px;
    right: 25px;
  }
  .footer{
    width: 100%;
    height: 150px;
    position: fixed;
    bottom: 0;
    background-color: #E5E9F2;
  }
  .send-message{
    height: 75px;
  }
  .message-input{
    margin-top: 10px;
    margin-left: 10px;
    width: 96%;
    height: 60px;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  .message-btn{
    margin-top: 10px;
    height: 65px;
    width: 90%;
    border: 1px solid #fff;
    border-radius: 10px;
  }
  .send-colors img{
    margin: 15px;
  }
  .main{
    width: 100%;
    position: absolute;
    top: 150px;
    bottom: 160px;
    overflow-y: auto;
  }
  .main li{
    position: relative;
    height: 120px;
    line-height: 120px;
    margin-bottom: 20px;
  }
  .head{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .message{
    min-width: 80px;
    height: 90px;
    line-height: 90px;
    border-radius: 20px;
    color: #fff;
    background-color: #1c8de0;
    position: absolute;
    right: 120px;
    top: 50%;
    transform: translateY(-50%);
  }
  .message p{
    margin: 20px;
    transform: translateY(-20px);
  }
</style>
