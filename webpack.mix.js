const mix = require('laravel-mix');

mix
  .extract(['vue'], 'dist/vendor.js')
  .js('src/app.js', 'dist/');

mix.webpackConfig({
  output: {
    chunkFilename: 'dist/chunks/[name].js',
  },
});