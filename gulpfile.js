/* jshint node: true */
var gulp = require('gulp');
var less = require('gulp-less');
var pug = require('gulp-pug');
/**
 * Builds style file
 */
gulp.task('less', function () {
  return gulp.src('./src/less/application.less')
  .pipe(less())
  .pipe(gulp.dest('./public/'));
});
/**
 * Builds view file
 */
gulp.task('views', function () {
  return gulp.src('./src/index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./public/'));
});
/**
 * Builds public project
 */
gulp.task('build', ['less', 'views'], function () {
});
/**
 * Default task
 */
gulp.task('default', ['build']);