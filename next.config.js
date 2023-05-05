const withImages = require("next-images");

module.exports = withImages({
  images: {
    disableStaticImages: true,
  },
  outdir: "./build", // diretório de saída
});