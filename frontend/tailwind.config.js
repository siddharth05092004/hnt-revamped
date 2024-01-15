/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/Header.jsx",
    "./src/components/Footer.jsx",
    "./src/components/ProfileCard.jsx",
    "./src/pages/Team.jsx",
    "./src/pages/Home.jsx",
    "./src/pages/Blog.jsx",
    "./src/pages/Alumni.jsx",
    "./src/pages/Contact.jsx",
    "./src/pages/About.jsx",
    "./src/components/VideoCard.jsx",
    "./src/components/BlogCard.jsx",
    "./src/components/NewsCard.jsx"
  ],
  theme: {
    extend: {
      invert: {
        75: '.75'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),],
}


