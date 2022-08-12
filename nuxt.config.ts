import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
	css: [
		"~/assets/css/tailwind.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
	],
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
		"@nuxtjs/color-mode",
		"@nuxtjs/svg"
	],
	colorMode: {
		classSuffix: '',
	},
	publicRuntimeConfig: {
		spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
		spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
		spotifyRt: process.env.SPOTIFY_RT,
	},
});
