<template>
  <div id="app">
    <header class="header">
      <h2>{{count}} Résultats</h2>
      <input v-model="search" placeholder="comment signer…">
    </header>
    <main>
      <aside>
        <figure>
          <figcaption>
            <video id="player" class="video-js"></video>
            <b>{{videoPlaying.label}}</b>
          </figcaption>
        </figure>
      </aside>
      <ul id="resultats">
        <li v-for="mot in filteredMots">
          <span @click="play(mot)" :id="mot.key">
             <div :inner-html.prop="mot.label | highlight(search)"></div>
          </span>
        </li>
      </ul>
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

  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: #FDFDFD;
    margin: 0;
  }

  a:active, a:focus, a:hover {
    color: #c13c27;
  }

  a {
    color: #dd6a58;
    transition: color 0.1s linear;
  }

  .header {
    background-color: #E04E39;
    color: white;
    padding: .5rem;
  }

  h1 {
    padding: 0;
    margin: 0
  }

  li {
    line-height: 1.5rem;
  }

  .player {
    display: block;
    width: 425px;
    height: 300px;
  }

  .highlight {
    background-color: #F8E7CF;
    color: #444;
  }
</style>
