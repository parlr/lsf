import '@babel/polyfill';
import Vue from 'vue';
import App from './components/App.vue';
import './assets/favicon.ico';
import './assets/manifest.json';

new Vue({
  el: '#app',
  render: h => h(App)
});
