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
const zip = require('gulp-zip');
const del = require('del');
///////////////////////////////////////////////////////////////////////////
//Section: B
//set variables for files and file paths
const sass      = 'src/sass/jcob.scss',
	  cssOut    = 'jcob.min.css',
	  cssDest   = 'assets/css/',
	  jsFile    = 'src/js/jcob.js',
	  jsVars    = 'vars.js',
	  jsSrc     = 'src/js/'
	  jsOut     = 'jcob.min.js', 
	  jsDest    = 'assets/js/',
	  jumpJS 	= 'node_modules/jump.js/dist/jump.js',
	  sceneJS 	= 'node_modules/scenejs/dist/scene.js',
	  watchCss  = 'src/sass/*.scss',
	  watchJs   = 'src/js/*.js',
	  watchPhp  = '**/**/**/*.php'
	  localsite = 'http://jay.test';

//build files
const build = {
	css: {
			files: [
				'assets/css/jcob.min.css',			],
			dest: 'dist/jay-cob-wp-theme/assets/css/'
		},
	js: {
			files: [
				'assets/js/jcob.min.js'
			],
			dest: 'dist/jay-cob-wp-theme/assets/js/'
		},
	inc: {
			files: [
				'inc/*'
			],
			dest: 'dist/jay-cob-wp-theme/inc/'
		},
	parts: {
			files: [
				'template-parts/**/*.php',
			],
			dest: 'dist/jay-cob-wp-theme/template-parts/'
		},
	base: {
			files: [
				'*.php',
				'style.css',
				'screenshot.png'
		    ],
	    	dest: 'dist/jay-cob-wp-theme/'
	    },
	    out: 'jay-cob-wp-theme.zip',
	    dest: 'dist/'
};

//Order by which JS files will be concatenated.
let JS_ORDER = [
	sceneJS,
	jumpJS,
	jsDest + jsVars,
	jsDest + 'jcob.js'
]; 
///////////////////////////////////////////////////////////////////////////
//Section: C
//defining CSS compilation function
function cleanCssOut() {
	return del([cssDest + cssOut]);
}
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
function cleanJS() {
	return del([jsDest + jsOut]);
}

function buildJS() {
	return src(jsFile)
			.pipe(lineEnding())
			.pipe(babel({ presets: ['@babel/env'] }))
			.pipe(dest(jsDest));
}

function buildVarsJS() {
	return src(jsSrc + jsVars)
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

function removeJsResidue() {
	return del([jsDest + 'jcob.js']);
}
function removeJsvarsResidue() {
	return del([jsDest + jsVars]);
}

//build functions
	// Step 1: clean dist folder
function initialClean() {
		return del(['dist/*']);
}
	// Step 2: copy files
function copyCSSFiles() {
	return src(build.css.files)
			.pipe(dest(build.css.dest));
}
function copyJSFiles() {
	return src(build.js.files)
			.pipe(dest(build.js.dest));
}
function copyIncFiles() {
	return src(build.inc.files)
			.pipe(dest(build.inc.dest));
}
function copyPartsFiles() {
	return src(build.parts.files)
			.pipe(dest(build.parts.dest));
}
function copyBaseFiles() {
	return src(build.base.files)
			.pipe(dest(build.base.dest));
}
	// step 3: zip it!
function zipBuild() {
	return src(build.base.dest + '**/**/*')
			.pipe(zip(build.out))
			.pipe(dest(build.dest));
}
	// step 4: clean dist
function finalClean() {
		return del(['dist/*', '!dist/*.zip']);
}
//end build functions

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
	watch(watchJs, series(cleanJS, buildVarsJS, buildJS, concatJS, removeJsvarsResidue, removeJsResidue));
	//reload browser once changes are made
	watch([
		cssDest + cssOut,
		jsDest + jsOut,
		watchPhp 
		]).on('change', sync.reload);
}

///////////////////////////////////////////////////////////////////////////
//Section: D
exports.watchFiles   = watchFiles;
exports.buildCSS     = buildCSS;
exports.concatJS     = concatJS;
exports.buildJS      = buildJS;
exports.cleanJS      = cleanJS;

var dev = series( parallel([cleanJS, cleanCssOut]), parallel([buildVarsJS, buildJS, buildCSS]), concatJS, removeJsResidue ,watchFiles);
var buildFiles = series(initialClean ,parallel([copyBaseFiles, copyPartsFiles, copyIncFiles, copyCSSFiles, copyJSFiles]), zipBuild, finalClean);
task('default', dev);
task('build', buildFiles);
///////////////////////////////////////////////////////////////////////////

