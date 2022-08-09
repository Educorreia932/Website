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
				kozuka: ["Kozuka Mincho Pro", "serif"],
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
				primary: "#EC0237",
				secondary: "#BB0324",
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
}
