module.exports = {
  output: "export",
  images: {
    unoptimized: true,
  },
  async exportPathMap() {
    return {
      "/fr": { page: "/" },
      "/en": { page: "/" },
    };
  },
};
