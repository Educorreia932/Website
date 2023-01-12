export default defineNuxtConfig({
	css: [
		"~/assets/css/tailwind.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
	],
	postcss: {
		plugins: {
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	build: {
		transpile: [
			"@fortawesome/vue-fontawesome",
			"@fortawesome/fontawesome-svg-core",
			"@fortawesome/pro-solid-svg-icons",
			"@fortawesome/pro-regular-svg-icons",
			"@fortawesome/free-brands-svg-icons"
		]
	},
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxt/image-edge",
		"@nuxtjs/color-mode",
	],
	runtimeConfig: {
		public: {
			spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
			spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
			spotifyRt: process.env.SPOTIFY_RT,
		},
	},
	image: {
		provider: "netlify",
	},
	colorMode: {
		classSuffix: "",
	},
});
