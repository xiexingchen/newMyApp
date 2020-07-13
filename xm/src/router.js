import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue';
import Index from "./views/index/index";
import Order from "./views/order/order";
import Mine from "./views/mine/mine";
import Excellent from "./views/index/convenienceSupermarket";
import Prefer from "./views/index/preferredRestaurants";
import Fresh from "./views/index/freshFruitsAndVegetables";
import Teaching from "./views/index/Teaching";
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
      redirect:'index/Prefer'
    },
    {
      path: "/index",
      name: "index",
      component: Index,
      children: [
        {
          path: "prefer",
          name: "prefer",
          component: Prefer
        },
       
        {
          path: "excellent",
          name: "excellent",
          component: Excellent
        },

        {
          path: "fresh",
          name: "fresh",
          component: Fresh
        },
        {
          path: "teaching",
          name: "teaching",
          component: Teaching
        }
      ],
    
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/mine",
      name: "mine",
      component: Mine
    }
  ]
})
