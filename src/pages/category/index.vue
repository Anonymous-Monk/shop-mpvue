<template>
  <div class="container">
    <section class="rr_menu_container">
      <section class="rr_menu_left">
        <ul>
          <li class="rr_car_item cut-line" v-for="(item,index) in categoryArr" :key="item.cateTitle">{{item.cateTitle}}</li>
        </ul>
      </section> 
      <section class="rr_menu_right">
            <img class="rr_right_banner" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2707621114,1976356938&fm=27&gp=0.jpg">
            <div>
              <label style="padding-left: 6px;font-size:16px;color:#032A33">热门推荐</label>
              <div class="rr_cate_menu">
                <div class="rr_cate_single_cate" v-for="(item,index) in 7">
                  <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526989087584&di=20261c11b07b1fe906750af6b056b226&imgtype=0&src=http%3A%2F%2Fsem.g3img.com%2Fg3img%2Fmengqibaobei%2Fc2_20170425100528_14248.jpg" style="width:100%;height:60px;margin-top:6px;">
                  <div style="margin-bottom: 6px;margin-left:0px;margin-right:0px;">AK47 </div>
                </div>
              </div>
            </div>
      </section>
      
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: '分类',
      categoryArr: [
      {
        cateTitle: '推荐分类'
      },
      {
        cateTitle: '酒水饮料'
      },
      {
        cateTitle: '家用电器'
      },
      {
        cateTitle: '个护化妆'
      },
      {
        cateTitle: '手机数码'
      }
      ]
    }
  },

  components: {
  },

  methods: {

  },

  created () {

  }
}
</script>

<style scoped>
.container {
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: white;
}

.rr_menu_container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow-y: hidden;
  justify-content: flex-start;
  align-items: flex-start;
}

.rr_menu_left {
  flex-grow: 1;
  height: 100%;
  text-align: center;
  color: #032A33;
  font-size: 14px;
}


.rr_menu_right {
  padding: 8px 8px;
  flex-grow: 4;
}

.rr_car_item {
  height: 44px;
  line-height: 44px;
}

.rr_right_banner {
  background-color: red;
  width: 100%;
  height: 100px;
}

.rr_cate_menu {
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
  width: 31%;
  text-align: center;
  margin-left: 1%;
  margin-right: 1%;
  margin-top: 0px;
  margin-bottom: 0px;
}

/* 分割线 */

.cut-line {
  border-bottom: .5px solid #efefef;
}

</style>
