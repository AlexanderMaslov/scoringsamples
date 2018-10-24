var gulp = require('gulp'),
	watch = require('gulp-watch');

gulp.task('default', function() {
	console.log("Hooray - you created a Gulp task.");
});

gulp.task('html', function() {
	console.log("Imagine something useful being done to your HTML here.");
});

gulp.task('styles', function() {
	console.log("Imagine Sass or PostCSS tasks running here.");
});

gulp.task('watch', function() {

	watch('./html/index.html', function() {
		gulp.start('html');
	});

	watch('./html/css/**/*.css', function() {
		gulp.start("styles");
	});

});