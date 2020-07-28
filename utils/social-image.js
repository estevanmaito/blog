const fs = require('fs')
const path = require('path')
const readline = require('readline')
const renderSocialImage = require('puppeteer-social-image').default
const chalk = require('chalk')
const socialLogo = require('./social-logo')

// grab all .md files from pages/blog
// grab all images inside public/social (this is where we will be saving our social images)
// for each file that isn't present in both folders, get the title property inside the front matter
// write this title inside the social image
// save the image to the same name as the original post file, but with the proper extension

const BLOG_DIR = 'pages/blog'
const IMAGES_DIR = './public/social'

/**
 * Get a list of file names inside the provided directory, matching an extension
 * @param {string} dir Directory path
 * @param {string} ext File extension
 * @return {array} List of file names
 */
function getFileNames(dir, ext) {
  // list of file names
  let fileNames = []

  // get all files inside the provided directory
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    // only push files ending with the provided extension
    if (path.extname(file) === ext) {
      // get only the file name, without extension
      const fileName = path.basename(file, path.extname(file))
      fileNames.push(fileName)
    }
  })

  return fileNames
}

// it's important that all md files inside the blog dir reffer to posts
// and you IMAGE_DIR should contain only posts social images
const blogFiles = getFileNames(BLOG_DIR, '.md')
const imageFiles = getFileNames(IMAGES_DIR, '.png')

/**
 * Get a list of posts that don't have a matching social image
 * @param {array} blogFiles List of file names for posts
 * @param {array} imageFiles List of file names for images
 * @return {array} List of file names that don't have a matching social image
 */
function getPostsToGenerateImage(blogFiles, imageFiles) {
  let postsToGenerate = []

  for (let i = 0; i < blogFiles.length; i++) {
    // this performance optimization (O(N)) relies on the fact
    // that you only have post files inside the blog folder ending with .md (index.js or other .js are ok)
    // and that you have an exclusive folder for your post images
    // so this way we can match 1:1 the files in both places
    if (imageFiles[i] !== blogFiles[i]) {
      postsToGenerate.push(blogFiles[i])
    }
  }

  return postsToGenerate
}

/**
 * Get the title from a .md file
 * @param {string} dir Directory path
 * @param {string} fileName File name
 * @return {Promise[]} Promise to the array containing the title and the file name it belongs to
 */
async function getTitleFromFrontMatter(dir, fileName) {
  // create a read stream for the current file
  const file = fs.createReadStream(dir + '/' + fileName + '.md')

  // create an interface to read each line in the file
  const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity,
  })

  // iterate through every line
  for await (const line of rl) {
    // the current line has `title: `
    if (line.match(/title:\s/g)) {
      // return an array
      // [0] content of the title
      // [1] file name of the current file
      return [line.match(/["'](.*?)["']/)[1], fileName]
    }
  }
}

const posts = getPostsToGenerateImage(blogFiles, imageFiles)

/**
 * Generates social images for every post
 * @param {array} posts List of posts
 */
function generateSocialImages(posts) {
  console.log(chalk.green(`Creating ${posts.length} social images...`))

  posts.forEach((p, i) => {
    getTitleFromFrontMatter(BLOG_DIR, p).then((post) => {
      const [postTitle, postFileName] = post
      renderSocialImage({
        template: 'basic',
        templateParams: {
          title: postTitle,
          logo: socialLogo,
          color: 'black',
        },
        output: IMAGES_DIR + '/' + postFileName + '.png',
        size: 'facebook',
      })
    })
  })
}

generateSocialImages(posts)
