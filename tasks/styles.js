var
  // cache         = require('gulp-cached'), // ??
  // changed       = require('gulp-changed'), // ??
  browserSync   = require('browser-sync').create(),
  config        = require('../jekyllsmith.config.js'),
  gulp          = require('gulp'),
  gulpif        = require('gulp-if'),
  minify        = require('gulp-clean-css'),
  notify        = require('gulp-notify');
  plumber       = require('gulp-plumber'),
  postcss       = require('gulp-postcss'),
  prefix        = require('autoprefixer'),
  reporter      = require('postcss-reporter'),
  sass          = require('gulp-sass'),
  size          = require('gulp-size'),
  stylelint     = require('stylelint'),
  syntax_scss   = require('postcss-scss')
;


/*
 * gulp lint:styles -
 */

gulp.task('lint:styles', function() {

  return gulp.src(config.assets.source + '/styles/**/*.scss', { since: gulp.lastRun('lint:styles') })
    // .pipe(plumber({ errorHandler: config.styles.onError }))
    .pipe(postcss([
      // For more options, see http://stylelint.io/user-guide/example-config/
      stylelint(),
      reporter({
        clearMessages: true
      })
    ], { syntax: syntax_scss }))
  ;
});


/*
 * gulp styles -
 */
gulp.task('make:styles', function() {

  var onError = function(err) {
    notify.onError({
      title:    'Gulp',
      subtitle: 'Failure!',
      message:  'Error: <%= error.message %>',
      sound:    'Beep'
    })(err);
    this.emit('end');
  };

  return gulp.src(config.assets.source + '/styles/*.scss')
    .pipe(plumber({ errorHandler: config.styles.onError }))
    .pipe(sass({
      precision: 10, // https://github.com/sass/sass/issues/1122
      includePaths: config.styles.include
    }))
    .pipe(postcss([
      prefix({ browsers: config.styles.prefix })
    ]))
    .pipe(gulpif(!config.envDev, minify()))
    .pipe(size({ gzip: true, showFiles: true }))
    .pipe(gulp.dest(config.assets.build + '/styles'))
    .pipe(gulp.dest(config.paths.build + '/assets/styles'))
    .pipe(browserSync.stream())
  ;
});

gulp.task('styles', gulp.series(
  'lint:styles',
  'make:styles'
));
