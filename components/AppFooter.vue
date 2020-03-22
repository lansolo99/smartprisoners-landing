<template>
  <section class="appFooter">
    <v-container class="py-2">
      <v-layout>
        <v-flex xs12>
          <span class="appFooter__year">© {{ currentDate }}</span> -
          <a href="http://fr.linkedin.com/in/stephanechangarnier"
            >Stephane Changarnier</a
          >
          -
          <a href="https://lansolo.dev">lansolo.dev</a>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.appFooter {
  text-align: center;
  color: white;
  font-size: 14px;
  background-color: $color-anthracite-blue-alt;

  a,
  &__year {
    display: inline-block;
    margin: 0 10px;
    @include responsive(mobile) {
      display: block;
    }
  }

  a {
    transition: color 0.15s;
    color: lighten($color-red, 10%);
    &:hover {
      color: white;
    }
  }
}
</style>
