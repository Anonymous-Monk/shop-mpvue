import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
import '../static/weui/weui.css'
const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    "pages": [
      "^pages/index/main",
      "pages/category/main",
      "pages/cart/main",
      "pages/mine/main",
      "pages/order/main"
    ],
    "window": {
      "backgroundTextStyle": "dark",
      "backgroundColor": "#272E4F",
      "navigationBarBackgroundColor": "#272E4F",
      "navigationBarTextStyle": "white"
    },
    "tabBar": {
      "color": "#919190",
      "selectedColor": "#272E4F",
      "backgroundColor": "#FFFFFF",
      "borderStyle": "black",
      "position": "bottom",
      "list": [
        {
          "pagePath": "pages/index/main",
          "text": "首页",
          "iconPath": "static/image/tabBar/home.png",
          "selectedIconPath": "static/image/tabBar/home-active.png"
        },
        {
          "pagePath": "pages/category/main",
          "text": "分类",
          "iconPath": "static/image/tabBar/order.png",
          "selectedIconPath": "static/image/tabBar/order-active.png"
        },
        {
          "pagePath": "pages/cart/main",
          "text": "购物车",
          "iconPath": "static/image/tabBar/cart.png",
          "selectedIconPath": "static/image/tabBar/cart-active.png"
        },
        {
          "pagePath": "pages/mine/main",
          "text": "我的",
          "iconPath": "static/image/tabBar/user.png",
          "selectedIconPath": "static/image/tabBar/user-active.png"
        }
      ]
    },
    "networkTimeout": {
      "request": 60000
    }
  }
}
