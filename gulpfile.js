var gulp = require('gulp');
var browser = require('browser-sync').create();

gulp.task('server', function() {
  browser.init({
      server: {
          baseDir: './',
          index: 'index.html',
          routes: {'/bower_components': 'bower_components'}
      },
      notify: false
  });
  gulp.watch('*.{html,css,js}').on('change', browser.reload);
  gulp.watch('bower_components/**/*.{html,js}').on('change', browser.reload);
});
