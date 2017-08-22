<template>
  <div class="main">
    <div class="pone">
      <p><img src="../../img/adds.png" class="add"/>创建群</p>
    </div>
    <div class="ptwo super">
      <p><img src="../../img/groupzhu.png" class="add"/>超级群主</p>
    </div>
    <div class="pone">
      <p @click="showone = !showone"><img src="../../img/arrow.png" class="arrow" v-bind:class="{open:showone}"/><span>我创建的群</span></p>
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
  export default {
    data () {
      return {
        showone: false,
        showtwo: false,
        showthree: false
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
</style>
