import Vue from 'vue';
import Vuex from 'vuex';
import vocabulaire from './modules/vocabulaire';
import createLogger from '~/plugins/logger';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    vocabulaire
  },

  strict: debug,
  plugins: debug ? [createLogger()] : []
});
