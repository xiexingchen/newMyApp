import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';


// 入口
import Main from './views/main.vue';


// 首页
import Home from './views/home/home.vue';
// import Prefer from './views/home/preferredRestaurants.vue';
// import Excellent from './views/home/excellent.vue';
// import Fresh from './views/home/freshFruitsAndVegetables.vue';
// import Teaching from './views/home/Teaching.vue';

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
      redirect:'/main'
    },
    {
      path: "/main",
      name: "main",
      component:Main,
      redirect:'main/home',
      children:[
        {
          path: "home",
          name: "home",
          component: Home,
          // redirect:'home/prefer',
          // children: [
          //   {
          //     path: "prefer",
          //     name: "prefer",
          //     component: Prefer
          //   },
           
          //   {
          //     path: "excellent",
          //     name: "excellent",
          //     component: Excellent
          //   },
    
          //   {
          //     path: "fresh",
          //     name: "fresh",
          //     component: Fresh
          //   },
          //   {
          //     path: "teaching",
          //     name: "teaching",
          //     component: Teaching
          //   }
          // ],
        
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
      path:'/order',
      name:'order',
      component:orderType,
      children:[
        {
          path:'orderdetail',
          name:'orderdetail',
          component:Orderdetail,
        }
      ]
    },
    {
      path:'/mine',
      name:'mine',
      children:[
        {
          path:'address',
          name:'address',
          component:Address,
        }
      ]
    },
  ]
})
