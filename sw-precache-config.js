module.exports = {
  runtimeCaching: [{
    urlPattern: /^https:\/\/(robohash\.org|fonts\.googleapis\.com)\//,
    handler: 'fastest',
    options: {
        cache: {
          maxEntries: 40,
          name: 'robots-images'
        }
    }
  }],
  staticFileGlobs: [
    'index.html',
    'manifest.json',
    'bower_components/webcomponentsjs/webcomponents-lite.min.js',
    'assets/robots-bg.jpg',
    'assets/robots-ui.css',
    'assets/robots.png',
    'src/robots-ui.html',
    'src/time-ago.html'
  ],
  navigateFallback: 'index.html'
};
