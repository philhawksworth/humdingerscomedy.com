module.exports = function(config) {

  // Add a date formatter filter to Nunjucks
  config.addFilter("dateDisplay", require("./filters/dates.js") );
  config.addFilter("timestamp", require("./filters/timestamp.js") );
  config.addFilter("squash", require("./filters/squash.js") );

  // just collect the published shows
  config.addCollection("publishedShows", function(collection) {
    return collection.getFilteredByGlob("src/site/shows/*.md").filter(function(item) {
      console.log("listed" in item.data);
      return "listed" in item.data;
    });
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      includes: "_includes"
    },
    templateFormats : ["njk", "md"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk"
  };

};
