'use strict';

var
  browserSync   = require('browser-sync').create(),
  // cache       = require('gulp-cached'), // ??
  // changed     = require('gulp-changed'),
  config        = require('../jekyllsmith.config'),
  // deploy      = require('gulp-gh-pages'),
  gulp          = require('gulp')
;



// INCREMENTAL BUILDS FTW -- http://blog.reactandbethankful.com/posts/2015/05/01/building-with-gulp-4-part-4-incremental-builds/


gulp.task('assets', gulp.parallel(
  'styles',
  'scripts',
  'images'
));

gulp.task('build', gulp.series(
  'assets',
  'html'
));


// Default task
gulp.task('default', gulp.series('build', 'server'));
