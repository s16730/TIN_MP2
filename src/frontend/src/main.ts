import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false


Vue.use(VueI18n)
//
// const i18n = new VueI18n({
//   locale: 'ja', // set locale
//   messages, // set locale messages
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
