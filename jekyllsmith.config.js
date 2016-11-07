var
  fs            = require('fs'),
  manifest      = JSON.parse(fs.readFileSync('_data/manifest.json'))
  envDev        = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production'),
;

module.exports = {
  envDev,
  paths: {
    source: './_posts',
    build: '_site'
  },
  assets: {
    source: '_resources',
    build: '_posts/assets'
  },
  server: {
    port: 4000,
    notify: false,
    open: false
  },
  metadata: {
    envDev: envDev,
    manifest: manifest,
    site: {
      title: 'Jekyllsmith',
      tagline: 'Jekyll+Metalsmith',
      description: 'A reserved <a href="http://jekyllrb.com" target="_blank">Jekyll</a> theme that places the utmost gravity on content with a hidden drawer. Made by <a href="https://twitter.com/mdo" target="_blank">@mdo</a>.',
      url: 'localhost:4000',
      baseurl: '',
      author: 'Itse Me',
      email: 'mail@haha.com',
      github_repo: 'sick_repo_name',
      twitter: 'twitter',
      version: '0.1'
    },
    seo: {
      google_analytics: '',
      keywords: [
        'my',
        'awesome',
        'keywords'
      ]
    }
  },
  plugins: {
    'metalsmith-publish': {},
    'metalsmith-jekyll-dates': {},
    'metalsmith-collections': {
      pages: {
        pattern: '**/index.md',
        // refer: false,
        // reverse: true,
        // sortBy: 'priority',
      },
      posts: {
        pattern: 'blog/**/20*.*',
        sortBy: 'date',
        reverse: true,
        refer: true,
      }
    },
    'metalsmith-markdown': {},
    'metalsmith-permalinks': {},
    // rootpath?
    'metalsmith-code-highlight': {},
    'metalsmith-fingerprint': {
      pattern: [
        'assets/styles/*.css',
        'assets/scripts/*.js'
      ]
    },
    // "metalsmith-filenames": {},
    // "metalsmith-in-place": {
    //   engine: 'swig',
    //   pattern: '**/*.{html,md}'
    // },
    "metalsmith-layouts": {
      engine: 'swig',
      default: 'default.html',
      directory: '_layouts',
      // partials: 'src/partials',
      pattern: '**/*.{html,md}'
    },
    'metalsmith-inline-source': {
      rootpath: 'source/_includes',
      compress: 'false',
      pretty: 'true'
    },
  },
  styles: {
    prefix: [
      '> 1%',
      'last 3 versions',
      'IE >= 9'
    ],
    include: []
  },
  scripts: {
    webpackConfig: {
      // entry: {},
      // output: {},
      // plugins: []
    },
    webpackLog: {
      assets: false,
      chunks: false,
      chunkModules: false,
      colors: true,
      hash: false,
      timings: false,
      version: false
    }
  },
  html: {
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      keepClosingSlash: true,
      minifyCSS: true,
      minifyJS: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true
    },
    sitemap: {
      hostname: 'http://www.website.com',
      omitIndex: true
    },
    feed: {
      collection: 'posts',
      destination: 'atom.xml'
    }
  }
}
