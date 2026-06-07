/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0b1b3d", // Midnight Navy Blue
        "secondary": "#6c5a56",
        "marigold": "#e5a93b", // Marigold Gold
        "background": "#fcf9f8",
        "surface": "#ffffff",
        "outline": "#727973",
        "outline-variant": "#c2c8c2",
        "surface-container": "#f0eded",
        "surface-container-low": "#f6f3f2",
        "surface-container-highest": "#e5e2e1",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#424844",
        "secondary-fixed": "#f5ddd7",
        "primary-fixed": "#ccead6",
      },
      spacing: {
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "gutter": "24px",
        "section-gap": "80px",
        "base": "8px",
      },
      fontFamily: {
        "logo": ["Playfair Display", "serif"],
        "headline": ["Montserrat", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
}
