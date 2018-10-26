var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "html"
		}
	});

	watch('./html/index.html', function() {
		browserSync.reload();
	});

	watch('./html/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./html/temp/styles.css')
	.pipe(browserSync.stream());
});