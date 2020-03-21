import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0' // default: localhost
  // },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Smart Prisoners',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  // router: {
  //   base: '/app/'
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ['@/plugins/vuetify'],
  plugins: [
    '@/plugins/vuetify',
    // {
    //   src: '~plugins/vue-youtube.js',
    //   ssr: false
    // },
    {
      src: '~plugins/vue-parallaxy.js',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', 'nuxt-webfontloader'],

  webfontloader: {
    custom: {
      families: ['Share Tech'],
      urls: ['https://fonts.googleapis.com/css?family=Share+Tech&display=swap']
    }
  },

  styleResources: {
    scss: [
      'assets/style/scss/style.scss',
      'assets/style/scss/_globals.scss',
      'assets/style/scss/_mixins.scss',
      'assets/style/scss/_variables.scss'
    ]
  },

  /*
   ** Build configuration
   */
  buildModules: ['@nuxtjs/global-components'],
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          // test: /\.ogg$/,
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
