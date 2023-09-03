/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-3": "rgb(var(--primary-3))",
                "primary-4": "rgb(var(--primary-4) / .45)",
            },
            fontFamily: {
                serif: ["ui-serif", "Georgia"],
            },
        },
    },
    plugins: [],
};
