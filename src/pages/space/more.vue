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
      <span class="more">更多</span>
      <router-link to="/space">
        <div class="friends">
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">动态</p>
        </div>
      </router-link>
    </div>
    <div class="objects">
      <ul>
        <div class="list-title" :class="{ifshow:!values.length}">已关闭的功能</div>
        <div class="list-title" :class="{ifshow:values.length}">功能已全部开启</div>
        <li v-for="(value, index) in values">
          <img :src="values[index].img" class="imgname" />
          <p class="names">{{values[index].title}}</p>
          <el-button class="objects-btn" @click="open(index)">开启</el-button>
        </li>
      </ul>
      <ul>
        <div class="list-title" :class="{ifshow:!othervalues.length}">已开启的功能</div>
        <div class="list-title" :class="{ifshow:othervalues.length}">功能已全部关闭</div>
        <li v-for="(value, index) in othervalues">
          <img :src="othervalues[index].img" class="imgname" />
          <p class="names">{{othervalues[index].title}}</p>
          <el-button class="objects-btn" @click="close(index)">关闭</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/bus'
  export default {
    data () {
      return {
        values: [{
          title: '日迹',
          img: require('../../img/date.png')
        }, {
          title: '看点',
          img: require('../../img/seedian.png')
        }, {
          title: '京东购物',
          img: require('../../img/jd.png')
        }, {
          title: '阅读',
          img: require('../../img/read.png')
        }, {
          title: '直播',
          img: require('../../img/zhibo.png')
        }, {
          title: '吃喝玩乐',
          img: require('../../img/eat.png')
        }, {
          title: '同城服务',
          img: require('../../img/cityfuwu.png')
        }],
        othervalues: [{
          title: '运动',
          img: require('../../img/sport.png')
        }, {
          title: '音乐',
          img: require('../../img/music.png')
        }]
      }
    },
    methods: {
      open (num) {
        let value = []
        this.othervalues.unshift(value)
        let title = this.values[num].title
        let img = this.values[num].img
        this.othervalues[0].title = this.values[num].title
        this.othervalues[0].img = this.values[num].img
        this.values.splice(num, 1)
        bus.$emit('opens', title, img)
      },
      close (num) {
        let value = []
        this.values.unshift(value)
        let title = this.othervalues[num].title
        let img = this.othervalues[num].img
        this.values[0].title = this.othervalues[num].title
        this.values[0].img = this.othervalues[num].img
        this.othervalues.splice(num, 1)
        bus.$emit('closed', title, img)
      }
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
  .objects{
    width: 100%;
    position: absolute;
    top: 150px;
  }
  .objects li{
    border-bottom: 1px solid #D3DCE6;
    height: 100px;
    position: relative;
    line-height: 100px;
  }
  .objects-btn{
    position: absolute;
    right: 25px;
    top: 20px;
  }
  .list-title{
    width: 100%;
    border-bottom: 1px solid #D3DCE6;
    height: 100px;
    line-height: 100px;
    background-color: #F9FAFC;
    color: #8492A6;
    font-size: 30px;
  }
  .imgname{
    margin-left: 25px;
    margin-right: 20px;
    transform: translateY(15px);
  }
  .names{
    display: inline-block;
  }
  .ifshow{
    display: none;
  }
</style>
