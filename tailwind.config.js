/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fdf3f3",
          100: "#fce4e4",
          200: "#fbcdcd",
          300: "#f7aaaa",
          400: "#ef7a7a",
          500: "#e55454",
          600: "#d13131",
          700: "#af2626",
          800: "#912323",
          900: "#792323",
        },
      },
      fontFamily: {
        grotesk: ['"Host Grotesk"', "sans-serif"],
      },
      maxWidth: {
        container: "1300px",
      },
    },
  },
  plugins: [],
};
