const defaultTheme = require('tailwindcss/defaultTheme')

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
          code: {
            backgroundColor: defaultTheme.colors.gray[200],
            borderRadius: defaultTheme.borderRadius.default,
            paddingLeft: defaultTheme.spacing[1],
            paddingRight: defaultTheme.spacing[1],
            display: 'inline-block',
            lineHeight: defaultTheme.lineHeight['snug'],
          },
          'code::before': {
            content: 'none',
          },
          'code::after': {
            content: 'none',
          },
          'pre code::before': {
            content: 'none',
          },
          'pre code::after': {
            content: 'none',
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
