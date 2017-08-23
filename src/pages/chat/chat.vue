<template>
<div>
  <div class="title">
    <span class="more">{{username}}</span>
    <router-link to="/message">
      <div class="friends">
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
        this.userhead = imgSrc
        this.username = title
        this.styles = style
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
  .title span{
    color: #fff;
    font-family: PingFang SC;
    position: fixed;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
  }
  .arrowleft{
    transform: translate(-30px);
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
  }
</style>
