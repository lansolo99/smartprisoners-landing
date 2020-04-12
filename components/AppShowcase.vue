<template>
  <section class="appShowCase">
    <div class="appElements">
      <h1 class="appElements__title">
        PUZZLE GAME IN A
        <span class="u-group-word">HIGH-TECH</span> PRISON
      </h1>
      <div
        class="appElements__phone"
        :class="{ videoPlay: videoPlay }"
        @click.stop="dialog = true"
      >
        <!-- Mockup backup -->
        <img
          src="~assets/images/phone_body.svg"
          class="appElements__phone-mockup appElements__phone-mockup--back"
        />

        <!-- Screenshot -->
        <img
          src="~assets/images/screenshot.jpg"
          :srcset="`${require(`~/assets/images/screenshot@2x.jpg`)} 2x`"
          class="appElements__phone-mockup appElements__phone-mockup--screenshot"
        />

        <!-- Mockup front -->
        <img
          src="~assets/images/phone_body.svg"
          class="appElements__phone-mockup appElements__phone-mockup--front"
        />

        <!-- Play -->
        <img
          class="appElements__beforePlayBtn"
          src="~assets/images/phone_play.svg"
          @click.stop="dialog = true"
        />

        <!-- Video dialog -->
        <AppTeaserDialog :set-dialog="dialog" @closeDialog="dialog = false" />
      </div>
      <div class="appElements__description">
        <p>
          Year 2086. You are detained in a high security prison for smart
          prisoners. You are then eligible to liberate yourself by solving
          challenging puzzles. You will be facing mental challenges to unlock 10
          doors to exit the prison.
        </p>
        <ul>
          <li>Resolve 13 mental challenges</li>
          <li>Unlock 10 doors</li>
          <li>Cross stunning environments through immersive transitions</li>
          <li>Track your time and progression</li>
          <li>Rank among the best prisoners</li>
        </ul>
      </div>
      <div class="appElements__btn-pwa">
        <a
          href="https://play.google.com/store/apps/details?id=io.cordova.smartprisoners"
        >
          <img
            src="~assets/images/google-play-badge.svg"
            alt="Google Play Badge"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import AppTeaserDialog from '@/components/AppTeaserDialog.vue'
export default {
  components: {
    AppTeaserDialog
  },
  data() {
    return {
      dialog: false,
      videoPlay: false
    }
  }
}
</script>

<style lang="scss">
.appShowCase {
  background-color: $color-anthracite-blue;
  padding-bottom: 100px;

  @include responsive(mobile) {
    padding-bottom: 50px;
  }

  .appElements {
    margin: auto;
    display: block;
    text-align: center;
    width: 600px;
    position: relative;
    margin: auto;
    margin-top: 80px;
    @include textSelection;

    @include responsive(mobile) {
      width: 100%;
      margin-top: 60px;
      padding-left: 30px;
      padding-right: 30px;
    }

    &__title {
      color: white;
      font-size: 3.75rem;
      line-height: 4.7rem;
      @include textSelection;

      @include responsive(mobile) {
        font-size: 2.6rem;
        line-height: 3rem;
      }
    }
    &__phone {
      position: relative;
      margin: auto;
      margin-top: 300px;
      width: 530px;
      height: 260px;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        margin-top: 70px;
        width: 100%;
        height: auto;
        padding-bottom: 50%;
      }

      @include responsive(mobile) {
        margin-top: 120px;
      }

      &.videoPlay {
        cursor: default;
      }

      &:hover {
        .appElements__beforePlayBtn {
          transform-origin: center;
          transform: translateY(-50%) translateX(-50%) scale(1.1);
        }
      }

      &-mockup {
        display: block;
        position: absolute;
        width: 530px;
        top: 0;
        left: 0;
        &--screenshot {
          width: 486px;
          height: 240px;
          top: 11px;
          left: 11px;

          @media screen and (max-width: 768px) {
            width: 92% !important;
            height: auto !important;
            top: 4%;
            left: 2%;
          }
        }
        &--back {
          filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
        }

        @media screen and (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
    }

    &__beforePlayPreview {
      position: absolute;
      top: 46px;
      left: 13px;
      width: 238px;
      height: 489px;
      img {
        display: block;
      }
    }

    &__beforePlayLayer {
      background-color: $color-anthracite-blue;
      opacity: 0.4;
      background-blend-mode: lighten;
      position: absolute;
      top: 46px;
      left: 13px;
      width: 238px;
      height: 489px;
    }

    &__description {
      text-align: left;
      margin-top: 100px;
      font-weight: 300;
      font-size: 23px;
      @include responsive(mobile) {
        margin-top: 60px;
        font-size: 20px;
      }
      @include textSelection;
    }
    &__btn-pwa {
      img {
        transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      a {
        display: block;
        margin: auto;
        width: 170px;
        padding-top: 80px;
        @include responsive(tablet) {
          padding-top: 40px;
          margin: 0;
        }

        img {
          &:hover {
            transform: scale(1.05);
          }
        }
      }
      &-legend {
        font-weight: 300;
        font-size: 14px;
        font-style: italic;
        margin-bottom: 0;
      }
    }
    &__beforePlayBtn {
      position: absolute;
      width: 67px;
      height: 67px;
      top: 50%;
      transform: translateY(-50%) translateX(-50%);
      left: 50%;
      filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.3));
      transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      @include responsive(mobile) {
        width: 12vw;
        height: 12vw;
      }
    }
  }
}
</style>
