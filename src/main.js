import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/Home/TypeNav'
// 三级联动全局组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
