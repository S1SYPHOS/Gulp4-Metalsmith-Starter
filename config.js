var
  envDev        = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production')
;

module.exports = {
  metadata: {
    envDev: envDev,
    site: {
      title: 'Jekyllsmith',
      tagline: 'Jekyll-like Metalsmith',
      description: 'A reserved <a href="http://jekyllrb.com" target="_blank">Jekyll</a> theme that places the utmost gravity on content with a hidden drawer. Made by <a href="https://twitter.com/mdo" target="_blank">@mdo</a>.',
      url: envDev ? 'localhost:4000' : 'http://www.example.com',
      baseurl: '',
      author: 'S1SYPHOS',
      email: 'hello@twobrain.io',
      github_repo: 'https://github.com/S1SYPHOS/Gulp4-Metalsmith-Starter',
      twitter: 'twobrain_frontend',
      version: '0.2.0'
    }
  },
  paths: {
    source: './_posts',
    build: '_site'
  },
  assets: {
    source: '_resources',
    build: '_posts/assets'
  },
  enable: {
    webpack: false
  },
  server: {
    port: 4000,
    notify: true,
    open: true
  },
  envDev,
  styles: {
    prefix: [
      // For more browsers, see https://github.com/ai/browserslist
      '> 1%',
      'last 3 versions',
      'IE >= 9'
    ],
    include: [
      // 'node_modules',
      // 'bower_components'
    ]
  },
  scripts: {
    webpack: {
      watch: false,
      // entry: {},
      // output: {},
      // plugins: []
    }
  },
  html: {
    minify: {
      // For more options, see https://github.com/kangax/html-minifier
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
