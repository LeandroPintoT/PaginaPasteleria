import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VideoBackground from 'vue-responsive-video-background-player'

Vue.component('video-background', VideoBackground);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
