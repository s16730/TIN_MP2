import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
// import pl from '@/translations/pl.json'

import '@/assets/scss/styles.scss';
import i18n from "@/i18n";
import { DataService } from "@/services/DataService";

Vue.config.productionTip = false


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
