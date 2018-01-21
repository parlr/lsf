<template>
  <ul class="index_content">
    <li v-for="placeholder in placeholders" class="index_content--item has-bottom-margin">
      <span class="placeholder">{{placeholder}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data: function () {
      return {
        placeholders: []
      }
    },
    created: function () {
      this.placeholders = Array.from({length: 50}, () => this.randomPlaceholder());
    },
    methods: {
      randomPlaceholder: function () {
        return Array(this.getRandomInt(4, 15)).join('▇')
      },
      getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }
    }
  }
</script>
