var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var del = require('del');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

var paths = {
  js: [
    'src/js/index.js'
  ],
  css: [
    'src/css/*'
  ],
  img: [
    'src/img/*'
  ],
  html: [
    'src/html/*'
  ],
  lib: {
    js: ['node_modules/tether/dist/js/tether.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js'],
    css: ['node_modules/tether/dist/css/tether.css', 'node_modules/bootstrap/dist/css/bootstrap.css'],
    img: []
  }
};


gulp.task('clean', function() {
  return del([
    // here we use a globbing pattern to match everything inside the `dist` folder
    'dist/**/*'
  ]);
});

gulp.task('build-dep-js', function() {
  return gulp.src(paths.lib.js)
    .pipe(concat('dependent.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-dep-css', function() {
  return gulp.src(paths.lib.css)
    .pipe(concat('dependent.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-html', function() {
  gulp.src(paths.html).pipe(gulp.dest('./dist')).pipe(connect.reload());
});

gulp.task('build-img', function() {
  gulp.src(paths.img).pipe(gulp.dest('./dist/img')).pipe(connect.reload());
});

gulp.task('build-js', function() {
  browserify({
      entries: paths.js,
      extensions: ['.js'],
      debug: true
    })
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

gulp.task('build', ['build-dep-js', 'build-dep-css', 'build-html', 'build-js', 'build-img'], function() {});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['build-js']);
  gulp.watch(paths.html, ['build-html']);
});

// live reload 
gulp.task('connect', function() {
  connect.server({
    root: './dist',
    port: 9000,
    livereload: true,
    fallback: './dist/index.html'
  });
});

gulp.task('dev', ['build', 'connect', 'watch']);

gulp.task('default', () => {

});