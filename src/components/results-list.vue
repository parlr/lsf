<template>
  <div>
    <header class="header">
      <h1>{{count}} Résultats</h1>
      <input v-model="search" placeholder="comment signer…">
    </header>
    <main>
      <ul id="resultats">
        <li v-for="mot in filteredMots">
          <a :href="mot.video">
            <span v-html="$options.filters.highlight(mot.label, search)"></span>
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import got from 'got';
import dataset from '../assets/vocabulaire.json';

export default {
  data: function() {
    return {
      search: '',
      vocabulaire: []
    };
  },
  created: function() {
    got
      .get(
        'https://raw.githubusercontent.com/edouard-lopez/lsf/master/src/assets/vocabulaire.json',
        { json: true }
      )
      .then(response => {
        this.vocabulaire = response.body;
      });
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
  }
};
</script>

<style lang="scss">
.header {
  background-color: #E04E39;
  color: white;
  padding: .5rem;
}
h1 { padding: 0; margin: 0}
li { line-height: 1.5rem;}
.highlight {
  background-color: #F8E7CF;
  color: #444;
}
</style>
