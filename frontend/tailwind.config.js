module.exports = {
    purge: [
        './src/**/*.html',
        './src/**/*.js',
    ],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                "dark": {
                    light: "#333333",
                    DEFAULT: "#242424",
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
