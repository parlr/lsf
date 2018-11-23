export default {
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
