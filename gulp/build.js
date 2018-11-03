var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task('deleteDistFolder', function() {
	return del("./dist");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./html/**/*',
		'!./html/*.html',
		'!./html/images/**',
		'!./html/styles/**',
		'!./html/scripts/**',
		'!./html/temp/',
		'!./html/temp/**',
		'!./html/*.sublime-project',
		'!./html/*.sublime-workspace'
	]
	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./dist"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./html/images/**/*', '!./html/images/icons', '!./html/images/icons/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./dist/images"));
});

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
	return gulp.src("./html/*.html")
	.pipe(usemin({
		css: [function() {return rev()}, function() {return cssnano()}],
		js: [function() {return rev()}, function() {return uglify()}]
	}))
	.pipe(gulp.dest("./dist"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'usemin']);