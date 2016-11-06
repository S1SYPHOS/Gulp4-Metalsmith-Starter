var
  // cache       = require('gulp-cached'), // ??
  changed     = require('gulp-changed'),
  config      = require('../jekyllsmith.config.js'),
  gulp        = require('gulp'),
  gulpif      = require('gulp-if'),
  imagemin    = require('gulp-imagemin'),
  plumber     = require('gulp-plumber'),
  pngquant    = require('imagemin-pngquant'),
  size        = require('gulp-size')
;


/*
 * gulp images -
 */

gulp.task('images', function () {
  return gulp.src(config.assets.source + '/images/**/*.{jpg,png,gif}') // really neccessary?
    .pipe(plumber())
    .pipe(changed(config.assets.build + '/images'))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(config.assets.build + '/images'));
});
