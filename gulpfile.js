var gulp = require ('gulp');
//tells node to look for package gulp in node_modules
var sass = require ('gulp-sass');
//requires the gulp-sass plugin
var bowserSync = require ('browser-sync').create();


gulp.task('sass',function(){
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss',['sass'])
}); 