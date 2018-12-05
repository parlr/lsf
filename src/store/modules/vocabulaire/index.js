import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  vocabulaire: [],
  searchQuery: '',
  entriesVisible: true
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
