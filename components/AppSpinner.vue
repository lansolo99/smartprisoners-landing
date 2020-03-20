<template>
  <div class="appSpinner">
    <BaseLoading :loading="loading" />
  </div>
</template>

<script>
import BaseLoading from '@/components/BaseLoading.vue'
export default {
  components: {
    BaseLoading
  },
  data() {
    return {
      loading: true
    }
  }
}
</script>
<style lang="scss">
.appSpinner {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: $color-anthracite;
  z-index: 100;
}
</style>
