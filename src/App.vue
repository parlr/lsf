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
            <video :src="videoPlaying.video" loop muted autoplay></video>
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
  import {highlight} from './filters.js';
  import './lsf.scss'

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
      this.player = document.querySelector('video');
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
      }
    },
    filters: {
      highlight
    }
  };
</script>
