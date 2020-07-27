const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');


const withSass = require('@zeit/next-sass')
module.exports = withSass({
  /* config options here */
})
module.exports = withPlugins(
  [
    [withTM],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
      },
    ],
    withFonts,
    withCSS,
    withSass,
  ],
  {
    distDir: '../../dist/functions/next',
  }
);
