// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';


import 'vuetify/dist/vuetify.min.css';
import 'font-awesome/css/font-awesome.css';

import Vuetify from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'



import 'material-design-icons-iconfont/dist/material-design-icons.css';
//  import './styles/global.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

import fullCalendar from 'vue-fullcalendar';
import { setupComponents } from './config/setup-components';

import swatches from 'vue-swatches';
import "vue-swatches/dist/vue-swatches.min.css";


Vue.component('full-calendar', fullCalendar);
Vue.component('swatches', swatches);

setupComponents(Vue);

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: '#4caf50',
  secondary: '#4caf50',
  tertiary: '#495057',
  accent: '#82B1FF',
  error: '#f55a4e',
  info: '#00d3ee',
  success: '#5cb860',
  warning: '#ffa21a'
  }
});

Vue.config.productionTip = false


import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    themeColor: '#1D2939',
    userEmail: 'admin@yopmail.com',
    userPassword: '123456'
  },
  render: h => h(App)
}).$mount('#app')



// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
