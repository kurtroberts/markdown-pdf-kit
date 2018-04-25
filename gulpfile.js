const gulp = require('gulp'),
      markdownPdf = require('gulp-markdown-pdf'),
      paths = {
        src : {
          markdown : '**/**.md',
          css : 'style.css'
        },
        dist : 'dist'
      },
      options = {
        cssPath: paths.src.css,
        paperFormat: 'Letter',
        paperBorder: '1cm'
      };

gulp.task('default', () =>
	 gulp.src(paths.src.markdown)
		.pipe(markdownPdf(options))
		.pipe(gulp.dest(paths.dist))
);

gulp.task('watch', function () {
  gulp.watch(paths.src.markdown, gulp.series('default'));
});
