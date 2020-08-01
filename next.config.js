const withMdxEnhanced = require('next-mdx-enhanced')
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  fileExtensions: ['md'],
  rehypePlugins: [
    require('rehype-slug'),
    [require('rehype-autolink-headings'), { behavior: 'wrap' }],
    require('@mapbox/rehype-prism'),
  ],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})(
  withReactSvg({
    include: path.resolve(__dirname, 'icons'),
    webpack(config, options) {
      return config
    },
  })
)
