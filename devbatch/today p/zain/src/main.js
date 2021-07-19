import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

  Vue.use(BootstrapVue)
  Vue.use(Iconsplugin)

  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/css/bootstrap-vue.css'

new Vue({
  render: h => h(App),
}).$mount('#app')
