<template>
  <div>
    <div class="videoWrapper">
      <youtube
        v-if="displayVideo"
        ref="youtube"
        class="youtubePlayer"
        :video-id="videoId"
        resize
        :resize-delay="300"
        :fit-parent="true"
        @ready="youtubeReady"
      />
      <transition name="videoCover">
        <div v-if="videoCover" class="videoCover">
          <transition name="videoCover">
            <BaseLoading v-if="displayLoading" :loading="true" />
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import BaseLoading from '@/components/BaseLoading.vue'
Vue.use(VueYoutube)

export default {
  name: 'AppVideoPlayer',
  components: {
    BaseLoading
  },
  data() {
    return {
      videoCover: true,
      displayVideo: false,
      displayLoading: false,
      videoId: 'GkJdB7JL7gI'
    }
  },
  mounted() {
    this.displayLoading = true
    this.displayVideo = true
  },
  methods: {
    youtubeReady() {
      setTimeout(() => {
        this.videoCover = false
        this.$refs.youtube.player.playVideo()
      }, 100)
    }
  }
}
</script>

<style lang="scss">
.videoWrapper {
  position: relative;
  width: 100%;
  // max-width: 640px;
  // min-height: ;
  iframe {
    display: block;
    // width: 100%;
    // max-width: 650px; /* Also helpful. Optional. */
  }
}

.videoCover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-anthracite-blue;
}
</style>
<style lang="scss" scoped>
// Transitions
.videoCover-enter-active,
.videoCover-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.videoCover-enter,
.videoCover-leave-to {
  opacity: 0;
}
</style>
