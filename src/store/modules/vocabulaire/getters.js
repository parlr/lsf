export default {
  filteredMots: state =>
    state.vocabulaire.filter(mot => {
      const NOT_FOUND = -1;
      let query = new RegExp(search, 'i');

      return mot.key.search(query) !== NOT_FOUND;
    }),
  matchingCount: (state, getters) => getters.filteredMots.length,
  isLoading: state => state.vocabulaire.length === 0,
  searchQuery: state => state.searchQuery,
  entriesVisible: state => state.entriesVisible,
  pickRandomMot: state => () => {
    return state.vocabulaire[
      Math.floor(Math.random() * state.vocabulaire.length)
    ];
  }
};
