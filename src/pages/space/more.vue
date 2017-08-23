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
        <li style="background-color: #F9FAFC"><span class="list-title">已关闭的功能</span></li>
        <li v-for="(value, index) in values">
          <img :src="values[index].img" class="imgname" />
          <p class="names">{{values[index].title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
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
          title: '动漫',
          img: require('../../img/dongman.png')
        }, {
          title: '直播',
          img: require('../../img/zhibo.png')
        }, {
          title: '吃喝玩乐',
          img: require('../../img/eat.png')
        }, {
          title: '同城服务',
          img: require('../../img/cityfuwu.png')
        }]
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
  }
  .title span{
    color: #fff;
    font-family: PingFang SC;
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrowleft{
    transform: translate(-30px);
  }
  .more {
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .friends{
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
  .objects{
    width: 100%;
    position: absolute;
    top: 150px;
  }
  .objects li{
    border-bottom: 1px solid #D3DCE6;
    height: 100px;
    line-height: 100px;
  }
  .list-title{
    color: #8492A6;
    font-size: 30px;
    margin-left: 25px;
  }
  .imgname{
    margin-left: 25px;
    margin-right: 20px;
    transform: translateY(15px);
  }
  .names{
    display: inline-block;
  }
</style>
