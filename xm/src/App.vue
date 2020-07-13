<template>
  <div id="app">
     <router-view></router-view>
    <div class="nav">
      <router-link to="/index">首页</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/mine">我的</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>


<style lang="less" scoped>
@import "./style/index.less";
#app {
  .nav{
    width: 100%;
    position: fixed;
    bottom: 1px;
   display: flex;
   justify-content: space-around;
   font-size: @fs-m
   ;
   

  }
}
</style>
