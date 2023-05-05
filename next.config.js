const withImages = require("next-images");

module.exports = {
  distDir: "build",
};
withImages({
  images: {
    disableStaticImages: true,
  },
});
