<template>
  <div id="app">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <b class="navbar-item">LSF</b>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <label class="navbar-item">{{count}} Résultats</label>
          <div class="control navbar-item">
            <input v-model="search" placeholder="comment signer…" class="input" type="text">
          </div>
        </div>
      </div>
    </nav>

    <main class="container columns is-mobile">
      <div class="column">
        <ul id="resultats" class="is-unstyled is-scrollable">
          <li v-for="mot in filteredMots" class="has-bottom-margin">
            <a @click="play(mot)"
                  :id="mot.key"
                  :inner-html.prop="mot.label | highlight(search)">
            </a>
          </li>
        </ul>
      </div>
      <aside class="column is-four-fifths-mobile is-four-fifths-tablet">
        <figure>
          <figcaption>
            <video id="player" class="video-js"></video>
            <b>{{videoPlaying.label}}</b>
          </figcaption>
        </figure>
      </aside>
    </main>
  </div>
</template>

<script>
  import got from 'got';
  import dataset from './assets/vocabulaire.json';
  import videojs from 'video.js'
  import {highlight} from './filters.js';

  export default {
    name: 'app',
    data: function () {
      return {
        search: '',
        vocabulaire: [],
        videoPlaying: {label: undefined}
      };
    },
    created: function () {
      this.vocabulaire = dataset;
    },
    mounted: function () {
      this.player = videojs('player', {
        controls: false,
        autoplay: true,
        loop: true,
        fluid: true,
        sources: [{src: '', type: 'video/webm'}]
      });
    },
    computed: {
      count: function () {
        return this.filteredMots.length;
      },
      filteredMots: function () {
        return this.vocabulaire.filter(
          mot =>
            mot.label.indexOf(this.search) !== -1 ||
            mot.key.indexOf(this.search) !== -1
        );
      }
    },
    methods: {
      play: function (mot) {
        this.videoPlaying = mot
        this.player.src(this.videoPlaying.video)
        this.player.play();
      }
    },
    filters: {
      highlight
    }
  };
</script>

<style lang="scss">
  $icon-font-path: '~videojs-font/fonts';
  @import '~video.js/dist/video-js.css';
  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/base/_all.sass';
  @import '~bulma/sass/grid/columns.sass';
  @import '~bulma/sass/components/navbar.sass';
  @import '~bulma/sass/elements/container.sass';
  @import '~bulma/sass/elements/form.sass';

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $dark;
    margin: 0;
  }

  .has-bottom-margin:not(:last-child) {
    margin-bottom: .25rem;
  }

  ul.is-unstyled {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .is-scrollable {
    overflow: auto;
    height: 95vh;
    max-height: 30rem;
  }

  .highlight {
    background-color: $yellow;
    color: $dark;
  }
</style>
