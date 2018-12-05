export default {
  SET_VOCABULAIRE(state, vocabulaire) {
    state.vocabulaire = vocabulaire
  },
  SET_SEARCH(state, searchQuery) {
    state.searchQuery = searchQuery
  },
  HIDE_ENTRIES(state) {
    state.entriesVisible = false
  },
  SHOW_ENTRIES(state) {
    state.entriesVisible = true
  }
}
