module.exports = {
	purge: false,
	darkMode: "class",
	theme: {
		darkSelector: ".dark-mode",
		extend: {
			fontFamily: {
				kozuka: ["Kozuka Mincho Pro", "serif"],
			},
			colors: {
				gray: {
					light: "#979797",
					DEFAULT: "#2F2F2F",
					dark: "#242424",
				},
				white: "#FFFFFF",
				black: "#000000",
				primary: "#EC0237",
				secondary: "#BB0324",
			},
			borderRadius: {
				lg: "1rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwindcss-dark-mode")()],
	corePlugins: {
		preflight: false,
	},
};
