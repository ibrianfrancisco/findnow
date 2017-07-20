const gulp = require('gulp'),
      uglify = require('gulp-uglify'),
      browserify = require('browserify'),
      buffer = require('vinyl-buffer'),
      cleanCSS = require('gulp-clean-css'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('minify-css', () => {
  return gulp.src('public/stylesheets/style.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('public/dist/css'));
});

gulp.task('browserify', () => {
  return gulp.src(['public/javascripts/app.js',
                   'public/javascripts/services/*.js'])
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'));
});

// gulp.task('default', ['browserify', 'minify-css']);
gulp.task('default', ['minify-css']);

gulp.watch(['public/javascripts/**/*.js', 'public/stylesheets/*.css'], ['default']);
