import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VideoBackground from 'vue-responsive-video-background-player'
import css from "@a/custom-css.css";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(css)

Vue.component('video-background', VideoBackground);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
