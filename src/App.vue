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
</style>
