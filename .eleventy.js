module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("LICENSE");

  return {
    dir: { input: ".", includes: "_includes", output: "_site" },
    htmlTemplateEngine: "njk"
  };
};
