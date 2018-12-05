<template>
  <ul class="index_content is-unstyled" data-e2e="wordlist-placeholder-js">
    <li
      v-for="placeholder in placeholders"
      class="index_content--item has-bottom-margin"
    >
      <span class="placeholder">{{ placeholder }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data: function() {
    return {
      // same as index.html
      placeholders: [
        '▇▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇',
        '▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇',
        '▇▇',
        '▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇',
        '▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇',
        '▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇',
        '▇▇▇▇▇',
        '▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇',
        '▇▇',
        '▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇',
        '▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇',
        '▇▇▇',
        '▇▇▇▇▇▇▇▇▇▇▇▇',
        '▇▇▇▇▇▇'
      ]
    }
  }
}
</script>
