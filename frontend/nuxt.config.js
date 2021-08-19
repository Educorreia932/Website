export default {
    env: {
        baseURL: process.env.BASE_URL
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Educorreia932\'s Website',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'},
            {property: "twitter:domain", content: "educorreia932.dev"},
            {name: "twitter:title", content: "Educorreia932's Website"},
            {name: "twitter:description", content: "The coolest place in the internet"},
            {name: "twitter:image", content: "/Avatar.png"},
            {property: "og:title", content: "Educorreia932's Website"},
            {property: "og:type", content: "website"},
            {property: "og:description", content: "The coolest place in the internet"},
            {property: "og:image", content: "/Avatar.png"},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-country-flag.js',
        {src: '~/plugins/vue-masonry', ssr: false}
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/composition-api/module',
        '@nuxtjs/fontawesome'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "portal-vue/nuxt"
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true
    },

    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },

    fontawesome: {
        icons: {
            solid: true,
            regular: true,
            brands: true
        }
    },

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'home',
                path: '/',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    }
}
