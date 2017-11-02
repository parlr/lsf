<template>
  <div>
    <h1>{{count}} Résultats</h1>
    <ul id="resultats">
      <li v-for="mot in vocabulaire">
        <a :href="mot.video">
          {{ mot.label }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import got from 'got';

export default {
  data: function() {
    return { vocabulaire: [] };
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
      return Object.keys(this.vocabulaire).length;
    }
  }
};
</script>
