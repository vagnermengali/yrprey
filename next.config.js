const withImages = require('next-images');

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  outDir: 'build',
  distDir: 'build'
});