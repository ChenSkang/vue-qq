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
*     Initial: 2017/08/27       Chen Shuaikang
*/
<template>
  <div>
    <div class="title">
      <span class="more">编辑群资料</span>
      <router-link to="/setgroup">
        <div>
          <img src="../../img/arrowleft.png" class="arrowleft" />
          <p id="dyna">群分类</p>
        </div>
      </router-link>
    </div>
    <div class="main">
      <img src="../../img/qunliao.png" class="addhead" />
      <input type="text" class="group-name" v-model="name">
      <router-link to="/contact"><el-button type="primary" class="btn" :disabled="ifName" @click="hand">提交</el-button></router-link>
      <p class="intro">我已阅读并同意服务声明</p>
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/bus'
  export default {
    data () {
      return {
        name: ''
      }
    },
    methods: {
      hand () {
        let name = this.name
        bus.$emit('groupName', name)
        this.name = ''
      }
    },
    computed: {
      ifName () {
        if (this.name) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style scoped>
  .title{
    background-color: #20A0FF;
    width: 100%;
    height: 150px;
    z-index: 999;
  }
  .arrowleft{
    position: fixed;
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
  .main{
    position: absolute;
    top: 150px;
    width: 100%;
  }
  .addhead{
    width: 260px;
    height: 260px;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }
  .group-name{
    height: 100px;
    border: none;
    border-bottom: 2px solid #20A0FF;
    text-align: center;
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
  }
  .btn{
    width: 80%;
    height: 100px;
    position: absolute;
    top: 900px;
    left: 50%;
    transform: translateX(-50%);
  }
  .intro{
    font-size: 30px;
    height: 100px;
    text-align: center;
    position: absolute;
    top: 1050px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
