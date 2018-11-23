<template>
    <figure class="tile is-child">
        <figcaption>
            <video :src="videoUrl"
                    @click="playPause($event)"
                    controls
                    loop
                    muted
                    autoplay
            >
                <a class="button is-primary is-loading">Button</a>
            </video>
        </figcaption>
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
    ...mapGetters('player', ['videoUrl'])
  },
  methods: {
    playPause: function(event) {
      this.player.paused ? this.player.play() : this.player.pause();
    }
  }
};
</script>
