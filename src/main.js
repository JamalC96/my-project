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

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueNoty)

Vue.use(firebase)

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA78DFw3k_scPYst4kZPi8YdNMQQ3cfbdo',
  authDomain: 'bquickfa.firebaseapp.com',
  databaseURL: 'https://bquickfa.firebaseio.com',
  projectId: 'bquickfa',
  storageBucket: 'bquickfa.appspot.com',
  messagingSenderId: '67911642935',
  appId: '1:67911642935:web:aff83453b9c91a0162f4b2',
  measurementId: 'G-NJ16RFMD21'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
