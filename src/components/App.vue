<template>
  <div id="top">
    <search-bar></search-bar>

    <main class="content">
      <div class="container is-fluid">
        <main class="tile is-ancestor layout">
          <nav v-if="entriesVisible" class="tile is-vertical is-2">
            <div class="tile is-parent index" role="navigation" aria-label="words index">
              <div class="tile is-child">
                <list-placeholder v-if="isLoading"></list-placeholder>
                <ul class="index_content is-unstyled">
                  <li v-for="mot in filteredMots" v-bind:key="mot.key" class="index_content--item has-bottom-margin">
                    <a href="#top" @click="play(mot)"
                       :id="mot.key"
                       :inner-html.prop="mot.label | highlight(searchQuery)">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <aside v-if="!isLoading" class="tile is-parent video">
            <player></player>
          </aside>
        </main>
      </div>
    </main>
    <!--<footer>-->
    <!--<quick-actions></quick-actions>-->
    <!--</footer>-->
  </div>
</template>

<script>
import { highlight } from '~/filters';
import '~/assets/lsf.scss';
import searchBar from '~/components/search-bar.vue';
import listPlaceholder from '~/components/list-placeholder.vue';
import player from '~/components/player.vue';
import quickActions from '~/components/quick-actions.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    'search-bar': searchBar,
    'list-placeholder': listPlaceholder,
    player: player,
    'quick-actions': quickActions
  },
  name: 'app',
  created: function() {
    this.$store.dispatch('vocabulaire/fetchAll');
  },
  computed: {
    ...mapGetters('vocabulaire', [
      'filteredMots',
      'searchQuery',
      'entriesVisible'
    ]),
    ...mapState('vocabulaire', ['isLoading'])
  },
  methods: {
    play: function(mot) {
      this.$store.dispatch('player/play', { mot });
      this.$store.dispatch('vocabulaire/hideEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: mot.label
      });
    }
  },
  filters: {
    highlight
  }
};
</script>
<style scoped>
</style>
