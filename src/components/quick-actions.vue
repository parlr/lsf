<template>
  <nav class="navbar is-fixed-bottom is-light">
    <div class="navbar-brand has-text-weight-bold">
      <span class="navbar-item" @click="toggleEntries()">
        <img :src="listIcon" class="fa" alt="">
        Liste
      </span>
      <span class="navbar-item" @click="playRandomMot()">
        <img :src="randomIcon" class="fa" alt="">
        Aléatoire
      </span>
    </div>
  </nav>
</template>
<script>
import randomIcon from 'font-awesome-svg-png/black/svg/random.svg';
import listIcon from 'font-awesome-svg-png/black/svg/list.svg';
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      randomIcon,
      listIcon
    };
  },
  methods: {
    toggleEntries: function() {
      this.$store.dispatch('vocabulaire/toggleEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: ''
      });
    },
    playRandomMot: function() {
      let mot = this.pickRandomMot();
      console.log(mot.label);
      this.$store.dispatch('player/play', { mot });
      this.$store.dispatch('vocabulaire/hideEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: mot.label
      });
    }
  },
  computed: {
    ...mapGetters('vocabulaire', ['pickRandomMot'])
  }
};
</script>
<style lang=scss scoped>
.fa {
  height: 22px;
  margin-right: 0.5rem;
}
</style>
