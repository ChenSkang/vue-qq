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
    <span class="friends">联系人</span>
    <span class="add">添加</span>
  </div>
  <div class="contact">
    <p class="new-friends"><span class="one">新朋友</span></p>
    <div class="line1"></div>
    <div class="mains">
      <router-link to="/friend"><div v-bind:class="{select:mains[0].change}" @click="changed(0)">好友</div></router-link>
      <router-link to="/group"><div v-bind:class="{select:mains[1].change}" @click="changed(1)">群</div></router-link>
      <router-link to="/ourchat"><div v-bind:class="{select:mains[2].change}" @click="changed(2)">多人聊天</div></router-link>
      <router-link to="/myphone"><div v-bind:class="{select:mains[3].change}" @click="changed(3)">设备</div></router-link>
      <router-link to="/mynotes"><div v-bind:class="{select:mains[4].change}" @click="changed(4)">通讯录</div></router-link>
    </div>
    <div class="line2"></div>
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
        mains: [{
          change: true
        }, {
          change: false
        }, {
          change: false
        }, {
          change: false
        }, {
          change: false
        }
        ]
      }
    },
    methods: {
      changed (num) {
        for (let i = 0; i < 5; i++) {
          this.mains[i].change = false
        }
        this.mains[num].change = true
      }
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
  .friends{
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .add{
    position: fixed;
    top: 65px;
    right: 25px;
    text-align: right;
  }
  .contact{
    position: relative;
    top: 230px;
    width: 100%;
  }
  .new-friends{
    border: 1px solid #D3DCE6;
    border-left: none;
    border-right: none;
    height: 100px;
    font-size: 40px;
    line-height: 100px;
  }
  .one{
    margin-left: 30px;
  }
  .line1{
    border-bottom: 1px solid #D3DCE6;
    margin-top: 25px;
  }
  .line2{
    border-bottom: 1px solid #D3DCE6;
  }
  .mains{
    margin-top: 15px;
  }
  .mains div{
    font-size: 35px;
    height: 100px;
    margin-left: 50px;
    line-height: 100px;
    display: inline-block;
  }
  .select{
    border-bottom: 5px solid #1D8CE0;
  }
</style>
