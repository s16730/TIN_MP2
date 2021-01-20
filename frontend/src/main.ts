import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
// import pl from '@/translations/pl.json'

import pl from "@/translations/pl.json";


Vue.config.productionTip = false


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'pl', // set locale
  messages: pl, // set locale messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
