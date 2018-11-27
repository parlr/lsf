import Vue from 'vue';
import store from './store';
import App from './components/App.vue';

import './assets/favicon.ico';
import './assets/manifest.json';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});
