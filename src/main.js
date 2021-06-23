import Vue from "vue"
import App from "./App.vue"
import router from './router'
import Vuetify from "vuetify"
import "@mdi/font/css/materialdesignicons.css"
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify)
export default new Vuetify({})

new Vue({
  el: "#app",
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

