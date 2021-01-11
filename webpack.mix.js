const mix = require('laravel-mix');
const path = require('path');

mix.js('assets/js/index.js', 'js')
   .sass('assets/scss/styles.scss', 'css')
   .options({processCssUrls: false})
    .webpackConfig({
        resolve: {
            alias: {
                '@js' : path.resolve('assets/js'),
                'sass' : path.resolve('assets/scss')
            }
        }
    })