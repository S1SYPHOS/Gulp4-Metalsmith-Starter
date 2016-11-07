var
  config        = require('./jekyllsmith.config'),
  dates         = require('metalsmith-jekyll-dates'),
  collections   = require('metalsmith-collections'),
  excerpts      = require('./_resources/libraries/metalsmith-better-excerpts'),
  feed          = config.envDev ? null : require('metalsmith-feed-atom'),
  fingerprint   = config.envDev ? null : require('metalsmith-fingerprint')
  htmlmin       = config.envDev ? null : require('metalsmith-html-minifier'),
  inplace       = require('metalsmith-in-place'),
  layouts       = require('metalsmith-layouts'),
  markdown      = require('metalsmith-markdown'),
  metallic      = require('metalsmith-metallic'),
  metalsmith    = require('metalsmith'),
  ms            = new metalsmith(process.cwd()),
  permalinks    = require('metalsmith-permalinks'),
  related       = require('metalsmith-related'),
  sitemap       = config.envDev ? null : require('metalsmith-mapsite')
;


var nunjucks = require('nunjucks');
var dateFilter = require('nunjucks-date-filter');
var env = nunjucks.configure('./_layouts', { watch: false });

dateFilter.setDefaultFormat('DD MMM YYYY');
env.addFilter('date', dateFilter);


ms.metadata(config.metadata)
ms.source(config.paths.source)
ms.destination(config.paths.build)
ms.clean(!config.envDev)
ms.use(dates())
ms.use(collections({
  posts: {
    pattern: 'posts/*.md',
    sortBy: 'date',
    reverse: true
  },
  pages: 'pages/*.md'
}))
ms.use(related({
  max: 3,
  pattern: 'posts/*.md'
}))
ms.use(metallic())
ms.use(markdown())
ms.use(excerpts({ stripTags: false }))
.use(permalinks({
  pattern: ':title',
  // date: 'YYYY/MM',
  linksets: [{
    match: { collection: 'posts' },
    pattern: 'posts/:title',
  }]
}))
if (!config.envDev) ms.use(fingerprint({ pattern: ['assets/styles/*.css', 'assets/scripts/*.js'] }))
ms.use(layouts({
  engine: 'nunjucks',
  default: 'post.html',
  directory: '_layouts',
  pattern: '**/*.html'
}))
ms.use(inplace({
  engine: 'nunjucks',
  pattern: '**/*.html'
}))
if (!config.envDev) ms.use(htmlmin(config.html.minify))
if (!config.envDev) ms.use(sitemap(config.html.sitemap))
if (!config.envDev) ms.use(feed(config.html.feed))
ms.build(function(err) {
  if (err) throw err;
})
