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
  </div>
</div>
</template>

<script>
  import bus from '../../assets/bus'
  export default {
    data () {
      return {
        username: ''
      }
    },
    mounted () {
      bus.$on('looks', (imgSrc, title, style) => {
        this.username = title
      })
      bus.$on('lookss', (imgSrcs, titles, styles) => {
        this.username = titles
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
    top: 65px;
    left: 25px;
  }
</style>
