<template>
<div class="main">
  <div class="heart">
    <p @click="showone = !showone"><img src="../../img/arrow.png" class="arrow" v-bind:class="{open:showone}"/><span>特别关心</span></p>
  </div>
  <div class="people">
    <p @click="showtwo = !showtwo"><img src="../../img/arrow.png"  class="arrow" v-bind:class="{open:showtwo}"/><span>我的好友</span></p>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        showone: false,
        showtwo: false
      }
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
  .heart p{
    margin-top: 10px;
    margin-left: 25px;
    height: 100px;
    line-height: 100px;
  }
  .open{
    transform: rotate(90deg);
  }
  .people p{
    margin-top: -15px;
    margin-left: 25px;
    height: 100px;
    line-height: 100px;
  }
</style>
