var
  // cache            = require('gulp-cached'), // ??
  // changed          = require('gulp-changed'), // ??
  // config           = require('../jekyllsmith.config.js'),
  exec            = require('child_process').exec,
  gulp            = require('gulp')
;


/*
 * gulp html -
 */

gulp.task('html', function (cb) {
  exec('node ./index.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
