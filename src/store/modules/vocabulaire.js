import http from 'ky';
import config from '~/config';

const state = {
  vocabulaire: [],
  searchQuery: '',
  entriesVisible: true
};

const getters = {
  filteredMots: state =>
    state.vocabulaire.filter(
      mot =>
        mot.label.indexOf(state.searchQuery) !== -1 ||
        mot.key.indexOf(state.searchQuery) !== -1
    ),
  matchingCount: (state, getters) => getters.filteredMots.length,
  isLoading: state => state.vocabulaire.length === 0,
  searchQuery: state => state.searchQuery,
  entriesVisible: state => state.entriesVisible
};

const actions = {
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

const mutations = {
  SET_VOCABULAIRE(state, vocabulaire) {
    state.vocabulaire = vocabulaire;
  },
  SET_SEARCH(state, searchQuery) {
    state.searchQuery = searchQuery;
  },
  HIDE_ENTRIES(state) {
    state.entriesVisible = false;
  },
  SHOW_ENTRIES(state) {
    state.entriesVisible = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
