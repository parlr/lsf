<template>
  <div>
    <h1>Résultats</h1>
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
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
