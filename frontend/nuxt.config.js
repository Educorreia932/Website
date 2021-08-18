export default {
	publicRuntimeConfig: { 
		baseURL: process.env.NUXT_BASE_URL
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Educorreia932\'s Website',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ hid: "twitter:title", name: "twitter:title", content: "Educorreai932's Website" },
			{ hid: "twitter:image", name: "twitter:image", content: "Avatar.png" },
			{ hid: "og:title", name: "og:title", content: "Educorreai932's Website" },
			{ hid: "og:image", name: "og:image", content: "Avatar.png" },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/vue-country-flag.js'
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/composition-api/module'
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		extractCSS: true
	},

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
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
