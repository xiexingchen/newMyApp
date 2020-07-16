<template>
  <div class="storedetial">
    <div class="header">
      <div class="nav">
        <van-nav-bar
          left-text="返回"
          left-arrow
          @click-left="onClickLeft"
          @click-right="onClickRight"
        />
      </div>

      <div class="store">
        <div class="text">
          <h2>{{storeTitle}}</h2>
          <div class="distribution">
            <span>起送价￥0.00</span>
            <span>配送费￥{{delivery_price}}</span>
          </div>
          <div class="Notice">公告：欢迎线上同学下单</div>
        </div>
        <div class="picter">
          <img :src="storeImg" alt />
        </div>
      </div>
    </div>
    <div class="header1">
      <van-tabs class="store-body" v-model="active">
        <van-tab title="商品">
          <div class="Exhibition">
            <ul class="index">
              <li
                v-for="(item,index) in list"
                :key="index"
                :class="index==sel?'active':''"
                @click="clickHander(index)"
              >{{item.title}}</li>
            </ul>

            <ul class="list" @scroll="scrollHandler">
              <li class="list-item" v-for="(item1,index1) in list" :key="index1">
                <h2>{{item1.title}}</h2>
                <div class="img-text" v-for="(item2,index2) in item1.goods" :key="index2">
                  <div class="imge">
                    <img :src="item2.thumb" alt />
                  </div>
                  <div class="list-text">
                    <h3>{{item2.title}}</h3>
                    <p>剩余:{{item2.total==-1? 999:item2.total-item2.today_sell}}</p>
                    <div class="add">
                      <span class="span1">￥{{item2.price}}</span>
                      <div class="box1">
                        <span class="span2" @click="subtraction(index1,index2)">-</span>
                        <span>{{item2.number}}</span>
                        <span class="span2" @click="addNum(index1,index2)">+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <van-goods-action class="flied">
            <van-goods-action-icon icon="cart-o" text="购物车" :badge="bages" />
            <van-goods-action-button type="danger" text="立即下单" />
          </van-goods-action>
        </van-tab>
        <van-tab title="商家">商家</van-tab>
      </van-tabs>
    </div>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      storeId: "",
      storeImg: "",
      storeTitle: "",
      delivery_price: "",
      sel: 0,
      bages: 0,
      list: [
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "周二菜单",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "9",
          end_time: "",
          id: "25",
          is_showtime: "0",
          start_time: "",
          title: "蔬菜",
          week: "",
          goods: [
            {
              box_price: "",
              id: "2836",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/05/iYfNze9eafK6fNnAZmCiOBpMgibCVcM1ZJO.jpg",
              title: "红烧肉1",
              today_sell: "0",
              total: "0"
            }
          ]
        },
        {
          displayorder: "2",
          end_time: "",
          id: "22",
          is_showtime: "0",
          start_time: "",
          title: "小吃",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2718",
              number: 0,
              price: "12",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2019/07/Sz59SePIbSPof8RbOKpR018SdOwKnl.jpg",
              title: "小肉包",
              today_sell: "70",
              total: "99"
            },
            {
              box_price: "0",
              id: "2718",
              number: 0,
              price: "12",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2019/07/Sz59SePIbSPof8RbOKpR018SdOwKnl.jpg",
              title: "小肉包",
              today_sell: "70",
              total: "99"
            },
            {
              box_price: "0",
              id: "2718",
              number: 0,
              price: "12",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2019/07/Sz59SePIbSPof8RbOKpR018SdOwKnl.jpg",
              title: "小肉包",
              today_sell: "70",
              total: "99"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "中吃",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类9",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类8",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类7",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类6",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试废分类5",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类4",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类1",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类3",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        },
        {
          displayorder: "245",
          end_time: "",
          id: "39",
          is_showtime: "0",
          start_time: "",
          title: "测试分类2",
          week: "",
          goods: [
            {
              box_price: "0",
              id: "2855",
              number: 0,
              price: "1",
              thumb:
                "https://test.rongdaufun.com/attachment/images/4/2020/06/V68bxJecY9s3ivJPoZxqhb2UglOYXAgHXgr.png",
              title: "商品名称11",
              today_sell: "2",
              total: "-1"
            }
          ]
        }
      ]
    };
  },
  methods: {
    scrollTopAnFun() {
      var running = false,
        gapNum; // 时间切割份数变量

      return function selfFun(params) {
        var { el, to, form, time } = params;
        // ---------变量区------------
        const VDIRECTIONE = to < form ? "up" : "bottom",
          GAPVAL = to > form ? to - form : to == form ? 0 : form - to, // 相差值
          TIMEGAP = 10, // 流畅度
          GAPNAM = GAPVAL / TIMEGAP; //(time * TIMEGAP) / gapVal // 时间切割份数

        var nextScrollTopVal = 0; // 下一个滚动值

        // ----------纯函数区-------------
        /**
         * 获取下一个滚动值
         */
        let getnextScrollTop = ({ val, nbak, n, elTop }) => {
          return VDIRECTIONE == "up"
            ? elTop + (nbak - n) * val
            : elTop - (nbak - n) * val;
        };

        // ----------函数区---------------
        // 动画结束又执行新的任务
        function NewEvent() {
          console.log("scroll正在使用");
          // 暂停当前任务
          gapNum = 0;
          // 执行新任务
          window.setTimeout(() => {
            let p = Object(params, {
              to: el.scrollTop
            });
            // 取消限制
            running = false;
            selfFun(p);
          }, TIMEGAP + 1);
        }
        // 滚动动画结束
        let ScrollDefer = () => {
          running = false;
          gapNum = false;

          // 因为精确度问题， 需要手动修复
          if (form == 0) {
            el.scrollTop = 0;
          }
        };
        // scroll动画
        let SetScroll = () => {
          // 执行次数
          gapNum--;
          if (gapNum <= 0) {
            ScrollDefer();
            return;
          }

          // 逻辑处理
          let cors = () => {
            if (gapNum === false) {
              return;
            }

            // 获取下一个top
            nextScrollTopVal = getnextScrollTop({
              val: TIMEGAP,
              nbak: GAPNAM,
              n: gapNum,
              elTop: to,
              VDIRECTIONE
            });

            // 防止闪屏
            nextScrollTopVal && (el.scrollTop = nextScrollTopVal);

            SetScroll();
          };
          // 执行下一个
          window.setTimeout(cors, TIMEGAP);
        };

        // ------------ main -------------
        function main() {
          // 动画结束又执行新的任务
          if (running) {
            NewEvent();
            return;
          }

          running = true;
          gapNum = GAPNAM;

          // 设置scroll （递归函数）
          SetScroll();
        }
        main();
      };
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    clickHander(index) {
      this.sel = index;
      let listIndexNumTop = [
        ...document.getElementsByClassName("list-item")
      ].reduce((pre, curr, i) => {
        if (i < index) {
          pre += curr.clientHeight;
        }
        return pre;
      }, 0);
      let scrollTopAn = this.scrollTopAnFun();
      scrollTopAn({
        el: document.getElementsByClassName("list")[0], // 滚动元素
        to: document.getElementsByClassName("list")[0].scrollTop, // 开始位置
        form: listIndexNumTop, // 结束位置
        time: 1e3 * 0.5 // 所需时间
      });
    },
    scrollHandler(e) {
      let listScrollTop = document.getElementsByClassName("list")[0].scrollTop;
      let listItemHeightArr = [
        ...document.getElementsByClassName("list-item")
      ].map(v => v.clientHeight);
      let listItemInparentHeightArr = [];
      listItemHeightArr.reduce((pre, curr, i) => {
        pre += curr;
        listItemInparentHeightArr.push(pre);
        return pre;
      }, 0);
      let index = listItemInparentHeightArr.findIndex(v => v > listScrollTop);
      this.sel = index > 0 ? index - 1 : 0;
    },
    addNum(index1, index2) {
      this.list[index1].goods[index2].number++;

      if (!numArr) {
        
        var numArr = [];
        for (let i=0;i<list.length;i++){
              
        }
        numArr.push(this.list[index1].goods[index2].number);
        // this.bages=numArr.reduce(function(prev, cur) {
        //   return prev + cur;
        // }, 0);
      } else {
        numArr.push(this.list[index1].goods[index2].number);
      }
      console.log(this.list[index1].goods[index2].number,numArr)
    },
    subtraction(index1, index2) {
      this.list[index1].goods[index2].number == 0
        ? 0
        : this.list[index1].goods[index2].number--;
      //console.log(11111,this.bages)
    }
  },
  //   beforeRouteEnter(to, from, next) {

  //     next((vm)=>{
  //          console.log(vm)
  //          mm.storeTitle=to.query.title;
  //     });
  //         let { storeId, storeImg, title, delivery_price } = this.$route.params;
  //         this.storeId = storeId;
  //         this.storeImg = storeImg;
  //         this.title = title;
  //         this.delivery_price = delivery_price;
  //     console.log(to, from);
  //   },
  created() {
    console.log(this);
    let { storeId, storeImg, title, delivery_price } = this.$route.query;
    this.storeId = storeId;
    this.storeImg = storeImg;
    this.storeTitle = title;
    this.delivery_price = delivery_price;
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.storedetial {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    .store {
      display: flex;
      justify-content: space-between;
      padding: 0.4rem;

      .text {
        h2 {
          font-size: @fs-l;
          margin-bottom: 0.1rem;
        }
        .distribution {
          font-size: @fs-xs;
          color: #4a4a4a;
          margin-bottom: 0.2rem;
        }
        .Notice {
          font-size: @fs-xs;
          color: #a7a0a0;
        }
      }
      .picter {
        .w(75);
        height: 1.87rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .header1 {
    flex: 1;
    .store-body {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
}

.Exhibition {
  margin-top: 12px;
  line-height: 1;
  display: flex;
  height: 10.72rem;

  .index {
    .active {
      border-left: 3px solid red;
      background-color: #fff;
    }
    font-size: @fs-s;
    color: #6a6a6a;
    width: 25%;
    overflow: scroll;
    li {
      padding: 0.32rem 0.14rem 0.373rem 0.28rem;
      background-color: #f9f9f9;
    }
  }
  .list {
    width: 75%;
    overflow: scroll;
    li {
      // padding:5px 0;
      h2 {
        font-size: @fs-xs;
        color: #9a9a9a;
        margin-bottom: 8px;
      }
      .img-text {
        display: flex;
        margin: 0 0 10px 0;

        align-content: center;
        .imge {
          .w(75);
          height: 1.73rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-size: @fs-s;
          margin-left: 0.32rem;
          justify-content: space-between;
          .add {
            display: flex;
            justify-content: space-around;
            align-items: center;
            .box1 {
              flex: 1;
              display: flex;
              justify-content: flex-end;
              // padding-right: 20px;
              align-items: center;
              span {
                width: 20px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                margin-right: 20px;
              }
              .span2 {
                // padding: 4px 10px;
                border-radius: 50%;

                background: green;
              }
            }
            .span1 {
              font-size: 10px;
              margin-right: 10px;
              line-height: 12px;
            }
          }
        }
      }
    }
  }
}
</style>>

