var gulp = require('gulp');
var concat = require('gulp-concat');
var ngTemplate = require('gulp-ng-template');
 
gulp.task('concat', function() {
  return gulp.src([
                    'bower_components/angular/angular.js',
                    'bower_components/lodash/lodash.js',
                    'frontend/module.js',
                    'frontend/**/*.js',    
                    '!**/*.spec.js'
                ])
    .pipe(concat('game.js'))
    .pipe(gulp.dest('site'));
});

gulp.task('ngtemplates', function() {
  return gulp.src('frontend/**/*.html')
    .pipe(ngTemplate({
        filePath: 'templates.js', 
        moduleName: 'minesweeper',
        prefix: 'frontend/'
    }))
    .pipe(gulp.dest('site'));
});

gulp.task('default', ['concat', 'ngtemplates']);
