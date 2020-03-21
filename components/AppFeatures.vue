<template>
  <section class="appFeatures">
    <v-container class="pt-0">
      <v-layout wrap>
        <v-flex
          v-for="(feature, index) in features"
          :key="index"
          sm12
          md4
          class="appFeatures__column px-3"
          :class="{
            'py-4': $vuetify.breakpoint.smAndDown,
            'py-2': $vuetify.breakpoint.mdAndUp
          }"
        >
          <div class="appFeatures__imgWrapper">
            <img
              :src="require(`~/assets/images/feature_${index + 1}.jpg`)"
              :srcset="
                `${require(`~/assets/images/feature_${index + 1}@2x.jpg`)} 2x`
              "
              :alt="feature.title"
            />
          </div>

          <h1 class="appFeatures__title">{{ feature.title }}</h1>
          <p class="appFeatures__column-description">
            {{ feature.description }}
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          title: 'Unlock 10 doors',
          description:
            'Make your way accross the prison, from your cell to the freedom station.'
        },
        {
          title: 'Resolve 13 games',
          description:
            'Unlock each door by solving small logic puzzles with increasing difficulty.'
        },
        {
          title: 'EXPLORE THE PRISON',
          description:
            'Discover stunning environments in a strange high-tech atmosphere.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.appFeatures {
  position: relative;
  background-color: $color-anthracite-blue;
  padding-top: 20px;
  padding-bottom: 60px;
  @include textSelection;
  &__title {
    text-transform: uppercase;
  }

  &__column {
    text-align: center;

    img {
      width: 100%;
    }

    h1 {
      margin-top: 40px;
      font-size: 25px;
      left: 33px;
      font-weight: 500;
    }
    &-description {
      @include responsive(tablet) {
        max-width: 500px;
      }
      margin: auto;
      margin-top: 20px;
      font-weight: 300;
      font-size: 18px;
    }
  }

  &__imgWrapper {
    border-left: 5px solid $color-red;
    img {
      display: block;
    }
  }
}
</style>
