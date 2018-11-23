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
            <figure class="tile is-child">
              <figcaption>
                <video :src="videoUrl"
                       @click="playPause($event)"
                       controls
                       loop
                       muted
                       autoplay
                >
                  <a class="button is-primary is-loading">Button</a>
                </video>
              </figcaption>
            </figure>
          </aside>
        </main>
      </div>
    </main>
    <!--<footer>-->
    <!--<navbar-bottom></navbar-bottom>-->
    <!--</footer>-->
  </div>
</template>

<script>
import config from '~/config';
import { highlight } from '~/filters';
import '~/assets/lsf.scss';
import searchBar from '~/components/search-bar.vue';
import listPlaceholder from '~/components/list-placeholder.vue';
import navbarBottom from '~/components/navbar-bottom.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    'search-bar': searchBar,
    'list-placeholder': listPlaceholder,
    'navbar-bottom': navbarBottom
  },
  name: 'app',
  data: function() {
    return {
      videoPlaying: { label: undefined, video: '' }
    };
  },
  created: function() {
    this.$store.dispatch('vocabulaire/fetchAll');
  },
  mounted: function() {
    this.player = document.querySelector('video');
  },
  computed: {
    videoUrl: function() {
      return `${config.cdn}/${this.videoPlaying.video}`;
    },
    ...mapGetters('vocabulaire', [
      'filteredMots',
      'searchQuery',
      'entriesVisible'
    ]),
    ...mapState('vocabulaire', ['isLoading'])
  },
  methods: {
    play: function(mot) {
      this.$store.dispatch('vocabulaire/hideEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: mot.label
      });
      this.videoPlaying = mot;
    },
    playPause: function(event) {
      this.player.paused ? this.player.play() : this.player.pause();
    }
  },
  filters: {
    highlight
  }
};
</script>
<style scoped>
</style>
