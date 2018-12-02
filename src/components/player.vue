<template>
  <figure class="tile is-child">
    <video
      :src="videoUrl"
      @click="playPause($event)"
      controls="true"
      loop="true"
      muted="true"
      autoplay="true"
    >
      <a class="button is-primary is-loading">Button</a>
    </video>
    <figcaption>{{videoPlaying.key}}</figcaption>
  </figure>
</template>
<script>
import config from '~/config';
import { mapGetters } from 'vuex';

export default {
  mounted: function() {
    this.player = document.querySelector('video');
  },
  computed: {
    ...mapGetters('player', ['videoUrl', 'videoPlaying'])
  },
  methods: {
    playPause: function(event) {
      this.player.paused ? this.player.play() : this.player.pause();
    }
  }
};
</script>
