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
          <!-- eslint-disable-next-line vue/no-v-html -->
          <h1 class="appFeatures__title" v-html="feature.title"></h1>
          <p class="appFeatures__column-description">
            {{ feature.description }}
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
/* eslint-disable vue/no-v-html */
export default {
  data() {
    return {
      features: [
        {
          title: '<span>Unlock</span> 10 doors',
          description:
            'Make your way accross the prison, from your cell to the freedom station.'
        },
        {
          title: '<span>Resolve</span> 13 games',
          description:
            'Unlock each door by solving small logic puzzles with increasing difficulty.'
        },
        {
          title: '<span>EXPLORE</span> THE PRISON',
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

  .container {
    @media screen and (max-width: 959px) {
      max-width: 400px;
    }
  }

  &__title {
    text-transform: uppercase;
    span {
      color: lighten($color-red, 10%);
    }
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
      @media screen and (max-width: 959px) {
        margin-top: 20px;
      }
    }
    &-description {
      margin: auto;
      margin-top: 20px;
      font-weight: 300;
      font-size: 18px;
      @include responsive(tablet) {
        max-width: 500px;
      }
      @media screen and (max-width: 959px) {
        margin-top: 0;
      }
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
