module.exports = {
  purge: ['./pages/**/*.{js,mdx}', './components/**/*.js'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
