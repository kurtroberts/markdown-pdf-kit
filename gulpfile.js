const gulp = require('gulp'),
      markdownPdf = require('gulp-markdown-pdf'),
      options = {
        cssPath: 'style.css',
        paperFormat: 'Letter',
        paperBorder: '1cm'
      };

gulp.task('default', () =>
	 gulp.src("**/**.md")
		.pipe(markdownPdf(options))
		.pipe(gulp.dest('dist'))
);
