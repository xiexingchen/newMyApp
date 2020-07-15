import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';


// 入口
import Main from './views/main.vue';

//注册
import Register from './views/register.vue';

// 首页
import Home from './views/home/home.vue';
// const storeDetial = () => import('./views/home/storedetial');
import storeDetial from "./views/home/storedetial";
//import Commodity from "./views/home/commodity";
// 订单类
import Order from './views/order/order.vue';
import orderType from './views/order/index.vue';
import Orderdetail from './views/order/orderdetail.vue';
// 下单
// 详情
// 支付


// 我的
import Mine from './views/mine/mine.vue';
import Address from './views/mine/address.vue';
// 收货地址
// 积分
// 评价


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/Register'
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/main",
      name: "main",
      component: Main,
      redirect: 'main/home',
      children: [
        {
          path: "home",
          name: "home",
          component: Home,
        },
        {
          path: "order",
          name: "order",
          component: Order
        },
        {
          path: "mine",
          name: "mine",
          component: Mine
        }
      ]
    },
    {
      path: '/order',
      name: 'order',
      component: orderType,
      children: [
        {
          path: 'orderdetail',
          name: 'orderdetail',
          component: Orderdetail,
        }
      ]
    },
    {
      path:"/storedetial",
      name:"storedetial",
      component:storeDetial,
      //redirect:"storedetial/commodity",
      // children:[
      //   {
      //     path: "commodity",
      //     name: "commodity",
      //     component: Commodity,
      //   }
      // ]
    },
    {
      path: '/mine',
      name: 'mine',
      children: [
        {
          path: 'address',
          name: 'address',
          component: Address,
        }
      ]
    },
  ]
})
