<template>
  <section>
    <v-container class="pt-4 pb-0">
      <v-layout>
        <v-flex>
          <!-- eslint-disable vue/no-v-html -->
          <div class="privacyContent" v-html="mdprivacycontent"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import md from '@/data/privacy_policy.md'
export default {
  name: 'PrivacyPolicy',
  computed: {
    mdprivacycontent() {
      return md
    }
  },
  head() {
    return {
      title: 'Smart Prisoners | Privacy policy'
    }
  }
}
</script>

<style lang="scss">
.privacyContent {
  color: black;
  margin-bottom: 50px;
  section {
    & > * + * {
      margin-top: 20px;
    }
  }

  h2 {
    font-size: 40px;
    margin-bottom: 30px;
  }

  a {
    color: $color-red;
  }
}
</style>
