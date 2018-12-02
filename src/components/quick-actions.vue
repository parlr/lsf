<template>
  <nav class="navbar is-fixed-bottom is-light">
    <div class="navbar-brand">
      <div class="navbar-start">
        <div class="navbar-item">
          <span class="button is-light" @click="toggleEntries()">
            <img :src="listIcon" class="fa" alt>
            Liste
          </span>
          <span class="button is-light" @click="playRandomMot()">
            <img :src="randomIcon" class="fa" alt>
            Aléatoire
          </span>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons has-addons">
            <span
              class="button is-light"
              @click="setVideoSpeed(0.5)"
              :class="{'is-primary is-selected': speed===0.5}"
            >0.5x</span>
            <span
              class="button is-light"
              @click="setVideoSpeed(1)"
              :class="{'is-primary is-selected': speed===1}"
            >1x</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import slowIcon from 'font-awesome-svg-png/black/svg/backward.svg';
import listIcon from 'font-awesome-svg-png/black/svg/list.svg';
import playIcon from 'font-awesome-svg-png/black/svg/play.svg';
import randomIcon from 'font-awesome-svg-png/black/svg/random.svg';
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      speed: 1,
      slowIcon,
      listIcon,
      playIcon,
      randomIcon
    };
  },
  methods: {
    playRandomMot: function() {
      let mot = this.pickRandomMot();
      console.log(mot.key);
      this.$store.dispatch('player/play', { mot });
      this.$store.dispatch('vocabulaire/hideEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: mot.key
      });
    },
    setVideoSpeed: function(speed) {
      this.speed = speed;
      document.querySelector('video').playbackRate = speed;
    },
    toggleEntries: function() {
      this.$store.dispatch('vocabulaire/toggleEntries');
      this.$store.dispatch('vocabulaire/updateSearch', {
        searchQuery: ''
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
