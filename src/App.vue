<template>
  <div id="app">
    <header class="header">
      <h2>{{count}} Résultats</h2>
      <input v-model="search" placeholder="comment signer…">
    </header>
    <main>
      <aside>
        <figure>
          <div id="player" ref="player" class="player"></div>
          <figcaption><b>{{videoPlaying}}</b></figcaption>
        </figure>
      </aside>
      <ul id="resultats">
        <li v-for="mot in filteredMots">
          <span @click="play(mot)" :id="mot.key">
            <span v-html="$options.filters.highlight(mot.label, search)"></span>
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import got from 'got';
import dataset from './assets/vocabulaire.json';

export default {
  name: 'app',
  data: function() {
    return {
      search: '',
      vocabulaire: [],
      videoPlaying: undefined
    };
  },
  created: function() {
    this.vocabulaire = dataset;
  },
  computed: {
    count: function() {
      return this.filteredMots.length;
    },
    filteredMots: function() {
      return this.vocabulaire.filter(
        mot =>
          mot.label.indexOf(this.search) !== -1 ||
          mot.key.indexOf(this.search) !== -1
      );
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
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
h1 { padding: 0; margin: 0}
li { line-height: 1.5rem;}
.player {
  display:block;
  width:425px;
  height:300px;
}
.highlight {
  background-color: #F8E7CF;
  color: #444;
}
</style>
