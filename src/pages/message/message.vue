<template>
<div>
  <footers></footers>
  <div class="title">
    <span class="message">消息</span>
    <span class="actions"></span>
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
      }
    },
    methods: {
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
  .message {
    position: fixed;
    top: 65px;
    text-align: center;
  }
  .actions{
    position: fixed;
    top: 65px;
    right: 25px;
    text-align: right;
  }
</style>
