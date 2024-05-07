/** @type {import('tailwindcss').Config} */
export default {
  purge: {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      safelist: [
        "bg-[#f9dbff]",
        "bg-[#c0dffb]",
        "bg-[#c0ccfb]",
        "bg-[#fac4eb]",
        "bg-[#879ae6]",
      ],
    },
  },
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};