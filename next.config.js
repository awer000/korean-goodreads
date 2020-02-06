import withSass from '@zeit/next-sass';
import withCss from '@zeit/next-css';

export default withCss(
  withSass({
    webpack(config, options) {
      return config;
    },
  }),
);
