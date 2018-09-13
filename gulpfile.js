var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');



gulp.task('sass', function() {
    return gulp.src('./app/scss/app.scss') // Create a stream in the directory where our Sass files are located.
        .pipe(sass())                    // Compile Sass into style.css.
        .pipe(nano())                    // Compile Sass into style.css.
        .pipe(gulp.dest('./app/css'));          // Write style.css to the project's root directory.
});



gulp.task('default', function() {
    gulp.watch('./app/scss/*.scss', ['sass']);
});
