///////////////////////////////////////////////////////////////////////////
//Section: A
//Setting Our Environment Variables
const {src,dest,watch,parallel,series,task} = require('gulp');
const prefix = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const lineEnding = require('gulp-line-ending-corrector');
const rename = require('gulp-rename');
const gsass = require('gulp-sass');
const gmaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sync =  require('browser-sync');
///////////////////////////////////////////////////////////////////////////
//Section: B
//set variables for files and file paths
const sass      = 'src/sass/jcob.scss',
	  cssOut    = 'jcob.min.css',
	  cssDest   = 'assets/css/',
	  jsFile    = 'src/js/jcob.js',
	  jsOut     = 'jcob.min.js', 
	  jsDest    = 'assets/js/',
	  localsite = 'http://jay.test';
///////////////////////////////////////////////////////////////////////////
//Section: C
//defining CSS compilation function
function buildCSS() {
	return src(sass)
			.pipe(gmaps.init({ loadMaps: true }))
			.pipe(gsass().on('error', gsass.logError))
			.pipe(prefix('last 2 versions'))
			.pipe(concat(cssOut))
			.pipe(cleanCSS())
			.pipe(gmaps.write('./maps/'))
			.pipe(lineEnding())
			.pipe(dest(cssDest));
}

//defining js compilation function
function buildJS() {
	return src(jsFile)
			.pipe(concat(jsOut))
			.pipe(babel({ presets: ['@babel/env'] }))
			.pipe(uglify())
			.pipe(lineEnding())
			.pipe(dest(jsDest));
}

//defining file watch function
function watchFiles() {
	sync.init({
		open: 'external',
		proxy: localsite,
		port: 8080
	});	

	//watch for scss file changes
	watch(sass, buildCSS);
	//watch for js file changes
	watch(jsFile, buildJS);
	//reload browser once changes are made
	watch([
		cssDest + cssOut,
		jsDest  + jsOut 
		]).on('change', sync.reload);
}

///////////////////////////////////////////////////////////////////////////
//Section: D
exports.watchFiles   = watchFiles;
exports.buildCSS     = buildCSS;
exports.buildJS      = buildJS;

var dev = series( parallel([buildJS, buildCSS]), watchFiles);
task('default', dev);
///////////////////////////////////////////////////////////////////////////

