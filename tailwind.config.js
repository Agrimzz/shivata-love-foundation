/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.js"],
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
        sans: ['"Host Grotesk"', "sans-serif"],
        "oooh-baby": ['"Oooh Baby"', "cursive"],
      },
      maxWidth: {
        container: "1300px",
      },
      fontSize: {
        "3xl": ["32px", { lineHeight: "2rem" }],
      },
    },
    plugins: [],
  },
};
