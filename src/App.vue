<template>
  <div id="app">
    <results-list></results-list>
  </div>
</template>

<script>
import resultsList from './components/results-list.vue';

export default {
  name: 'app',
  components: {
    'results-list': resultsList
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
