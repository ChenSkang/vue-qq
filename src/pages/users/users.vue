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
  <img src="../../img/cat.jpg" class="back" />
  <div class="title">
    <router-link to="/message">
      <div class="return">
        <img src="../../img/arrowleft.png" class="arrow-left" />
        <p id="dyna">返回</p>
      </div>
    </router-link>
  </div>
  <div class="user-message">
    <div class="user-head">

    </div>
    <p class="user-name">{{username}}</p>
    <p class="user-style">{{styles}}</p>
  </div>
</div>
</template>

<script>
  import bus from '../../assets/bus'
  export default {
    data () {
      return {
        username: '',
        styles: ''
      }
    },
    mounted () {
      bus.$on('looks', (title, style) => {
        this.username = title
        this.styles = style
      })
    }
  }
</script>

<style scoped>
  .title{
    width: 100%;
    position: fixed;
    top: 0;
  }
  .back{
    width: 100%;
    z-index: -1;
  }
  .title span{
    color: #fff;
    font-family: PingFang SC;
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrow-left{
    transform: translate(-30px);
  }
  .return{
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
  .user-message{
    width: 100%;
    height: 300px;
    background-color: #1c8de0;
  }
</style>
