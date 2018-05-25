<template>
  <div class="container">
    <div class="rr_user_box">
      <div class="rr_user_vip_box">
        <div class="rr_user_vip_box_top">
          <div class="rr_user_v_b_t_l">
            <div class="rr_user_avatar">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526473213002&di=4714446d6c9c312f1dbe1620580f5e37&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F01%2F02%2F15010285-3e4797f78fc86618cdfc125cbe8a7acd-1.jpg">
            </div>
            <div class="rr_user_info">
              <div>寥寥十一</div>
              <div>初级宝宝</div>
              <div>累计金币：8.7亿</div>
            </div>
          </div>
          <div class="rr_user_qrcode">
            <img src="../../../static/image/mine/1526481322.png" height="300" width="300">
          </div>
        </div>
        <div class="rr_user_vip_box_bottom">
          <span style="margin-left:12px;">VIP：673269840</span>
          <span style="margin-right:12px;">至尊黑耀会员</span>
        </div>
      </div>
      <div class="rr_mine_collect">
        <div class="rr_m_c_item" v-for="item in 3">
          <div style="margin-top: 8px;margin-left:0px;margin-right:0px;">256</div>
         <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px;">商品收藏</div>
        </div>
      </div>
    </div>

    <div class="rr_mine_order">
      <div class="rr_mine_order_top cut-line">
        <div style="margin-left:12px;">我的订单</div>
        <div style="margin-right:12px;" @click="gotoOrderView('../order/main')">查看全部订单></div>
      </div>

      <div class="rr_mine_order_bottom">
        <div v-for="item in orderArr">
          <img src="../../../static/image/tabBar/order.png" style="width:26px;height:26px;margin-top:6px;">
          <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px;">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="rr_mine_tool">
      <div class="rr_mine_order_top cut-line">
        <div style="margin-left:12px;">我的钱包</div>
        <div style="margin-right:12px;">余额：1314</div>
      </div>
      <div class="rr_mine_tool_bottom">
        <div class="rr_m_t_item" v-for="item in mineWallet">
          <div style="margin-top: 8px;margin-left:0px;margin-right:0px;font-size:12px;">{{item.subtitle}}</div>
          <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px; font-size:14px;">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="rr_mine_tool">
      <div class="rr_mine_order_top cut-line">
        <div style="margin-left:12px;">我的店铺</div>
        <div style="margin-right:12px;"></div>
      </div>
      <div class="rr_mine_tool_bottom">
        <div class="rr_m_t_item" v-for="item in mineShop">
          <div style="margin-top: 8px;margin-left:0px;margin-right:0px;font-size:12px;">{{item.subtitle}}</div>
          <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px; font-size:14px;">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="rr_mine_tool">
      <div class="rr_mine_order_top cut-line">
        <div style="margin-left:12px;">我的猎人执照</div>
        <div style="margin-right:12px;"></div>
      </div>
      <div class="rr_mine_tool_bottom">
        <div class="rr_m_t_item" v-for="item in mineCer">
          <div style="margin-top: 8px;margin-left:0px;margin-right:0px;font-size:12px;">{{item.subtitle}}</div>
          <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px; font-size:14px;">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div class="rr_mine_tool">
      <ul>
        <li class="cut-line single_line_item">邀请还有</li>
        <li class="cut-line single_line_item">常见问题及解答</li>
        <li class="single_line_item">设置</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      motto: '我的',
      orderArr: [
      {
        'title':'待付款',
        'icon':'123'
      },
      {
        'title':'待发货',
        'icon':'123'
      },
      {
        'title':'待收货',
        'icon':'123'
      },
      {
        'title':'待评价',
        'icon':'123'
      },
      {
        'title':'退货/退款',
        'icon':'123'
      }
      ],
      mineWallet: [
      {
        'title':'赏金',
        'subtitle':'123.00'
      },
      {
        'title':'红包',
        'subtitle':'12.00'
      },
      {
        'title':'返利',
        'subtitle':'16.00'
      }
      ],
      mineShop: [
      {
        'title':'集团',
        'subtitle':'256家'
      },
      {
        'title':'公司',
        'subtitle':'16家'
      },
      {
        'title':'店铺',
        'subtitle':'4家'
      }
      ],
      mineCer: [
      {
        'title':'太阳星',
        'subtitle':'256人'
      },
      {
        'title':'地球星',
        'subtitle':'16人'
      },
      {
        'title':'月亮星',
        'subtitle':'4人'
      }
      ]
    }
  },

  components: {},

  methods: {
    gotoOrderView (url) {
      wx.navigateTo({ url })
    }
  },

  created() {}
}

</script>
<style scoped>
/*mine容器*/

.container {
  padding: 8px 8px;
  background-color: #F4F4F4;
}


/*会员卡信息*/

.rr_user_box {
  margin-top: 0px;
  width: 100%;
}

.rr_user_vip_box {
  background-color: #232931;
  border-radius: 6px;
}

.rr_user_vip_box_top {
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
}

.rr_user_v_b_t_l {
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  padding-top: 12px;
}

.rr_user_info {
  margin-left: 12px;
}

.rr_user_info div:nth-child(1) {
  line-height: 26px;
  font-size: 18px;
  color: #900048;
}

.rr_user_info div:nth-child(2) {
  line-height: 17px;
  font-size: 14px;
  color: #FDB44B;
}

.rr_user_info div:nth-child(3) {
  line-height: 17px;
  font-size: 14px;
  color: #FBFAE1;
}


.rr_user_vip_box_bottom {
  height: 44px;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  font-size: 14px;
  color: #F8F9FC;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 12px;
}

.rr_user_avatar img {
  width: 60px;
  height: 60px;
  margin-left: 12px;
}

.rr_user_qrcode img {
  width: 40px;
  height: 40px;
  margin-right: 12px;
}

/*用户足迹*/
.rr_mine_collect {
  margin-top: -6px;
  background-color: #333644;
  width: 100%;
  height: 44px;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  font-size: 12px;
  color: #F7F6E7;
  align-items: center;
}

.rr_m_c_item {
  margin: 0 auto;
  width: 32%;
  text-align: center;
  margin-left: 1%;
  margin-right: 1%;
}



/*我的订单*/

.rr_mine_order {
  width: 100%;
  margin-top: 6px;
  background-color: white;
}

.rr_mine_order_top {
  height: 32px;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  font-size: 14px;
  color: #323232;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px;
}

.rr_mine_order_bottom {
  height: 60px;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  font-size: 12px;
  color: #283149;
  align-items: center;
}

.rr_mine_order_bottom div {
  flex: 1;
  margin: 0 auto;
  text-align: center;
  margin-left: 6px;
  margin-right: 6px;
}

/*工具栏*/

.rr_mine_tool {
  margin-top: 12px;
  background-color: white;
  width: 100%;
}

.rr_mine_tool_bottom {
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

.rr_mine_tool_bottom .rr_m_t_item {
  margin: 0 auto;
  width: 31%;
  text-align: center;
  margin-left: 1%;
  margin-right: 1%;
}

.single_line_item {
  height: 44px;
  line-height: 44px;
  padding-left: 12px;
  vertical-align: middle;
  color: #404B69;
  font-size: 14px;
}


/* 分割线 */

.cut-line {
  border-bottom: .5px solid #efefef;
}

</style>
