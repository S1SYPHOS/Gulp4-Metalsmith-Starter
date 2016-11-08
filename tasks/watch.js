var
  browserSync      = require('browser-sync').create(),
  config           = require('../jekyllsmith.config'),
  gulp             = require('gulp')
;

/*
 * gulp watch - On change, html + assets are recompiled & injected
 */

gulp.task('watch:code', function() {

  // https://github.com/BrowserSync/browser-sync/issues/711
  function reload(done) {
    browserSync.reload();
    done();
  };

  gulp.watch([
    '_posts/**/*',
    '_layouts/**/*',
    '_includes/**/*',
    'gulpfile.js',
    'jekyllsmith.config.js'
  ], gulp.series('html', reload));
});

gulp.task('watch:styles', function() {
  gulp.watch(
    config.assets.source + '/styles/**/*.scss',
    gulp.series('styles')
  );
});

gulp.task('watch:scripts', function() {
  gulp.watch(
    config.assets.source + '/scripts/**/*.js',
    gulp.series('scripts')
  );
});

gulp.task('watch:images', function() {
  gulp.watch(
    config.assets.source + '/images/**/*',
    gulp.series('images')
  );
});

gulp.task('watch', gulp.series(
  'watch:code',
  'watch:styles',
  'watch:scripts',
  'watch:images'
));
