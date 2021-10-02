module.exports = {
    purge: false,
    darkMode: false,
    theme: {
        extend: {
            colors: {
                "dark": {
                    light: "#333333",
                    DEFAULT: "#242424",
                    dark: "191919"
                },
                "red-orange": {
                    light: "#ff5e00",
                    DEFAULT: "#ff4000",
                    dark: "#d93300",
                }
            },
        },
        fontFamily: {
            body: ['Modeseven-L3n5', 'sans-serif'],
            spotify: [ 'sans-serif']
        }
    },
    variants: {
        extend: {
            fontSize: ["responsive", "hover", "focus"]
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
}
