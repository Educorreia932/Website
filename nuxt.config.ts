import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
	css: [
		"~/assets/css/tailwind.css",
		"flag-icon-css/css/flag-icons.css",
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
	],
	modules: [
		'@nuxtjs/color-mode',
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
