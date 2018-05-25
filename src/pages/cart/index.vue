<template>
  <div class="container">
    <div class="rr_cart_box">
      <div class="rr_cart_item" v-for="(item,index) in dataList">
        <div class="rr_cart_item_top cut_line_b">
          <div class="rr_cart_b_l">
            <input type="radio" id="one" value="One" v-model="picked" style="zoom:66%;">
            <label style="margin-left6px;font-size:12px;color:gray;" for="one">{{item.shopName}}</label>
          </div>
          <div style="margin-right: 12px;font-size: 12px;color:#404B69;">
            编辑
          </div>
        </div>
        <div class="rr_cart_item_single cut_line_b" v-for="(goods,goodsIdx) in item.shopGoods">
          <input type="radio" id="one" value="One" v-model="picked" style="zoom:66%;">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526971052670&di=fba8200d4ab1f52891dc276013ba2de7&imgtype=0&src=http%3A%2F%2Fbpic.ooopic.com%2F15%2F01%2F02%2F15010285-3e4797f78fc86618cdfc125cbe8a7acd-1.jpg" style="width:100px;height:80px; padding-left: 6px;">
            <ul class="rr_cart_goods_info">
              <li>{{goods.goodsTitle}}</li>
              <li>现价：￥9988</li>
              <li>原价：￥12088</li>
              <li>好评80% 3645人评论</li>
            </ul>
        </div>
      </div>
    </div>
    <div class="rr_cart_bottom cut_line_t">
      <div class="rr_cart_b_l">
        <input type="radio" id="one" value="One" v-model="picked" style="zoom:66%;">
        <label style="margin-left6px;font-size:16px;color:gray;" for="one">全选</label>
      </div>
      <div class="rr_cart_b_r">
        <div class="rr_cart_b_r_info">
          <span class="rr_cart_b_r_info_p">合计：￥12088</span>
          <span class="rr_cart_b_r_info_a">不含运费</span>
        </div>
        <div class="rr_cart_b_r_buy_btn">
          <span>立即购买</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      motto: '购物车',
      dataList: [
      {
        shopName: '苹果官方自营店',
        shopGoods: [
        {
          goodsTitle: 'Apple MacBook Air 13.3英寸笔记本电脑 8G 512GB'
        },
        {
          goodsTitle: 'Apple MacBook Air 13.3英寸笔记本电脑 8G 512GB'
        },
        {
          goodsTitle: 'Apple MacBook Air 13.3英寸笔记本电脑 8G 512GB'
        }
        ]
      },
      {
        shopName: '京东自营店',
        shopGoods: [
        {
          goodsTitle: 'Apple MacBook Air 13.3英寸笔记本电脑 8G 512GB'
        },
        {
          goodsTitle: 'Apple MacBook Air 13.3英寸笔记本电脑 8G 512GB'
        }
        ]
      }
      ]
    }
  },

  components: {},

  methods: {

  },

  created() {

  }
}

</script>
<style scoped>
.container {
  background-color: #ECF0F1;
  height: 100%;
  padding: 0px;
}

/*购物车容器*/
.rr_cart_box {
  margin-top: 0px;
  margin-bottom: 44px;
  width: 100%;
}

.rr_cart_item {
  margin-top: 0px;
}

.rr_cart_item_top {
  background-color: white;
  height: 32px;
  width: 100%;
  top: 0px;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0px;
}

.rr_cart_item_single {
  background-color: white;
  padding: 8px 12px;
  width: 100%;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.rr_cart_goods_info {
  margin-left: 12px;
  margin-right: 12px;
}

.rr_cart_goods_info li:nth-child(1) {
  color: #323232;
  font-size: 14px;
}

.rr_cart_goods_info li:nth-child(2) {
  color: #FDA403;
  font-size: 12px;
}

.rr_cart_goods_info li:nth-child(3) {
  color: #7C7575;
  font-size: 12px;
}

.rr_cart_goods_info li:nth-child(4) {
  color: #7C7575;
  font-size: 12px;
}


/*购物车底部*/
.rr_cart_bottom {
  background-color: white;
  height: 44px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  display: -webkit-flex;
  /* Safari */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0px;
}
.rr_cart_b_l {
  padding-left: 12px;
}

.rr_cart_b_r {
  display: -webkit-flex;
  /* Safari */
  display: flex;
  align-content: center;
  align-items: center;
  padding-top: 0px;
}

.rr_cart_b_r_info {
  /*  height: 44px;
  background-color: green;*/
  /*  padding: 0px 12px;
*/
  text-align: left;
  padding-right: 12px;
}

.rr_cart_b_r_info_p {
  display: block;
  line-height: 24px;
  color: orange;
  font-size: 14px;
}

.rr_cart_b_r_info_a {
  display: block;
  line-height: 20px;
  color: gray;
  font-size: 12px;
}


.rr_cart_b_r_buy_btn {
  height: 44px;
  background-color: red;
  font-size: 18px;
  padding: 0px 12px;
  text-align: center;
}

.rr_cart_b_r_buy_btn span {
  line-height: 44px;
  color: white;
}




/* 分割线 */

.cut_line_b {
  border-bottom: .5px solid #efefef;
}

.cut_line_t {
  border-top: .5px solid #efefef;
}

</style>
