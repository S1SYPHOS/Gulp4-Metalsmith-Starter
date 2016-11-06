var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var inplace     = require('metalsmith-in-place');


Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "It's about saying »Hello« to the World.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('content')
  .destination('build')
  .clean(true)
  .use(collections({
    posts: 'posts/*.md'
  }))
  .use(markdown())
  .use(permalinks({
    pattern: ':title',
    linksets: [{
      match: { collection: 'posts' },
      pattern: 'posts/:title',
    }]
  }))
  .use(layouts({
    engine: 'swig',
    default: 'post.html'
  }))
  .use(inplace({
    engine: 'swig'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });
