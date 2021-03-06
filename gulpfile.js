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
    img: [],
    fonts:['node_modules/bootstrap/dist/fonts/**/*']
  }
};


gulp.task('clean', function() {
  return del([
    // here we use a globbing pattern to match everything inside the `dist` folder
    'dist/**/*'
  ]);
});

gulp.task('build-dep-js', function(done) {
  return gulp.src(paths.lib.js)
    .pipe(concat('dependent.js'))
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('build-dep-css', function() {
  return gulp.src(paths.lib.css)
    .pipe(concat('dependent.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-dep-font', function() {
  return gulp.src(paths.lib.fonts)
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('build-html', function(done) {
  gulp.src(paths.html).pipe(gulp.dest('./dist')).pipe(connect.reload());
  done();
});

gulp.task('build-img', function(done) {
  gulp.src(paths.img).pipe(gulp.dest('./dist/img')).pipe(connect.reload());
  done();
});

gulp.task('build-css', function() {
  return gulp.src(paths.css)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('build-js', function(done) {
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
  done();
});

gulp.task('build', gulp.series('build-dep-js', 'build-dep-css', 'build-dep-font', 'build-html', 'build-js', 'build-css', 'build-img'));

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', gulp.parallel('build-js'));
  gulp.watch(paths.html, gulp.parallel('build-html'));
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

gulp.task('dev', gulp.parallel('build', 'connect', 'watch'));

gulp.task('default', () => {

});