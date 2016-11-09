# Gulp v4 - Metalsmith - Starter
**You heard about Metalsmith and want to use it on your next project? You're' also excited about Gulp v4, but want to harness its power today? Then THIS is for you!**

Here's my personal Gulp+Metalsmith boilerplate, starring:
- [Metalsmith](http://www.metalsmith.io/) - an extremely simple, pluggable static site generator
- [Gulp v4](http://gulpjs.com/) - the streaming build system

### Features
- to be continued

## Getting started
Make sure [Node.js](http://nodejs.org/) is installed on your system, then clone this repository and install its dependencies via [NPM](https://npmjs.org/):

```
$ git clone https://github.com/S1SYPHOS/Gulp4-Metalsmith-Starter.git
$ cd Gulp4-Metalsmith-Starter
$ npm install
$ npm start
```

## Workflow
Everything's ready to get started right away - here's my Gulp workflow:
- `npm start` - Compiles assets & html, launches development server:
  - compiles styles & scripts are being compiled & concatenated
  - compresses images
  - builds the site & opens it in your default browser
  - watches for changes and injects them right away
- `npm run build` - Compiles assets & html with production settings:
  - compiles & builds everything
  - minifies & compresses everything
- `npm run debug` - Runs Metalsmith script with debugging option enabled
Additional npm scripts can be found inside `package.json` (such as serving the site with production settings).

## Contributing

Feel free to propose improvements of any kind, just create an [issue](https://github.com/S1SYPHOS/Gulp4-Metalsmith-Starter/issues) and let me know - it's much appreciated. Of course, PRs are welcome as well.

## Special Thanks
I'd like to thank everybody that's making great software - you people are awesome. Also I'm always thankful for feedback and bug reports :)

