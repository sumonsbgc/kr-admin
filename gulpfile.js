const { src, dest, watch, parallel, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

function style() {
    return src([
        './assets/css/select2.min.css',
        './assets/scss/*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write("."))
        .pipe(dest('./'));
}

function js() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        './assets/js/select2.full.min.js',
        './assets/js/sweetalert.min.js',
    ])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./assets/js/'));
}


exports.style = style;
exports.js = js;

exports.default = series(style, js)