<template>
<div>
  <div class="my">
    <p><img src="../../img/adds.png" class="add"/>创建多人聊天</p>
  </div>
</div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .my{
    height: 110px;
    line-height: 110px;
    border-bottom: 1px solid #D3DCE6;
  }
  .add{
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-left: 20px;
    transform: translateY(10px);
  }
</style>
