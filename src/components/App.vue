<template>
  <div id="top">
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item control search">
          <input v-model="searchQuery"
                 @click="focus()"
                 @keyup="search()"
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

    <main class="content">
      <div class="container is-fluid">
        <main class="tile is-ancestor layout">
          <nav v-if="showEntries" class="tile is-vertical is-2">
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
import navbarBottom from '~/components/navbar-bottom.vue';
import listPlaceholder from '~/components/list-placeholder.vue';
import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    'navbar-bottom': navbarBottom,
    'list-placeholder': listPlaceholder
  },
  name: 'app',
  data: function() {
    return {
      searchQuery: '',
      showEntries: true,
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
    ...mapGetters('vocabulaire', ['filteredMots', 'matchingCount']),
    ...mapState('vocabulaire', ['isLoading'])
  },
  methods: {
    focus: function() {
      window.scrollTo(0, 0);
    },
    search: function() {
      this.$store.dispatch({
        type: 'vocabulaire/updateSearch',
        search: this.searchQuery
      });
      this.showEntries = true;
    },
    play: function(mot) {
      this.showEntries = false;
      this.searchQuery = mot.label;
      this.videoPlaying = mot;
    },
    playFirst: function() {
      this.play(this.filteredMots[0]);
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
