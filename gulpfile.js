const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean')


function css() {
    return gulp
           .src(['sass/**/*.sass', 'sass/**/*.scss'])
           .pipe(sass({
               outputStyle: 'expanded'
           }))
           .pipe(autoprefixer({
                overrideBrowserslist: ["last 5 versions", "defaults"],
                cascade: false
            }))
           .pipe( gulp.dest('css') )
}
gulp.task('clean', function () {
	return gulp.src('css/*', {read: true, allowEmpty: true})
		.pipe(clean());
});

gulp.task('default', function() {
    return gulp.watch(['sass/*.sass', 'index.html', 'sass/*.scss'], gulp.parallel(['clean', 'css']));
});

gulp.task( 'css', css );