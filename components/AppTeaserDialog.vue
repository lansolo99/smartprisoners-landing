<template>
  <div>
    <v-dialog
      v-model="dialog"
      overlay-color="#ff0000"
      :overlay-opacity="40"
      :width="imageHeight === 'sm' ? '100%' : 640"
      class="dialog"
      color="colorAnthraciteBlue"
    >
      <v-card class="dialog__content">
        <AppVideoPlayer v-if="dialog" />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import AppVideoPlayer from '@/components/AppVideoPlayer.vue'
export default {
  name: 'AppTeaserDialog',
  components: {
    AppVideoPlayer
  },
  props: {
    setDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 'xs'
        case 'sm':
          return 'sm'
        case 'md':
          return 'md'
        case 'lg':
          return 'lg'
        case 'xl':
          return 'xl'
      }
      return ''
    }
  },
  watch: {
    setDialog(newValue, oldValue) {
      this.dialog = newValue
    },
    dialog(newValue, oldValue) {
      if (this.dialog === false) {
        this.$emit('closeDialog')
      }
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint)
  }
}
</script>

<style lang="scss">
// Because vuetify sucks
.v-overlay:before {
  background-color: rgba($color-anthracite-blue, 1);
}
.v-overlay--active:before {
  opacity: 0.8;
}
</style>

<style lang="scss" scoped>
.dialog {
  &__content {
    background: $color-anthracite-blue;
    width: 640px;
    height: 360px;

    @include responsive(tablet) {
      width: 100%;
      height: auto;
    }
  }
}
</style>
