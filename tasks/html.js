var
  // cache     = require('gulp-cached'), // ??
  // changed    = require('gulp-changed'), // ??
  config      = require('../jekyllsmith.config.js'),
  gulp        = require('gulp'),
  Metalsmith  = require('metalsmith'),
  ms          = new Metalsmith(process.cwd()),
  htmlmin     = config.envDev ? null : require('metalsmith-html-minifier'),
  plugins     = config.plugins || {}
;


/*
 * gulp html -
 */

gulp.task('html', function(callback) {
  ms.clean();
  ms.source(config.paths.source);
  ms.destination(config.paths.build);
  ms.metadata(config.metadata);

  Object.keys(plugins).forEach(function(key) {

    var
     plugin,
     options = plugins[key]
    ;

    plugin = require(key);
    ms.use(plugin(options));
  });

  if (htmlmin) ms.use(htmlmin());

  ms.build(function(err){
    if (err) return callback(err);
    callback();
  });
});
