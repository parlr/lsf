import 'whatwg-fetch'; // required until Cypress support fetch API https://github.com/cypress-io/cypress/issues/95#issuecomment-442107615
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
