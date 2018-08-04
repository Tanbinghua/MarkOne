// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/main.css'
import './assets/icons.js'
import './utils/permission'
import store from './store'
import Toast from './components/toast'
import GSignInButton from 'vue-google-signin-button'

Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(GSignInButton)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
