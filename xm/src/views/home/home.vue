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
    <van-tabs type="card" v-model="activeName">
      <van-tab name="1" title="优选餐厅">优选餐厅</van-tab>
      <van-tab name="2" title="便利超市">便利超市</van-tab>
      <van-tab name="3" title="果蔬生鲜">果蔬生鲜</van-tab>
      <van-tab name="4" title="教辅材料">教辅材料</van-tab>
    </van-tabs>
    <!-- <div class="tar">
      <router-link to="prefer">优选餐厅</router-link>
      <router-link to="excellent">便利超市</router-link>
      <router-link to="fresh">果蔬生鲜</router-link>
      <router-link to="teaching">教辅材料</router-link>
    </div>
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
    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName:'1',
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
      showFilterValue: ""
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    ShowSelectBlock() {}
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
}
</style>>
