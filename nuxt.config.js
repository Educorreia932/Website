export default {
	head: {
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
			{ name: "twitter:image", content: "~/assets/images/avatar.png" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		],
	},
	css: ["flag-icon-css/css/flag-icons.css"],
	plugins: [
		{ src: "~/plugins/vue-masonry", mode: "client" },
		{ src: "~/plugins/vue-content-placeholders.js" },
	],
	components: true,
	buildModules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxtjs/fontawesome",
	],
	modules: [
		"@nuxt/content",
	],
	build: {
		standalone: true,
		extractCSS: true,
	},
	vue: {
		config: {
			productionTip: false,
			devtools: true,
		},
	},
	loading: {
		color: "white",
		height: "5px",
		throttle: 0,
	},
	colorMode: {
		classSuffix: "",
	},
	fontawesome: {
		component: "fa",
		icons: {
			solid: true,
			regular: true,
			brands: true,
		},
	},
	env: {
		spotifyClientID: process.env.SPOTIFY_CLIENT_ID,
		spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
		spotifyRefreshToken: process.env.SPOTIFY_RT,
	},
};
