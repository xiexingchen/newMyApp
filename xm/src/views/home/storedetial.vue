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
    <van-tabs v-model="active">
      <van-tab title="商品">
        商品
        <div class="Exhibition">
          <ul class="index">
            <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
          </ul>

          <ul class="list">
            <li v-for="(item1,index1) in list" :key="index1">
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
                    <div>
                      <span>-</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </van-tab>
      <van-tab title="商家">商家</van-tab>
    </van-tabs>
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
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
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
    console.log(this.$route);
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
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
.Exhibition {
  line-height: 1;
  display: flex;
  .index {
    font-size: @fs-s;
    color: #6a6a6a;
    width: 25%;
    li{
         padding:.32rem .14rem .373rem .28rem;
    }
  }
  .list {
    width: 75%;
    li {
         
      h2 {
        font-size: @fs-xs;
        color: #9a9a9a;
      }
      .img-text {
           display: flex;
        .imge {
          .w(75);
          height: 1.73rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .list-text {
          font-size: @fs-s;
          margin-left:0.32rem;
          .add{
               display: flex;
               // justify-content: space-around;
               .span1{
                    font-size: 10px;
               }
          }
        }
      }
    }
  }
}
</style>>

