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
  <div class="messages">
    <ul>
      <li v-for="(value, index) in values" :key="index">
        <img :src="values[index].img" class="imgname" />
        <p>{{values[index].title}}</p>
        <p class="now-message">{{values[index].style}}</p>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
  import bus from '../../assets/bus'
  import footers from '../../components/footer.vue'
  export default {
    components: {
      footers
    },
    data () {
      return {
        showfunction: false,
        values: [{
          img: require('../../img/computer.png'),
          title: '我的电脑',
          style: '可传文件到电脑'
        }]
      }
    },
    mounted () {
      bus.$on('looks', (imgSrc, title, style) => {
        for (let x = 0; x < this.values.length; x++) {
          if (this.values[x].title === title) {
            this.values.splice(x, 1)
          }
        }
        let value = []
        this.values.unshift(value)
        this.values[0].img = imgSrc
        this.values[0].title = title
        this.values[0].style = style
      })
    },
    methods: {
    }
  }
</script>

<style scoped>
  .title span{
    color: #fff;
    z-index: 999;
  }
  .message {
    position: fixed;
    top: 65px;
    left: 50%;
    transform: translate(-50%);
  }
  .actions{
    position: fixed;
    top: 65px;
    right: 25px;
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
  .messages{
    width: 100%;
    position: absolute;
    top: 240px;
  }
  .messages li{
    border-bottom: 1px solid #C0CCDA;
    height: 130px;
    position: relative;
  }
  .imgname{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    left: 30px;
    top: 50%;
    transform: translateY(-50%);
  }
  .messages p{
    margin-left: 160px;
    transform: translateY(18px);
  }
  .now-message{
    font-size: 30px;
    color: #8492A6;
  }
</style>
