var
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
 });
