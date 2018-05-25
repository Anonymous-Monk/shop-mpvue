<template>
  <div class="page">
    <div class="rr_search_wrap">
      <div class="rr_search_left">
        <span style="line-height: 40px;color:#F7B633;font-size:14px;">桔子商城</span>
      </div>
      <div class="rr_search_middle">
        <div style="height:28px; margin: 6px 6px; background-color:white;border-radius: 14px;text-align:center;font-size: 12px;color:#272E4F;"><span style="line-height: 28px;">搜索</span></div>
      </div>
      <div class="rr_search_right">
        <img src="../../../static/image/home/home_message.png" style="width:32px;height:32px;margin-top:4px;">
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="item in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
    <!-- 菜单 -->
    <div class="rr_cate_menu cut-line">
      <div class="rr_cate_single_cate" v-for="(item,index) in menuArr">
        <img :src="item.icon" style="width:36px;height:36px;margin-top:6px;">
          <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px;">{{item.title}}</div>
      </div>
    </div>
    <!-- 广告轮播 -->
    <div class="rr_home_ad_scroll cut-line">
      <img src="../../../static/image/home/home_ad_message.png" style="width:38px;height:24px;display: inline-block;margin-top:4px;margin-left:12px;">
      <div class="box">
        <transition-group name="list-complete" tag="div" class="content">
          <div class="list-complete-item" v-for="mockItem in mockAwardList" v-bind:key="mockItem">{{ mockItem }}</div>
        </transition-group>
      </div>
    </div>

    <div>
      <div class="rr_hone_spe1_top"><span>特色市场</span></div>
      <div class="rr_hone_spe1">
        <div class="rr_hone_spe1_l cut-line_r" style="background-color:white;height:200px">
          <div>佣金商城</div>
          <img src="../../../static/image/home/u260.png" style="width:50%;height:80%;">
        </div>
        <div class="rr_hone_spe1_r">
          <div class="rr_hone_spe1_r_s" style="background-color:white;height:100px;width:100%;">
            <div class="rr_hone_spe1_r_title">男装精品</div>
            <img class="rr_hone_spe1_r_img" src="../../../static/image/home/u252.png" style="width:50%;height:60%;">
          </div>
          <div class="cut-line_t rr_hone_spe1_r_s" style="background-color:white;height:100px;width:100%;">
            <div class="rr_hone_spe1_r_title">推荐购</div>
            <img class="rr_hone_spe1_r_img" src="../../../static/image/home/u226.png" style="width:50%;height:60%;">
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:12px;">
      <div style="background-color:white;height:140px;width:100%;">
        <img src="../../../static/image/home/u127.png" style="width:100%;height:100%;">
      </div>
      <div class="rr_hone_spe1">
        <div class="rr_hone_spe1_l" style="background-color:#C7F3FF;height:200px;text-align:center;">
          <div>手机馆</div>
          <img src="../../../static/image/home/u274.png" style="width:50%;height:80%;margin-top:10%;">
        </div>
        <div class="rr_hone_spe1_r">
          <div class="rr_hone_spe1_r_s" style="background-color:#F6FFCD;height:100px;width:100%;">
            <div class="rr_hone_spe1_r_title">日用品馆</div>
            <img class="rr_hone_spe1_r_img" src="../../../static/image/home/u305.png" style="width:50%;height:80%;">
          </div>
          <div class="rr_hone_spe1_r_s" style="background-color:#FEF4E8;height:100px;width:100%;">
            <div class="rr_hone_spe1_r_title">家电馆</div>
            <img class="rr_hone_spe1_r_img" src="../../../static/image/home/u307.png" style="width:50%;height:80%;">
          </div>
        </div>
      </div>
    </div>

    <div class="rr_home_fav">
      <div>
        <div style="color:#393939;font-size:14px;">猜你喜欢</div>
        <div style="color:#4E413B;font-size:12px;">——— 23：58更新 ———</div>
      </div>
      <div class="rr_home_fav_goods">
        <div class="rr_home_fav_goods_item" v-for="(item,index) in 4">
          <img src="../../../static/image/home/u299.png" style="width:80%;height:160px;margin-top:12px;">
          <div>健身器械</div>
          <div>￥688</div>
        </div>
      </div>
    </div>



  </div>
</template>

<script>


export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      mockAwardList: [
        '137xxxx5722用户砸中xxxx',
        '188xxxx1234用户砸中xxxx',
        '180xxxx5482用户砸中xxxx',
        '144xxxx0192用户砸中xxxx',
        '189xxxx2932用户砸中xxxx',
        '182xxxx1029用户砸中xxxx',
        '177xxxx9527用户砸中xxxx',
        '132xxxx7252用户砸中xxxx',
        '135xxxx1832用户砸中xxxx',
        '190xxxx1362用户砸中xxxx'
      ],
      imgUrls: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527067044033&di=588edbff8902323a4c5b62b19bbea40b&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F07%2F23%2F26bOOOPICf1_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527067044033&di=de7e2a47f5b7ab2682d98d40da2132c1&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F11%2F66%2F23%2F55bOOOPIC3c_1024.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527067044031&di=ce411e6b66ff3c6331583cd3cc2f1f00&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01262d59964009a80121560309adee.jpg%401280w_1l_2o_100sh.jpg'
      ],
      menuArr: [
      {
        'title':'厂家入住',
        'icon':'../../../static/image/home/canyin.png'
      },
      {
        'title':'成为猎人',
        'icon':'../../../static/image/home/lifelabel.png'
      },
      {
        'title':'充值',
        'icon':'../../../static/image/home/lifeservice.png'
      },
      {
        'title':'人气',
        'icon':'../../../static/image/home/roadstate.png'
      },
      {
        'title':'优惠券',
        'icon':'../../../static/image/home/shopping.png'
      },
      {
        'title':'领赏金',
        'icon':'../../../static/image/home/traffic.png'
      },
      {
        'title':'闲置品',
        'icon':'../../../static/image/home/yiliao.png'
      },
      {
        'title':'更多',
        'icon':'../../../static/image/home/more.png'
      }
      ]
    }
  },
  components: {
    
  },
  methods: {
    swiperChange(e) {
      console.log('第' + e.mp.detail.current + '张轮播图发生了滑动');
    },
    animationfinish(e) {
      console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
    },
    move: function () {
      this.mockAwardList.splice(0, 1)
    }
  },
  mounted: function () {
    this.move()
  },
  watch: {
    mockAwardList: function (val, oldVal) {
      const _self = this
      if (val.length !== 11 && val.length !== 0) {
        setTimeout(_ => {
          _self.move()
        }, 3000)
      } else {
        console.log('play is over')
      }
    }
  }
}
</script>

<style>
.rr_search_wrap {display: flex; justify-content: space-between;align-items: center;align-content: center;}
.rr_search_left, .rr_search_right, .rr_search_middle {height: 40px;}
.rr_search_left {width: 100px; background: #272E4F;text-align: center;}
.rr_search_right {width: 56px; background: #272E4F;text-align: center;}
.rr_search_middle {background: #272E4F; width: 100%; margin: 0;}

.slide-image {
  width: 100%;
  height: 100%;
}

.rr_cate_menu {
  margin-top: 12px;
  display: -webkit-flex;
  width: 100%;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 12px;
  color: #283149;
  align-content: flex-start;
}

.rr_cate_single_cate {
  margin: 0 auto;
  width: 23%;
  text-align: center;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 0px;
  margin-bottom: 0px;
}

.rr_home_ad_scroll {
  width: 100%;
  background-color: white;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
}


.rr_home_ad_scroll .box {
  margin: auto;
  height: 32px;
  margin-left: 4px;
  line-height: 32px;
  width: 80%;
}
.rr_home_ad_scroll .box .content {
  display: flex;
  margin: auto;
  height: 32px;
  overflow: hidden;
}
.list-complete-item {
  width: 300px;
  height: 100%;
  color: #4E413B;
  font-size: 12px;
  flex-shrink: 0; /*指定 flex 元素的收缩规则*/
  transition: all 1s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0.4;
  transform: translateX(-200px);
}
.list-complete-leave-active {
  position: absolute;
}

.rr_hone_spe1_top {
  margin: 0 auto;
  padding-left: 12px;
  width: 100%;
  color: #8559A5;
  font-size: 16px;
  height: 32px;
}

.rr_hone_spe1_top span {
  line-height: 32px;
}

.rr_hone_spe1 {
  margin-top: 0px;
  display: -webkit-flex;
  width: 100%;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 12px;
  color: #283149;
  align-content: center;
  align-items: center;

}

.rr_hone_spe1_l {
  width: 49.5%;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 12px;
  color: #283149;
  align-items: flex-start;
}

.rr_hone_spe1_l div {
  margin-top: 10%;
  margin-left: 12px;
  margin-right: 12px;
  color: #333644;
  font-size: 15px;
}

.rr_hone_spe1_r {
  margin: 0 auto;
  width: 50%;
}

.rr_hone_spe1_r_s {
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  color: #283149;
  align-items: center;
}

.rr_hone_spe1_r_title {
  margin-left: 12px;
  color: #333644;
  font-size: 15px;
}

.rr_hone_spe1_r_img {
  margin-right: 12px;
  float: right;
}

.rr_home_fav {
  padding-top: 6px;
  width: 100%;
  text-align: center;
}

.rr_home_fav_goods {
  margin-top: 0px;
  display: -webkit-flex;
  width: 100%;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 12px;
  color: #283149;
  align-content: flex-start;
}

.rr_home_fav_goods_item {
  margin: 0 auto;
  width: 46%;
  text-align: center;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 2%;
  margin-bottom: 0px;
  outline: .5px solid #B7B7B7;

}

/* 左浮动 右浮动*/

.fl {
  float: left;
}

.fr {
  float: right;
}

/* 分割线 */

.cut-line {
  border-bottom: .5px solid #efefef;
}

.cut-line_r {
  border-right: .5px solid #efefef;
}

.cut-line_t {
  border-top: .5px solid #efefef;
}

</style>
