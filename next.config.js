const withImages = require("next-images");

module.exports = withImages({
  distDir: "build",
  images: {
    disableStaticImages: true,
  },
});