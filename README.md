# Gulp v4 - Metalsmith - Starter
**You heard about Metalsmith and want to use it on your next project? You're' also excited about Gulp v4, but want to harness its power today? Then THIS is for you!**

Here's my personal Gulp+Metalsmith boilerplate, starring:
- [Metalsmith](http://www.metalsmith.io/) - an extremely simple, pluggable static site generator
- [Gulp v4](http://gulpjs.com/) - the streaming build system
For those well acquainted with [Jekyll](http://jekyllrb.com/), folder structure and naming convention of posts will be familiar. No coincidence as Jekyll was my first love when it comes to static site generators, so it's kind of a tribute (hence I like to call it 'Jekyllsmith').

## Features
This starter also features a number of great software (in the words of their creators):
- [Lanyon](http://lanyon.getpoole.com/) - a content-first, sliding sidebar theme (originally) for Jekyll (by [mdo](http://mdo.fm))
- [Browsersync](https://www.browsersync.io/) - time-saving synchronised browser testing (once you go live-reload, you'll never come back)
- [Sass](http://sass-lang.com/) - CSS with superpowers
- [PostCSS](https://github.com/postcss/postcss) - a tool for transforming styles with JS plugins
- [Autoprefixer](https://github.com/postcss/autoprefixer) - adding vendor prefixes by the rules of [Can I Use](http://caniuse.com/)
- [Stylelint](http://stylelint.io/) - a mighty, modern CSS linter (with preconfigured ruleset by [Hugo Giraudel](https://sass-guidelin.es/))
- [Webpack](https://webpack.github.io/) - a bundler for javascript and friends
- [ESLint](http://eslint.org/) - the pluggable linting utility for JavaScript and JSX (with preconfigured ruleset by [Google](https://github.com/google/eslint-config-google))
- [Swig](https://github.com/paularmstrong/swig) - an awesome, Django/Jinja-like template engine for node.js (similar to Jekyll's [Liquid](http://shopify.github.io/liquid/), but feel free to use another one, because Metalsmith!)

## Getting started
Make sure [Node.js](http://nodejs.org/) is installed on your system, then clone this repository and install its dependencies via [NPM](https://npmjs.org/):

```
$ git clone https://github.com/S1SYPHOS/Gulp4-Metalsmith-Starter.git
$ cd Gulp4-Metalsmith-Starter
$ npm install
$ npm start
```

### Workflow
Everything's ready to get started right away - here's my Gulp workflow:

`npm start` - Compiles assets & html, launches development server:
- compiles styles & scripts are being compiled & concatenated
- compresses images
- builds the site & opens it in your default browser
- watches for changes and injects them right away

`npm run build` - Same as above, but in production mode:
- compiles & builds everything
- minifies & compresses everything

`npm run deploy` - Same as above, plus everything's being pushed to your repositories' `gh-pages` branch

Additional npm scripts can be found inside `package.json` (such as serving the site with production settings or debug mode). For those in need of a more lightweight solution, just modify templates, add some content and/or drop assets into `_posts/assets`, then run `node ./index.js` to build the site (which could then be served with `gulp server`).

### Configuration
Global variables and site metadata can be found inside `config.js`. Metalsmith's build process resides in `index.js`. Static assets such as (S)CSS or JS files as well as fonts and images are located inside `_resources`, posts and pages in their respective folders inside `_posts`. If something doesn't suit your needs, just make it so, and if you stumble across something worth sharing, then think about ..

## Contributing
Feel free to propose improvements of any kind, if you think something's missing. Just create an [issue](https://github.com/S1SYPHOS/Gulp4-Metalsmith-Starter/issues) and let me know - it's much appreciated. Of course, PRs are welcome as well.

## Special Thanks
I'd like to thank everybody that's making great software - you people are awesome. Also I'm always thankful for feedback and bug reports :)
