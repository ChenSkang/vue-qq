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
<div class="main">
  <div class="heart" style="position: relative;">
    <p @click="showone = !showone"><img src="../../img/arrow.png" class="arrow" v-bind:class="{open:showone}"/><span>特别关心</span></p>
    <span class="peoples">{{vipusers.length}}/{{vipusers.length}}</span>
  </div>
  <div class="users" v-if="showone">
    <ul>
      <router-link to="/user">
        <li v-for="(user, index) in vipusers" @click="lookr(index)">
          <img :src="users[index].userhead" class="userhead" />
          <p>{{vipusers[index].username}}</p>
          <p id="styles">{{vipusers[index].styles}}</p>
        </li>
      </router-link>
    </ul>
  </div>
  <div class="people" style="position: relative;margin-top: 20px">
    <p @click="showtwo = !showtwo"><img src="../../img/arrow.png"  class="arrow" v-bind:class="{open:showtwo}"/><span>我的好友</span></p>
    <span class="peoples">{{users.length}}/{{users.length}}</span>
  </div>
  <div class="users" v-if="showtwo">
    <ul>
        <li v-for="(user, index) in users" @click="look(index)">
          <router-link to="/user">
            <img :src="users[index].userhead" class="userhead" />
            <p>{{users[index].username}}</p>
            <p id="styles">{{users[index].styles}}</p>
          </router-link>
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
        showone: false,
        showtwo: false,
        users: [{
          userhead: require('../../img/bigwhite.png'),
          username: '大白',
          styles: '我叫大白，我很高冷'
        }, {
          userhead: require('../../img/snake.png'),
          username: '神龙',
          styles: '收集七龙珠跟我聊天'
        }, {
          userhead: require('../../img/qilongzhu.png'),
          username: '七龙珠',
          styles: '我就是七龙珠'
        }],
        vipusers: [{
          userhead: require('../../img/bigwhite.png'),
          username: '大白',
          styles: '我叫大白，我很高冷'
        }]
      }
    },
    methods: {
      look (index) {
        let imgSrc = this.users[index].userhead
        let title = this.users[index].username
        let style = this.users[index].styles
        bus.$emit('looks', imgSrc, title, style)
      },
      lookr (index) {
        let imgSrcs = this.vipusers[index].userhead
        let titles = this.vipusers[index].username
        let styles = this.vipusers[index].styles
        bus.$emit('lookss', imgSrcs, titles, styles)
      }
    }
  }
</script>

<style scoped>
  .main{
    position: relative;
  }
  .arrow{
    width: 35px;
    height: 35px;
    margin-right: 20px;
    transform: translateY(5px);
  }
  .heart p{
    margin-top: 10px;
    margin-left: 25px;
    height: 100px;
    line-height: 100px;
  }
  .open{
    transform: rotate(90deg);
  }
  .people p{
    margin-top: -15px;
    margin-left: 25px;
    height: 100px;
    line-height: 100px;
  }
  .peoples{
    font-size: 30px;
    position: absolute;
    top: 35px;
    right: 50px;
    color: #8492A6;
  }
  .users{
    width: 100%;
  }
  .users li{
    border-bottom: 1px solid #D3DCE6;
    height: 100px;
  }
  .userhead{
    transform: translateY(20px);
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 50%;
    background-color: #fff;
  }
  .users p{
    margin-left: 120px;
    color: black;
    transform: translateY(-75px);
  }
  #styles{
    font-size: 25px;
    color: #8492A6;
  }
</style>
