var gulp = require('gulp'),     
    sass = require('gulp-ruby-sass') 
    notify = require("gulp-notify") 
    bower = require('gulp-bower');

var config = {
     sassPath: './dist/app/public/stylesheets/main.scss',
     bowerDir: './bower_components' 
}

gulp.task('default', function() {
  console.log('I am the default task. Hear me roar');
});