import http from 'ky';
import config from '~/config';

export default {
  fetchAll({ commit }) {
    (async () => {
      try {
        let vocabulaire = await http.get(config.dataset(), {}).json();
        commit('SET_VOCABULAIRE', vocabulaire);
      } catch (error) {
        console.error(err);
      }
    })();
  },
  updateSearch({ commit }, { searchQuery }) {
    commit('SET_SEARCH', searchQuery);
  },
  hideEntries({ commit }) {
    commit('HIDE_ENTRIES');
  },
  showEntries({ commit }) {
    commit('SHOW_ENTRIES');
  }
};
