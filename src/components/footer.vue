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
  <headers></headers>
  <div class="foot">
  <el-row>
    <el-col :span="8">
      <router-link to="/message">
        <div class="foot-icons">
          <img src="../img/message.png"/>
          <img src="../img/messageblue.png" class="img2"/>
          <p>消息</p>
        </div>
      </router-link>
    </el-col>
    <el-col :span="8">
      <router-link to="/contact">
        <div class="foot-icons">
          <img src="../img/friend.png"/>
          <img src="../img/friendblue.png" class="img2"/>
          <p>联系人</p>
        </div>
      </router-link>
    </el-col>
    <el-col :span="8">
      <router-link to="/space">
        <div class="foot-icons">
          <img src="../img/star.png"/>
          <img src="../img/starblue.png" class="img2"/>
          <p>动态</p>
        </div>
      </router-link>
    </el-col>
  </el-row>
  </div>
</div>
</template>

<script>
  import headers from './header.vue'
  export default {
    components: {
      headers
    },
    data () {
      return {
        num: [{
          number: false
        }, {
          number: false
        }, {
          number: false
        }]
      }
    }
  }
</script>

<style scoped>
.foot{
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  background-color: #fff;
  border-top: 1px solid #8a8a8a;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
  .foot-icons{
    text-align: center;
    margin-top: 15px;
  }
  .foot-icons p{
    color: #8a8a8a;
    font-size: 20px;
  }
  .img2{
    display: none;
  }
</style>
