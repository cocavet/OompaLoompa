let gulp = require('gulp');
let webpack = require('webpack-stream');
let webpackconfig = require('./webpack.config.js');
let webpackconfigDev = require('./webpack.config.dev.js');
let sass = require('gulp-sass');
const ASSETS_ROOT = './assets';

gulp.task('webpack:dev', ['sass'], () => {
    return webpack(webpackconfigDev)
        .pipe(gulp.dest(ASSETS_ROOT + '/js/'));
});

gulp.task('webpack', ['sass'], () => {
    return webpack(webpackconfig)
        .pipe(gulp.dest(ASSETS_ROOT + '/js/'));
});

gulp.task('sass', () => {
    return gulp.src('./front/scss/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest(ASSETS_ROOT + '/css/'));
});

gulp.task('watch:dev', ['sass', 'webpack:dev'], () => {
    gulp.watch(['./front/js/**/*.js'], ['webpack:dev']);
    gulp.watch(['./front/scss/**/*.scss'], ['sass']);
});
