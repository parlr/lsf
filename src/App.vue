<template>
  <div id="top">
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="navbar-item control search">
          <input v-model="search"
                 @click="focus()"
                 @keyup="displayIndex()"
                 @keyup.enter="playFirst()"
                 id="search"
                 placeholder="comment signer…"
                 class="input search"
                 autofocus
                 autocomplete="off"
                 type="text">
        </div>
        <label for="search" class="navbar-item is-paddingless is-hidden-mobile">{{count}} Résultats</label>
      </div>
    </nav>

    <main class="content">
      <div class="container is-fluid">
        <main class="tile is-ancestor layout">
          <nav v-if="showIndex" class="tile is-vertical is-2">
            <div class="tile is-parent index" role="navigation" aria-label="words index">
              <div class="tile is-child">
                <list-placeholder v-if="loadingData"></list-placeholder>
                <ul class="index_content">
                  <li v-for="mot in filteredMots" class="index_content--item has-bottom-margin">
                    <a href="#top" @click="play(mot)"
                       :id="mot.key"
                       :inner-html.prop="mot.label | highlight(search)">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <aside v-if="!loadingData" class="tile is-parent video">
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
import got from 'got';
import config from './config.js';
import { highlight } from './filters.js';
import './lsf.scss';
import navbarBottom from './navbar-bottom.vue';
import listPlaceholder from './list-placeholder.vue';

export default {
  components: {
    'navbar-bottom': navbarBottom,
    'list-placeholder': listPlaceholder
  },
  name: 'app',
  data: function() {
    return {
      search: '',
      showIndex: true,
      vocabulaire: [],
      videoPlaying: { label: undefined, video: '' }
    };
  },
  created: function() {
    got.get(config.dataset(), { json: true }).then(response => {
      this.vocabulaire = response.body;
    });
  },
  mounted: function() {
    this.player = document.querySelector('video');
  },
  computed: {
    loadingData: function() {
      return this.vocabulaire.length === 0;
    },
    count: function() {
      return this.filteredMots.length;
    },
    filteredMots: function() {
      return this.vocabulaire.filter(
        mot =>
          mot.label.indexOf(this.search) !== -1 ||
          mot.key.indexOf(this.search) !== -1
      );
    },
    videoUrl: function() {
      return `${config.cdn}/${this.videoPlaying.video}`;
    }
  },
  methods: {
    focus: function() {
      window.scrollTo(0, 0);
    },
    displayIndex: function() {
      this.showIndex = true;
    },
    play: function(mot) {
      this.showIndex = false;
      this.search = mot.label;
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
