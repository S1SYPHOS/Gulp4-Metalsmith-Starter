var
  changed         = require('gulp-changed'),
  config          = require('../jekyllsmith.config'),
  gulp            = require('gulp'),
  gulpif          = require('gulp-if'),
  imagemin        = require('gulp-imagemin'),
  plumber         = require('gulp-plumber'),
  pngquant        = require('imagemin-pngquant'),
  size            = require('gulp-size')
;


/*
 * gulp images -
 */

gulp.task('images', function () {
  return gulp.src(config.assets.source + '/images/**/*')
    .pipe(plumber())
    .pipe(changed(config.assets.build + '/images'))
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [pngquant()]
    }))
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(config.assets.build + '/images'))
    .pipe(gulp.dest(config.paths.build + '/assets/images'))
  ;
});
