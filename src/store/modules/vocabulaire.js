import http from 'ky';
import config from '~/config';

const state = {
  vocabulaire: [],
  search: ''
};

const getters = {
  filteredMots: state =>
    state.vocabulaire.filter(
      mot =>
        mot.label.indexOf(state.search) !== -1 ||
        mot.key.indexOf(state.search) !== -1
    ),
  matchingCount: (state, getters) => getters.filteredMots.length,
  isLoading: state => state.vocabulaire.length === 0
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
  updateSearch({ commit }, { search }) {
    console.log(search);
    commit('SET_SEARCH', search);
  }
};

const mutations = {
  SET_VOCABULAIRE(state, vocabulaire) {
    state.vocabulaire = vocabulaire;
  },
  SET_SEARCH(state, search) {
    state.search = search;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
