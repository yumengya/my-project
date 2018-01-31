import Vue from 'vue'
import Router from 'vue-router'
import home from '../view/home.vue';
//引入子页面的路由
import gis from '../view/page/gisbim';
import product_list from '../view/page/chanpinqingdan';
import designDelivery from  '../view/page/shejijaofu';
import taizhang from '../view/page/taizhang';
Vue.use(Router);
export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: home,
      iconCls: 'el-icon-message',
      children:[
        { path: '/home/gis', component:gis, name: 'GIS+BIM'},
        { path: '/home/product_list', component:product_list, name: '产品清单' },
        { path: '/home/designDelivery', component:designDelivery, name: '设计交付' },
        { path: '/home/taizhang', component:taizhang, name: '台账' },
      ]
    }
  ]
})
