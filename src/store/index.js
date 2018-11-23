import Vue from 'vue';
import Vuex from 'vuex';
import vocabulaire from './modules/vocabulaire';
import player from './modules/player';
import createLogger from '~/plugins/logger';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    vocabulaire,
    player
  },

  strict: debug,
  plugins: debug ? [createLogger()] : []
});
