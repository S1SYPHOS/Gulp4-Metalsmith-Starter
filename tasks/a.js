var
  // cache       = require('gulp-cached'), // ??
  // changed      = require('gulp-changed'), // ??
  browserSync   = require('browser-sync').create(),
  config        = require('../jekyllsmith.config.js'),
  gulp          = require('gulp')
;


/*
 * gulp serve -
 */

 gulp.task('server', function() {
   browserSync.init({
     server: {
       baseDir: config.paths.build,
       port: config.server.port,
       notify: config.server.notify,
       open: config.server.open
     },
   });

   // https://github.com/BrowserSync/browser-sync/issues/711
   function reload(done) {
     browserSync.reload();
     done();
   }

   gulp.watch(config.assets.source + '/styles/**/*.scss', gulp.series('styles', reload));
   gulp.watch(config.assets.source + '/scripts/**/*.js', gulp.series('scripts', reload));
   gulp.watch([
     './source/**/**/**/*.{md,html}',
     './source/_layouts/**/*.html',
     // './source/assets/**/*.{js,css}',
     'gulpfile.js',
     'jekyllsmith.config.js'
   ], gulp.series('html', reload));
 });
