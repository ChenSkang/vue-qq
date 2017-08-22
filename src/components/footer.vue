<template>
<div>
  <headers></headers>
  <div class="foot">
  <el-row>
    <el-col :span="8">
      <router-link to="/message">
        <div class="foot-icons" @click="changeWindow(0)"><img :src="messageImg[num[0].number].imgSrcOne"/><p>消息</p></div>
      </router-link>
    </el-col>
    <el-col :span="8">
      <router-link to="/contact">
        <div class="foot-icons" @click="changeWindow(1)"><img :src="messageImg[num[1].number].imgSrcTwo"/><p>联系人</p></div>
      </router-link>
    </el-col>
    <el-col :span="8">
      <router-link to="/qqspace">
        <div class="foot-icons" @click="changeWindow(2)"><img :src="messageImg[num[2].number].imgSrcThree"/><p>动态</p></div>
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
          number: 1
        }, {
          number: 0
        }, {
          number: 0
        }],
        messageImg: [{
          imgSrcOne: require('../img/message.png'),
          imgSrcTwo: require('../img/friend.png'),
          imgSrcThree: require('../img/star.png')
        }, {
          imgSrcOne: require('../img/messageblue.png'),
          imgSrcTwo: require('../img/friendblue.png'),
          imgSrcThree: require('../img/starblue.png')
        }]
      }
    },
    methods: {
      changeWindow (x) {
        for (let i = 0; i < 3; i++) {
          this.num[i].number = 0
        }
        this.num[x].number = 1
      }
    }
  }
</script>

<style scoped>
.foot{
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  border-top: 1px solid #8a8a8a;
  position: fixed;
  bottom: 0;
}
  .foot-icons{
    text-align: center;
    margin-top: 15px;
  }
  .foot-icons p{
    color: #8a8a8a;
    font-size: 20px;
  }
</style>
