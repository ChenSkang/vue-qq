<template>
<div>
  <footers></footers>
  <div class="title">
    <span class="friends">动态</span>
    <router-link to="/more">
      <span class="more">更多</span>
    </router-link>
  </div>
</div>
</template>

<script>
  import footers from '../../components/footer.vue'
  export default {
    components: {
      footers
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style scoped>
  .title span{
    color: #fff;
    font-family: PingFang SC;
    font-size: 40px;
    width: 100%;
  }
  .friends {
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .more{
    position: fixed;
    top: 65px;
    right: 25px;
    text-align: right;
  }
</style>
