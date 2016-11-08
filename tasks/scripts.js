var
  browserSync     = require('browser-sync').create(),
  cache           = require('gulp-memory-cache'),
  concat          = require('gulp-concat'),
  config          = require('../jekyllsmith.config'),
  eslint          = require('gulp-eslint'),
  gulp            = require('gulp'),
  gulpif          = require('gulp-if'),
  named           = require('vinyl-named'),
  plumber         = require('gulp-plumber'),
  size            = require('gulp-size'),
  uglify          = require('gulp-uglify'),
  webpack         = require('webpack-stream'),
  wp              = require('webpack')
;

/*
 * gulp lint:scripts - lints scripts using eslint (config under eslintConfig in package.json)
 */

gulp.task('lint:scripts', function() {
  return gulp.src(config.assets.source + '/scripts/**/*.js', { since: gulp.lastRun('lint:scripts') })
    // For more options, see http://eslint.org/docs/rules/
    // For more environments, see http://eslint.org/docs/user-guide/configuring.html#specifying-environments
    .pipe(eslint())
    .pipe(eslint.format())
});


/*
 * gulp scripts -
 */

gulp.task('make:scripts', function() {

  if (config.enable.webpack) {

    // Array of used webpack plugins
    var webpackPlugins = [];

    return gulp.src(config.assets.source + '/scripts/scripts.js')
      .pipe(named())
      .pipe(webpack(config.scripts.webpack))
      .pipe(gulpif(!config.metadata.envDev, uglify()))
      .pipe(size({ gzip: true, showFiles: true }))
      .pipe(gulp.dest(config.assets.build + '/scripts'))
      .pipe(browserSync.stream())
    ;

  } else {

    return gulp.src(config.assets.source + '/scripts/*.js', { since: cache.lastMtime('concatJS') })
      .pipe(cache('concatJS'))
      .pipe(concat('scripts.js'))
      .pipe(gulpif(!config.envDev, uglify()))
      .pipe(size({ gzip: true, showFiles: true }))
      .pipe(gulp.dest(config.assets.build + '/scripts'))
      .pipe(browserSync.stream())
    ;
  }
});

gulp.task('scripts', gulp.series(
  'lint:scripts',
  'make:scripts'
));
