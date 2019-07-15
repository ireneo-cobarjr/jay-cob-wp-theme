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
	  jumpJS 	= 'node_modules/jump.js/dist/jump.js',
	  watchCss  = 'src/sass/*.scss',
	  watchJs   = 'src/js/*.js',
	  watchPhp  = '**/**/**/*.php'
	  localsite = 'http://jay.test';

//Order by which JS files will be concatenated.
let JS_ORDER = [
	jumpJS,
	jsDest + 'jcob.js'
]; 
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
			.pipe(lineEnding())
			.pipe(babel({ presets: ['@babel/env'] }))
			.pipe(dest(jsDest));
}

function concatJS() {
	return src(JS_ORDER)
			.pipe(concat(jsOut))
			.pipe(uglify())
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
	watch(watchCss, buildCSS);
	//watch for js file changes
	watch(watchJs, buildJS);
	//reload browser once changes are made
	watch([
		cssDest + cssOut,
		jsDest  + jsOut,
		watchPhp 
		]).on('change', sync.reload);
}

///////////////////////////////////////////////////////////////////////////
//Section: D
exports.watchFiles   = watchFiles;
exports.buildCSS     = buildCSS;
exports.concatJS     = concatJS;
exports.buildJS      = buildJS;

var dev = series( parallel([buildJS, buildCSS]), concatJS, watchFiles);
task('default', dev);
///////////////////////////////////////////////////////////////////////////

