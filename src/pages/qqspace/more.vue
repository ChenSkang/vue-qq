<template>
  <div>
    <div class="title">
      <span class="more">更多</span>
      <router-link to="/qqspace">
        <span class="friends">动态</span>
      </router-link>
    </div>
    <div class="objects">
      <ul>
        <li class="list-title">已关闭的功能</li>
        <li v-for="list in lists">
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lists: [{
          value: '日迹'
        }]
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
  .title span{
    color: #fff;
    font-family: PingFang SC;
    font-size: 40px;
    width: 100%;
  }
  .more {
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .friends{
    position: fixed;
    top: 65px;
    left: 25px;
    text-align: left;
  }
</style>
