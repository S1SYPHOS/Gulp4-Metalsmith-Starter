var
  // cache         = require('gulp-cached'), // ??
  // changed       = require('gulp-changed'), // ??
  browserSync   = require('browser-sync').create(),
  concat        = require('gulp-concat'),
  config        = require('../jekyllsmith.config.js'),
  eslint        = require('gulp-eslint'),
  gulp          = require('gulp'),
  gulpif        = require('gulp-if'),
  gutil         = require('gulp-util'),
  named         = require('vinyl-named'),
  plumber       = require('gulp-plumber'),
  size          = require('gulp-size'),
  uglify        = require('gulp-uglify'),
  webpack       = require('webpack-stream'),
  wp            = require('webpack')
;

var webpackEnabled = false;

/*
 * gulp lint:scripts -
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

  if (webpackEnabled) {

    // Array of used webpack plugins
    // var webpackPlugins = [];

    return gulp.src(config.assets.source + '/scripts/scripts.js')
      .pipe(named())
      .pipe(webpack(config.scripts.webpackConfig,
        null, function(err, stats) {
          if (err) throw new gutil.PluginError('scripts', err);
          gutil.log(stats.toString(config.scripts.webpackLog));
        }
      ))
      .pipe(gulpif(!config.envDev, uglify()))
      .pipe(size({ gzip: true, showFiles: true }))
      .pipe(gulp.dest(config.assets.build + '/scripts'))
      .pipe(gulp.dest(config.paths.build + '/assets/scripts'))
      .pipe(browserSync.stream())
    ;

  } else {

    return gulp.src(config.assets.source + '/scripts/*.js')
      .pipe(concat('scripts.js'))
      .pipe(gulpif(!config.envDev, uglify()))
      .pipe(size({ gzip: true, showFiles: true }))
      .pipe(gulp.dest(config.assets.build + '/scripts'))
      .pipe(gulp.dest(config.paths.build + '/assets/scripts'))
      .pipe(browserSync.stream())
    ;
  }
});

gulp.task('scripts', gulp.series(
  'lint:scripts',
  'make:scripts'
));
