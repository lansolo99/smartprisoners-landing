<template>
  <section class="appHeader">
    <v-container class="pt-4 pb-0">
      <v-layout>
        <v-flex>
          <v-toolbar
            absolute
            flat
            color="white"
            class="appHeader__toolbar transparent"
          >
            <img
              class="appHeader__logo"
              src="~assets/images/smartprisoners_logo.svg"
              alt="Smart Prisoners logo"
            />
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn
                color="colorWhite"
                href="https://github.com/lansolo99/smartprisoners-game"
                flat
                >Github</v-btn
              >
              <v-btn
                color="colorWhite"
                href="mailto:smartprisonersgame@gmail.com?subject=Feedback%20on%20SmartPrisoners"
                flat
                >Feedbacks</v-btn
              >
            </v-toolbar-items>
          </v-toolbar>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss">
.appHeader {
  position: relative;

  @media only screen and (min-width: 960px) {
    .container {
      max-width: none;
    }
  }

  &__toolbar {
    max-width: 2000px;
    margin: auto;
    position: relative !important;

    @include responsive(mobile) {
      .v-toolbar__content {
        display: block;
        padding: 20px;
      }
    }

    .v-btn {
      @include responsive(mobile) {
        display: none;
      }

      &:hover {
        background-color: $color-red;
        color: white;
      }
    }
  }

  &__logo {
    width: 160px;
    @include responsive(mobile) {
      display: block;
      width: 180px;
      margin: auto !important;
    }
  }
}
</style>
