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
    <div class="pone">
      <router-link to="/setgroup"><p><img src="../../img/adds.png" class="add"/>创建群</p></router-link>
    </div>
    <div class="ptwo super">
      <p><img src="../../img/groupzhu.png" class="add"/>超级群主</p>
    </div>
    <div class="pone">
      <p @click="showone = !showone"><img src="../../img/arrow.png" class="arrow" v-bind:class="{open:showone}"/><span>我创建的群</span></p>
    </div>
    <div class="users" v-if="showone">
      <ul>
        <li v-for="(user, index) in users" @click="look(index)">
          <router-link to="/chat">
            <img src="../../img/qunliao.png" class="userhead" />
            <p>{{users[index]}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="ptwo">
      <p @click="showtwo = !showtwo"><img src="../../img/arrow.png"  class="arrow" v-bind:class="{open:showtwo}"/><span>我管理的群</span></p>
    </div>
    <div class="ptwo">
      <p @click="showthree = !showthree"><img src="../../img/arrow.png"  class="arrow" v-bind:class="{open:showthree}"/><span>我加入的群</span></p>
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
        showthree: false,
        users: [
          '我的群聊'
        ]
      }
    },
    methods: {
      look (index) {
        let title = this.users[index]
        bus.$emit('group', title)
      }
    },
    mounted () {
      bus.$on('groupName', (name) => {
        this.users.push(name)
      })
    }
  }
</script>

<style scoped>
.arrow{
  width: 35px;
  height: 35px;
  margin-right: 20px;
  transform: translateY(5px);
}
.add{
  width: 50px;
  height: 50px;
  margin-right: 20px;
  transform: translateY(10px);
}
.super{
  border-top: 1px solid #D3DCE6;
  border-bottom: 1px solid #D3DCE6;
  height: 110px;
}
.super p{
  transform: translateY(20px);
}
.pone p{
  margin-top: 10px;
  margin-left: 25px;
  height: 100px;
  line-height: 100px;
  color: black;
}
.open{
  transform: rotate(90deg);
}
.ptwo p{
  margin-top: -15px;
  margin-left: 25px;
  height: 100px;
  line-height: 100px;
}
.users{
  width: 100%;
  margin-bottom: 25px;
}
.users li{
  height: 100px;
}
.userhead{
  transform: translateY(20px);
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 50%;
  background-color: #fff;
}
.users img{
  width: 85px;
  height: 85px;
}
.users p{
  margin-left: 120px;
  color: black;
  transform: translateY(-60px);
}
#styles{
  font-size: 25px;
  color: #8492A6;
}
</style>
