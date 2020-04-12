// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueNoty from 'vuejs-noty'
import 'vuejs-noty/dist/vuejs-noty.css'
import * as firebase from 'firebase'
import store from './store/store'
import {sync} from 'vuex-router-sync'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueNoty)

Vue.use(firebase)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCV-WT-dMnQV0cxRBt1ndBpkoVxRRH2k0k',
    libraries: 'places' // necessary for places input
  }
})

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
