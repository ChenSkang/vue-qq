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
*     Initial: 2017/08/26       Chen Shuaikang
*/
<template>
  <div>
    <div class="title">
      <router-link to="/space">
        <img src="../../img/arrowleft.png" class="arrowleft" />
        <p id="dyna">动态</p>
      </router-link>
      <span class="new">附近</span>
    </div>
    <el-row class="mains">
      <el-col :span="6">
        <div @click="changed(0)"><p :class="{select:mains[0].change}" class="selects">附近的人</p></div>
      </el-col>
      <el-col :span="6">
        <div @click="changed(1)"><p :class="{select:mains[1].change}" class="selects">直播</p></div>
      </el-col>
      <el-col :span="6">
        <div @click="changed(2)"><p :class="{select:mains[2].change}" class="selects">活动</p></div>
      </el-col>
      <el-col :span="6">
        <div @click="changed(3)"><p :class="{select:mains[3].change}" class="selects">群聊</p></div>
      </el-col>
    </el-row>
    <near v-if="mains[0].change"></near>
    <now v-if="mains[1].change"></now>
    <activies v-if="mains[2].change"></activies>
    <group v-if="mains[3].change"></group>
  </div>
</template>

<script>
  import near from './nearbys/nearpeople.vue'
  import now from './nearbys/nearnow.vue'
  import activies from './nearbys/nearactivit.vue'
  import group from './nearbys/neargroup.vue'
  export default {
    components: {
      near,
      now,
      activies,
      group
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
        }]
      }
    },
    methods: {
      changed (num) {
        for (let i = 0; i < 4; i++) {
          this.mains[i].change = false
        }
        this.mains[num].change = true
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
  .new{
    color: #fff;
    position: absolute;
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrowleft{
    position: absolute;
    top: 55px;
  }
  #dyna{
    color: #fff;
    position: fixed;
    top: 65px;
    margin-left: 60px;
  }
  .mains{
    width: 100%;
    position: fixed;
    top: 150px;
    background-color: #fff;
    border-bottom: 1px solid #8492A6;
    z-index: 999;
  }
  .selects{
    font-size: 32px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    box-sizing: border-box;
  }
  .select{
    border-bottom: 6px solid #1D8CE0;
  }
</style>
