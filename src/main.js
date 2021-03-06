import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

import GAuth from 'vue-google-oauth2'
const gauthOption = {
  clientId: '584655299643-3oab6m1cb7tj2ascqunc8eas7to60iue.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'consent',
  fetch_basic_profile: true
}
Vue.use(GAuth, gauthOption)

export const bus = new Vue();

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')

