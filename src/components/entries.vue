<template>
  <ul class="index_content is-unstyled" data-e2e="entries">
    <li
      v-for="mot in filteredMots"
      v-bind:key="mot.key"
      class="index_content--item has-bottom-margin"
    >
      <a
        href="#top"
        @click="play(mot)"
        :id="mot.key"
        :inner-html.prop="mot.key | highlight(searchQuery)"
      ></a>
    </li>
  </ul>
</template>
<script>
import { highlight } from '~/filters';
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('vocabulaire', ['filteredMots', 'searchQuery'])
  },
  methods: {
    play: function(mot) {
      this.$store.dispatch('player/play', { mot });
      this.$store.dispatch('vocabulaire/hideEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: mot.key
      });
    }
  },
  filters: {
    highlight
  }
};
</script>
