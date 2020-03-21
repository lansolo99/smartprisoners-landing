<template>
  <div>
    <v-dialog
      v-model="dialog"
      class="dialog"
      color="colorAnthraciteBlue"
      :width="640"
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

<style lang="scss" scoped>
.dialog {
  &__content {
    background: $color-anthracite-blue;
    width: 640px;
    height: 360px;
  }
}
</style>
