module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('daisyui'), require('@tailwindcss/typography'), require('tailwindcss-dotted-background'), ],
    safelist: ["col-start-1", "col-start-2", "col-start-3", "col-start-4", "col-start-5", "col-start-6"].concat([...Array(30).keys()].map(k => `top-[${k*50}px]`)),
    daisyui: {
        dropShadow: {
            glow: [
                "0 0px 20px rgba(255,255, 255, 0.35)",
                "0 0px 65px rgba(255, 255,255, 0.2)",
            ],
        },
        themes: [{
            light: {
                ...require("daisyui/src/colors/themes")["[data-theme=light]"],
                "--rounded-btn": "0.1rem"
            },

        }, ],
    },
};