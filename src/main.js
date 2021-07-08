import Vue from "vue"
import App from "./App.vue"
import router from './router'
import Vuetify from "vuetify"
import "@mdi/font/css/materialdesignicons.css"
import vuetify from './plugins/vuetify'
import Geocoder from "@pderas/vue2-geocoder"

Vue.config.productionTip = false

Vue.use(Geocoder, {
  defaultCountryCode: null, // e.g. 'CA'
  defaultLanguage: null, // e.g. 'en'
  defaultMode: 'address', // or 'lat-lng'
  googleMapsApiKey: "AIzaSyDfZhM5joXIaLD7G2BQtQGd2XQ2seE5U4I"
});

Vue.use(Vuetify)
export default new Vuetify({})

new Vue({
  el: "#app",
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

