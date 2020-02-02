const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withCss(
  withSass({
    webpack(config, options) {
      return config;
    }
  })
);
