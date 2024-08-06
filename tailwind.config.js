/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        ping: "ping 0.6s cubic-bezier(0, 0, 0.2, 0) reverse 1",
        fade: "fadeIn 0.8s ease-in-out 0.5s forwards",
        slideInFromTop: "slideInFromTop 1s ease-in-out forwards",
        bounceOnce: "bounceOnce 2s ease-in-out 0.5s forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInFromTop: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        bounceOnce: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-20px)",
          },
          "60%": {
            transform: "translateY(-5px)",
          },
        },
      },
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
