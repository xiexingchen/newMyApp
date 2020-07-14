<template>
  <div>
    <div v-for="v in [1,2,3]" :key="v">
      <router-link to="/order/orderdetail">订单条目</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>