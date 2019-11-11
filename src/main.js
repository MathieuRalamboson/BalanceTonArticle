import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

// global variable
Vue.prototype.$admin = false

Vue.config.productionTip = false
// cette ligne est importante pour les sessions (en mode développement)
axios.defaults.withCredentials = true
Vue.use(VueAxios, axios)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
