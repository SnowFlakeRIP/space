import Vue from 'vue'
import App from './App.vue'
import 'jquery'
// window.$=require('jquery')
// import './assets/jquery.fancybox.min'
// import './assets/slick.min'
import './assets/reset.css'
// import './assets/jquery.fancybox.css'
// import './assets/slick.css'
import './assets/style.css'
import 'slick-carousel/slick/slick.min'
import 'slick-carousel/slick/slick.css'
import './assets/main'


// import '@fancyapps/fancybox/dist/jquery.fancybox.min'
// import '@fancyapps/fancybox/dist/jquery.fancybox.min.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
