import Vue from 'vue';
import App from './App.vue';

import { highlight } from './filters.js';
Vue.filter('highlight', highlight);

new Vue({
  el: '#app',
  render: h => h(App)
});
