import {defineNuxtConfig} from 'nuxt'

export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    buildModules: [
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode"
    ],
    modules: [
        '@nuxtjs/color-mode'
    ],
    colorMode: {
        classSuffix: ''
    }
})
