/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "c-2": "1fr min-content",
            },
            keyframes: {},
        },
    },
    plugins: [],
};
