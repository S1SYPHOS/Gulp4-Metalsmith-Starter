'use strict';

var
  gulp          = require('gulp'),
  requireDir    = require('require-dir')
;


/*
 * gulp -T - overview of task structure
 *
 * For future reference: https://github.com/bradcerasani/gulp-4--split-tasks
 */

requireDir('./tasks', { recurse: true });

gulp.task('assets', gulp.parallel(
  'styles',
  'scripts',
  'images'
));

gulp.task('build', gulp.series(
  'assets',
  'html'
));

gulp.task('default', gulp.series(
  'build',
  'server',
  'watch'
));
