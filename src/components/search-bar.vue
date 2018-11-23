<template>
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item control search">
          <input v-model="query"
                 @click="focus()"
                 @keyup.enter="playFirst()"
                 id="search"
                 placeholder="comment signer…"
                 class="input search"
                 autofocus
                 autocomplete="off"
                 type="text">
        </div>
        <label for="search" class="navbar-item is-paddingless is-hidden-mobile">
          {{matchingCount}} Résultats
          </label>
      </div>
    </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    query: {
      get() {
        return this.searchQuery;
      },
      set(value) {
        this.search(value);
      }
    },
    ...mapGetters('vocabulaire', [
      'filteredMots',
      'matchingCount',
      'searchQuery'
    ])
  },
  methods: {
    focus: function() {
      window.scrollTo(0, 0);
    },
    search: function(value) {
      this.$store.dispatch('vocabulaire/showEntries');
      this.$store.dispatch({
        type: 'vocabulaire/updateSearch',
        searchQuery: value
      });
    },
    playFirst: function() {
      this.play(this.filteredMots[0]);
    }
  }
};
</script>
