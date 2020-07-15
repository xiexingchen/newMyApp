<template>
  <div class="index">
    <div class="nav">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="NoticeColumn">
      <van-notice-bar left-icon="volume-o" text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。" />
    </div>
    <div class="banner">
      <van-swipe class="my-swipe" indicator-color="white" :autoplay="3000">
        <van-swipe-item v-for="(item,index) in swiperImg" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="writtenWords">
      <div class="guan">
        <span>官</span>官方授权
      </div>
      <div class="zhuan">
        <span>专</span>潍坊学院专属
      </div>
    </div>
    <ul class="recommend">
      <li v-for="(item,index) in recommendDate " :key="index">
        <img :src="item.imgUrl" alt />
        <div>
          <h3>{{item.title}}</h3>
          <p>{{item.price}}</p>
        </div>
      </li>
    </ul>
    <van-tabs type="line" v-model="activeName">
      <van-tab name="1" title="优选餐厅">
        <div class="search">
          <div v-show="showFilterBlock">
            <van-search
              class="block-padding"
              v-model="showFilterValue"
              readonly
              placeholder="点击选择餐厅"
              @click="ShowSelectBlock"
            ></van-search>
          </div>
        </div>
        <ul class="store">
          <li v-for="(item,index) in storeList" :key="index" @click="clickhander(item)">
            <img :src="item.logo" alt />
            <div class="content">
              <h3>{{item.title}}</h3>
              <div class="score">
                <van-rate v-model="value" size="10" />
                <span class="span1">评分：5.0</span>
                <span class="span2">已售：{{item.num}}</span>
              </div>
              <div class="Distribution">起送价：￥0.00 配送费：{{item.delivery_price}}￥</div>
              <div class="recommendDishes">
                <span>推荐菜品：</span>
                {{item.good}}
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab name="2" title="便利超市" title-style="28px"></van-tab>
      <van-tab name="3" title="果蔬生鲜">果蔬生鲜</van-tab>
      <van-tab name="4" title="教辅材料">教辅材料</van-tab>
    </van-tabs>

    <van-popup v-model="filter.show" position="bottom">
      <van-search
        v-model="filter.keyword"
        placeholder="请输入搜索关键词"
        @input="searchValue"
        shape="round"
      ></van-search>
      <van-picker
        show-toolbar
        :columns="filter.resData"
        @cancel="filter.show = false"
        @confirm="filterRes"
      ></van-picker>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
      swiperImg: [
        "https://test.rongdaufun.com/attachment/images/4/2020/06/p4RrTPD6XBGKqKmL9L98OlsV3wtOPHS51Mz.png",
        "https://test.rongdaufun.com/attachment/images/4/2020/02/m9c4haCCPt4tTUTOA4umUd0Jt9o0pn.jpg"
      ],
      recommendDate: [
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/H302a3d7ee13f490a8a1ba87c3cac0c4bE.jpg",
          title: "超值套餐",
          price: "9.9起"
        },
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/H302a3d7ee13f490a8a1ba87c3cac0c4bE.jpg",
          title: "热卖餐品",
          price: ""
        },
        {
          imgUrl:
            "https://ae01.alicdn.com/kf/H302a3d7ee13f490a8a1ba87c3cac0c4bE.jpg",
          title: "好评餐品",
          price: ""
        }
      ],
      showFilterBlock: true,
      showFilterValue: "",
      value: 3,
      filter: {
        show: false,
        keyword: "",
        resData: [
          { id: 0, text: "不限" },
          { id: 1, text: "第一餐厅" },
          { id: 2, text: "第二餐厅" }
        ]
      },
      storeList: [
        {
          delivery_price: "0.01",
          displayorder: "9",
          good: "测试商品",
          id: "1",
          logo:
            "https://test.rongdaufun.com/attachment/images/4/2020/04/bHroadHPpzk4rLBBsCPEGXWWxGQ8jeHMXQ9.png",
          notice: "欢迎同学线上下单1",
          num: "1026",
          restaurant_id: "2",
          restaurant_status: "1",
          title: "一号窗口"
        },
        {
          delivery_price: "0.00",
          displayorder: "1",
          good: "炸刀鱼+豆角肉+糖醋肉+小白菜+米饭1份",
          id: "2",
          logo:
            "https://test.rongdaufun.com/attachment/images/4/2020/04/LCb4MF4HvsVc1RBaGRTAOnMul1xucW0AkYs.jpg",
          notice: "11111",
          num: "25",
          restaurant_id: "2",
          restaurant_status: "1",
          title: "二号窗口"
        },
        {
          delivery_price: "0.00",
          displayorder: "0",
          good: "排骨炖土豆+炸刀鱼+圆葱炒木耳+干煸甘蓝+米饭1份",
          id: "3",
          logo:
            "https://test.rongdaufun.com/attachment/images/4/2020/04/3V2T4UuntbSQhmvG0QJj2QfnkRqgsrzufOZ.jpg",
          notice: "",
          num: "4",
          restaurant_id: "1",
          restaurant_status: "1",
          title: "老潼关肉夹馍"
        },
        {
          delivery_price: "0.00",
          displayorder: "0",
          good: "排骨炖土豆+炸刀鱼+圆葱炒木耳+干煸甘蓝+米饭1份",
          id: "4",
          logo:
            "https://test.rongdaufun.com/attachment/images/4/2020/04/3V2T4UuntbSQhmvG0QJj2QfnkRqgsrzufOZ.jpg",
          notice: "",
          num: "4",
          restaurant_id: "1",
          restaurant_status: "1",
          title: "老潼关肉夹馍"
        },
        {
          delivery_price: "0.00",
          displayorder: "0",
          good: "排骨炖土豆+炸刀鱼+圆葱炒木耳+干煸甘蓝+米饭1份",
          id: "5",
          logo:
            "https://test.rongdaufun.com/attachment/images/4/2020/04/3V2T4UuntbSQhmvG0QJj2QfnkRqgsrzufOZ.jpg",
          notice: "",
          num: "4",
          restaurant_id: "1",
          restaurant_status: "1",
          title: "老潼关肉夹馍"
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
    },
    ShowSelectBlock() {
      this.filter.show = true;
    },
    searchValue() {},
    filterRes() {},
    clickhander(item) {
      this.$router.push({name:"storedetial",query:{storeId:item.id,storeImg:item.logo,delivery_price:item.delivery_price,title:item.title}});
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/index.less";
.index {
  background: @white;
  .van-nav-bar {
    background: @black;
    color: red;
    .van-nav-bar__text {
      color: red !important;
    }
  }
  .banner {
    .my-swipe .van-swipe-item {
      height: 3.466rem;
      color: #fff;
      text-align: center;
      img {
        .w(345);
        height: 100%;
        border-radius: 5px;
      }
    }
  }
  .writtenWords {
    display: flex;
    font-size: @fs-s;
    line-height: 1;
    padding: 2% 4%;
    color: #6a6a6a;
    align-items: center;
    .guan {
      margin-right: 0.8rem;
      span {
        font-size: @fs-ss;
        margin-right: 0.2rem;
        background: @red;
        color: @white;
      }
    }
    .zhuan {
      span {
        font-size: @fs-ss;
        margin-right: 0.2rem;
        background: @red;
        color: @white;
      }
    }
  }
  .recommend {
    display: flex;
    justify-content: space-between;
    li {
      position: relative;
      div {
        position: absolute;
        top: 6px;
        left: 24px;
        text-align: left;
      }
      text-align: center;
      width: 33.33%;
      img {
        .w(110);
        height: 2.66rem;
      }
      h3 {
        font-size: @fs-s;
        color: #5b504e;
      }
      p {
        font-size: @fs-s;
        color: #e15b49;
      }
    }
  }
  .store {
    margin-bottom: 1.5rem;
    li {
      display: flex;
      line-height: 1;
      padding: 2% 4%;

      img {
        .w(86);
        height: 2.13rem;
        border-radius: 0.266rem;
      }
      .content {
        .w(250);
        padding-left: 5%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        h3 {
          font-size: @fs-m;
          color: #474747;
        }
        .score {
          font-size: @fs-xs;
          color: #4a4a4a;
          margin: 3% 0 2% 0;
        }
        .Distribution {
          font-size: @fs-xs;
          color: B6B6B6;
          margin-bottom: 5%;
        }
        .recommendDishes {
          font-size: @fs-xs;
          color: #de7f7f;
          line-height: 1;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span {
            color: #6a6a6a;
          }
        }
      }
    }
  }
}
</style>>
