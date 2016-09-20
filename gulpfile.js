/* jshint node: true */
var gulp = require('gulp');
var less = require('gulp-less');
/**
 * Builds style file
 */
gulp.task('less', function () {
  return gulp.src('./src/less/application.less')
  .pipe(less())
  .pipe(gulp.dest('./public/'));
});
/**
 * Builds public project
 */
gulp.task('build', ['less'], function () {
});
/**
 * Default task
 */
gulp.task('default', ['build']);