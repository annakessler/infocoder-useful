import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
	return app.gulp
		.src(`${app.path.src.fonts}*.otf`, {})
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Fonts',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(
			fonter({
				formats: ['ttf'],
			}),
		)
		.pipe(newer(app.path.src.fonts))
		.pipe(app.gulp.dest(app.path.src.fonts))
		.pipe(app.plugins.browserSync.stream());
};

export const ttfToWoff2 = () => {
	return app.gulp
		.src(`${app.path.src.fonts}*.ttf`, {})
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Fonts',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(ttf2woff2())
		.pipe(newer(app.path.build.fonts))
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.plugins.browserSync.stream());
};

export const transferWoff2 = () => {
	return app.gulp
		.src(`${app.path.src.fonts}*.woff2`, {})
		.pipe(
			app.plugins.plumber({
				errorHandler: app.plugins.notify.onError({
					title: 'Fonts',
					message: 'Error: <%= error.message %>',
				}),
			}),
		)
		.pipe(newer(app.path.build.fonts))
		.pipe(app.gulp.dest(app.path.build.fonts))
		.pipe(app.plugins.browserSync.stream());
};
