<template>
  <div id="top">
    <search-bar data-e2e="search-bar"></search-bar>
    <main class="content">
      <div class="container is-fluid">
        <main class="tile is-ancestor layout">
          <nav v-if="entriesVisible" class="tile is-vertical is-2">
            <div
              class="tile is-parent index"
              role="navigation"
              aria-label="words index"
            >
              <div class="tile is-child">
                <placeholder v-if="isLoading"></placeholder>
                <entries></entries>
              </div>
            </div>
          </nav>
          <aside v-if="!isLoading" class="tile is-parent video">
            <player></player>
          </aside>
        </main>
      </div>
    </main>
    <footer>
      <quick-actions></quick-actions>
    </footer>
  </div>
</template>

<script>
import '~/assets/app.scss'
import searchBar from '~/components/search-bar.vue'
import placeholder from '~/components/placeholder.vue'
import entries from '~/components/entries.vue'
import player from '~/components/player.vue'
import quickActions from '~/components/quick-actions.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    'search-bar': searchBar,
    placeholder: placeholder,
    player: player,
    entries,
    'quick-actions': quickActions
  },
  name: 'app',
  created: function() {
    this.$store.dispatch('vocabulaire/fetchAll')
  },
  computed: {
    ...mapGetters('vocabulaire', ['entriesVisible', 'isLoading'])
  }
}
</script>
<style scoped></style>
