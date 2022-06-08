import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import TypeNav from '@/pages/Home/TypeNav'
// 三级联动全局组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false
Vue.config.devtools = true;

new Vue({
  render: h => h(App),
  router: router,
  store,
}).$mount('#app')
