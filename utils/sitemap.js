const sitemap = require('nextjs-sitemap-generator')
const chalk = require('chalk')

const targetDirectory = 'public'

sitemap({
  baseUrl: 'https://estevanmaito.me',
  pagesDirectory: __dirname + '\\..\\pages',
  ignoreIndexFiles: true,
  targetDirectory: targetDirectory,
  ignoredPaths: ['tags'],
  pagesConfig: {
    '/blog': {
      priority: '1',
      changefreq: 'daily',
    },
  },
})

console.log(chalk.green(`Sitemap generated and available at /${targetDirectory}`))
