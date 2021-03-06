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
	  jsSrc     = 'src/js/',
	  jssXHR    = 'sXHR.js',
	  jsOut     = 'jcob.min.js', 
	  jsDest    = 'assets/js/',
	  jumpJS 	= 'node_modules/jump.js/dist/jump.js',
	  sceneJS 	= 'node_modules/scenejs/dist/scene.js',
	  cookie    = 'node_modules/js-cookie/src/js.cookie.js',
	  watchCss  = 'src/sass/*.scss',
	  watchJs   = 'src/js/*.js',
	  watchPhp  = '**/**/**/*.php',
	  localsite = 'http://jay.test';

//build files
const build = {
	css: {
			files: ['assets/css/jcob.min.css',],
			dest: 'dist/jay-cob-wp-theme/assets/css/'
		},
	js: {
			files: ['assets/js/jcob.min.js'],
			dest: 'dist/jay-cob-wp-theme/assets/js/'
		},
	inc: {
			files: ['inc/*'	],
			dest: 'dist/jay-cob-wp-theme/inc/'
		},
	admin: {
			files: ['inc/admin/*'],
			dest: 'dist/jay-cob-wp-theme/inc/admin/'
		},
	templates: {
			files: ['inc/admin/templates/*'],
			dest: 'dist/jay-cob-wp-theme/inc/admin/templates/'
		},
	adminJS: {
			files: ['inc/admin/js/*'],
			dest: 'dist/jay-cob-wp-theme/inc/admin/js/'
		},
	adminCSS: {
			files: ['inc/admin/css/*'],
			dest: 'dist/jay-cob-wp-theme/inc/admin/css/'
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
	cookie,
	sceneJS,
	jumpJS,
	jsDest + jsVars,
	jsDest + jssXHR,
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

function buildsXHRJS() {
	return src(jsSrc + jssXHR)
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
function removeJssxhrResidue() {
	return del([jsDest + jssXHR]);
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
function copyAdminFiles() {
	return src(build.admin.files)
			.pipe(dest(build.admin.dest));
}
function copyTmpFiles() {
	return src(build.templates.files)
			.pipe(dest(build.templates.dest));
}
function copyAdmJSFiles() {
	return src(build.adminJS.files)
			.pipe(dest(build.adminJS.dest));
}
function copyAdmCSSFiles() {
	return src(build.adminCSS.files)
			.pipe(dest(build.adminCSS.dest));
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
	watch(watchJs, series(cleanJS, parallel(buildVarsJS, buildsXHRJS, buildJS), concatJS, parallel(removeJssxhrResidue, removeJsvarsResidue, removeJsResidue)));
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

var dev = series( parallel(cleanJS, cleanCssOut), parallel(buildsXHRJS ,buildVarsJS , buildJS, buildCSS), concatJS, removeJsvarsResidue, removeJssxhrResidue,removeJsResidue,watchFiles);
var buildFiles = series(initialClean ,parallel([copyBaseFiles, copyPartsFiles, copyIncFiles, copyAdminFiles, copyTmpFiles, copyAdmJSFiles, copyAdmCSSFiles, copyCSSFiles, copyJSFiles]), zipBuild, finalClean);
task('default', dev);
task('build', buildFiles);
///////////////////////////////////////////////////////////////////////////

