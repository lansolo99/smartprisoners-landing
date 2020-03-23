<template>
  <div>
    <v-dialog
      v-model="dialog"
      :width="imageHeight === 'mobile' ? '90%' : 940"
      class="dialog"
      content-class="customdialog"
      color="colorAnthraciteBlue"
    >
      <v-card class="dialog__content">
        <AppVideoPlayer v-if="dialog" />
        <!-- Close -->

        <svg
          class="close"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 329 329"
          @click="$emit('closeDialog')"
        >
          <path
            d="M194.6 164.8L322.7 36.7c8.3-8.3 8.3-21.8 0-30.1s-21.8-8.3-30.1 0l-128.1 128L36.4 6.5c-8.3-8.3-21.8-8.3-30.1 0s-8.3 21.8 0 30.1l128.1 128.1L6.3 292.9c-8.3 8.3-8.3 21.8 0 30.1 4.2 4.2 9.6 6.2 15.1 6.2s10.9-2.1 15.1-6.2l128.1-128.1 128 128.1c4.2 4.2 9.6 6.2 15.1 6.2s10.9-2.1 15.1-6.2c8.3-8.3 8.3-21.8 0-30.1L194.6 164.8z"
          />
        </svg>
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
          return 'mobile'
        case 'sm':
          return 'mobile'
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
.customdialog {
  overflow: visible;
}
</style>

<style lang="scss" scoped>
.close {
  position: absolute;
  top: -35px;
  right: 0;
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  cursor: pointer;
  path {
    fill: white;
  }
  &:hover {
    transform: scale(1.3);
  }
}

.dialog {
  overflow: visible;
  position: relative;

  &__content {
    background: $color-anthracite-blue;
    width: 940px;
    height: 528px;
    // height: 530px;

    // width: 640px;
    // height: 360px;

    @include responsive(tablet) {
      width: 100%;
      height: auto;
    }
  }
}
</style>
