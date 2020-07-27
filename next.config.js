const withMdxEnhanced = require('next-mdx-enhanced')

module.exports = withMdxEnhanced({
  layoutPath: 'layouts',
  fileExtensions: ['md'],
  rehypePlugins: [
    require('rehype-slug'),
    [require('rehype-autolink-headings'), { behavior: 'wrap' }],
  ],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: 'prebuild|loader|both',
  },
})(/* your normal nextjs config */)
