import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/vant/vant"
// import 'lib-flexible'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
