var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// sass 轉譯
gulp.task('sass', function () {
    return gulp.src('./sass/*.scss')//來源
      .pipe(sass().on('error', sass.logError)) //sass轉譯
      .pipe(gulp.dest('./dest/css')); //目的地
  });


  //同步
gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./dest",
            index : "index.html"
        }
    });

    gulp.watch('./sass/*.scss' ,['sass']).on('change',reload);
    gulp.watch(['./*.html' ,'./**/*.html'] ,['fileinclude']).on('change',reload);
});

    //testtest