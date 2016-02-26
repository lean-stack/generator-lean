var gulp = require('gulp');

// Gulp plugins
var $ = require('gulp-load-plugins')();

// NPM dependencies
var browserSync = require('browser-sync');

gulp.task('default');

/**** Building tasks **/

gulp.task('styles', [], function () {
  return gulp.src('app/styles/*.css')
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(browserSync.reload({stream: true}));
})

/**** Serving tasks **/

gulp.task('serve', ['styles'], function () {

  browserSync({
    notify: true,
    port: 3000,
    server: {
      baseDir: ['.tmp', 'app']
    }
  });

  gulp.watch([
    'app/*.html',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', browserSync.reload);

  gulp.watch('app/styles/**/*.css', ['styles']);

});
