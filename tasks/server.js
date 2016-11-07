var
  // changed       = require('gulp-changed'), // ??
  browserSync      = require('browser-sync').create(),
  config           = require('../jekyllsmith.config'),
  gulp             = require('gulp')
;


/*
 * gulp server -
 */

 gulp.task('server', function() {
   browserSync.init({
     server: {
       baseDir: config.paths.build,
     },
     port: config.server.port,
     notify: config.server.notify,
     open: config.server.open
   });

   // https://github.com/BrowserSync/browser-sync/issues/711
   function reload(done) {
     browserSync.reload();
     done();
   }

   // On change, styles & scripts are recompiled and injected
   gulp.watch(config.assets.source + '/styles/**/*.scss', gulp.series('styles', reload));
   gulp.watch(config.assets.source + '/scripts/**/*.js', gulp.series('scripts', reload));
   gulp.watch(config.assets.source + '/images/**/*', gulp.series('images', reload));
   gulp.watch([
     '_posts/**/*.{md,html}',
     '_layouts/**/*.html',
     '_includes/**/*',
     'gulpfile.js',
     'jekyllsmith.config.js'
   ], gulp.series('html', reload));
 });
