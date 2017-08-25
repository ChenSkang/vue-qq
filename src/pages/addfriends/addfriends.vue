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
      <router-link to="/contact">
        <img src="../../img/arrowleft.png" class="arrowleft" />
        <p id="dyna">联系人</p>
      </router-link>
      <span class="new">添加</span>
    </div>
    <el-row class="mains">
      <el-col :span="8">
        <div @click="changed(0)"><p :class="{select:mains[0].change}" class="selects">找人</p></div>
      </el-col>
      <el-col :span="8">
        <div @click="changed(1)"><p :class="{select:mains[1].change}" class="selects">找群</p></div>
      </el-col>
      <el-col :span="8">
        <div @click="changed(2)"><p :class="{select:mains[2].change}" class="selects">找公众号</p></div>
      </el-col>
    </el-row>
    <div class="search">
      <span class="search-icon"><i class="el-icon-search" style="margin-top: 5px"></i>QQ号/手机号/群/公众号</span>
    </div>
    <person v-if="mains[0].change"></person>
    <group v-if="mains[1].change"></group>
    <open v-if="mains[2].change"></open>
  </div>
</template>

<script>
  import person from './search/searchpeople.vue'
  import group from './search/searchgroup.vue'
  import open from './search/searchopen .vue'
  export default {
    components: {
      person,
      group,
      open
    },
    data () {
      return {
        mains: [{
          change: true
        }, {
          change: false
        }, {
          change: false
        }]
      }
    },
    methods: {
      changed (num) {
        for (let i = 0; i < 3; i++) {
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
    position: absolute;
    top: 150px;
    border-bottom: 1px solid #8492A6;
  }
  .selects{
    margin-left: 50px;
    width: 60%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 35px;
    box-sizing: border-box;
  }
  .select{
    border-bottom: 6px solid #1D8CE0;
  }
  .search{
    width: 100%;
    height: 90px;
    line-height: 90px;
    position: absolute;
    top: 300px;
    font-size: 25px;
    color: #8492A6;
    border-top: 1px solid #8492A6;
    border-bottom: 1px solid #8492A6;
  }
  .search-icon{
    margin-left: 25px;
  }
</style>
