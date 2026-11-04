module.exports = function(eleventyConfig) {
  // Copia tus archivos estáticos directamente al sitio compilado
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("favicon.svg");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site" // Carpeta donde 11ty generará el HTML final
    }
  };
};
