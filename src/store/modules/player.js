import config from '~/config';

const state = {
  videoPlaying: { label: undefined, video: '' }
};

const getters = {
  videoPlaying: state => state.videoPlaying,
  videoUrl: (state, getters) => `${config.cdn}/${state.videoPlaying.video}`
};

const actions = {
  play({ commit }, { mot }) {
    commit('PLAY', mot);
  }
};
const mutations = {
  PLAY(state, mot) {
    state.videoPlaying = mot;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
