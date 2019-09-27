module.exports = function(eleventyConfig) {

  // eleventyConfig.addPassthroughCopy('src/favicon.ico')

  return {
    dir: {
      input: 'src'
    },
    templateFormats: [
      'html',
      'md',
      'njk',
    ],
    passthroughFileCopy: true,
  }
};

