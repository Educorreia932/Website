/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		`components/**/*.{vue,js,ts}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`app.vue`,
		`plugins/**/*.{js,ts}`,
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				kozuka: ["Sawarabi Mincho", "serif"],
			},
			colors: {
				gray: {
					light: "#979797",
					DEFAULT: "#2C2C2C",
					dark: "#242424",
				},
				white: {
					DEFAULT: "#FFFFFF",
					dark: "#ECECEC"
				},
				black: "#000000",
				primary: "#ED0A3F",   // Crayola red
				secondary: "#BA160C", // International Orange (Engineering)
			},
			borderRadius: {
				lg: "1rem",
			},
		},
	},
	plugins: [],
	corePlugins: {
		preflight: false,
	},
	experimental: {
		optimizeUniversalDefaults: true
	}
}
