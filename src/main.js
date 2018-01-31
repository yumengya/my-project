// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false;
//引入路由并注册使用
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//引入ui组件
import ElementUI from  'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use( ElementUI);
//引入http的组件一个基于promise的HTTP库
import axios from 'axios'
Vue.prototype.$http = axios;
//引入vuex的管理状态
import Vuex from 'vuex';
Vue.use(Vuex);
//引入浏览器兼容性的一个包
import 'babel-polyfill'
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
