var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();

gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "html",
			index: "index.html"
		}
	});

	watch('./html/index.html', function() {
		browserSync.reload();
	});

	watch('./html/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./html/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./html/temp/styles.css')
	.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});