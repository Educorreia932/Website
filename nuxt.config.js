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
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	css: ["flag-icon-css/css/flag-icons.css"],
	plugins: [{ src: "~/plugins/vue-masonry", mode: "client" }],
	components: true,
	buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
	modules: [],
	build: {
		standalone: true,
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
};
