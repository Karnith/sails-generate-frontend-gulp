/**
 * Precompiles Underscore templates to a `.jst` file.
 *
 * ---------------------------------------------------------------
 *
 * (i.e. basically it takes HTML files and turns them into tiny little
 *  javascript functions that you pass data to and return HTML. This can
 *  speed up template rendering on the client, and reduce bandwidth usage.)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-jst
 *
 */

module.exports = function(gulp, plugins) {

	var templateFilesToInject = [
		'templates/**/*.html'
	];

	gulp.task('jst', function() {
		gulp.src(require('../pipeline').templateFilesToInject)
		.pipe(plugins.jst())
		.pipe(gulp.dest('.tmp/public/jst.js'));
	});
};
