<template>
<div class="head">
  <div class="account"><img src="../img/qqhead.jpg" /></div>
</div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.head{
  background-color: #20A0FF;
  width: 100%;
  height: 150px;
  position: fixed;
  top: 0;
}
  .account{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    left: 25px;
    top: 50px;
  }
  .account img{
    width: 75px;
    height: 75px;
  }
</style>
