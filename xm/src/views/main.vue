<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/main/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/main/order">订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/main/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active: 0,
    }
  }
};
</script>

<style lang="less" scoped>
// @import "../style/index.less";
// .nav {
//   width: 100%;
//   position: fixed;
//   bottom: 1px;
//   display: flex;
//   justify-content: space-around;
//   font-size: @fs-m;
// }
</style>