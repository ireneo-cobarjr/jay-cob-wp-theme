//Setting Our Environment Variables
const {src,dest,watch,parallel,series} = require('gulp');
const autoprefixer = require('autoprefixer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const lineEnding = require('gulp-line-ending-corrector');
const rename = require('gulp-rename');
const gsass = require('gulp-sass');
const gmaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//set variables for file paths




function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
