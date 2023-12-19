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
            backgroundImage: {
                hero: "url('https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2F7b4adc4aaf108a543954ad257b4b6ab9.cdn.bubble.io%2Ff1668697149775x673627480906069100%2Fpexels-photo-2294342-min.jpeg?w=768&h=&auto=compress&dpr=2&fit=max')",
            },
        },
    },
    plugins: [],
};
