const mix = require('laravel-mix');
const themeDir = 'themes/mix/';

mix
  .extract(['vue'], themeDir + 'dist/vendor.js')
  .js(themeDir + 'src/app.js', themeDir + 'dist/');

mix.webpackConfig({
  output: {
    chunkFilename: themeDir + 'dist/chunks/[name].js',
  },
});