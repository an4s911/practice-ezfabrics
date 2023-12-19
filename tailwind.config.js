/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                "slide-left-in": {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                "slide-left-in": "slide-left-in 1s ease-out",
            },
        },
    },
    plugins: [],
};
