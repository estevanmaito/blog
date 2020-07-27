module.exports = {
  purge: ['./pages/**/*.{js,mdx}', './components/**/*.js'],
  theme: {
    extend: {},
    typography: {
      default: {
        css: {
          'h1 > a, h2 > a, h3 > a, h4 > a': {
            textDecoration: 'none',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
