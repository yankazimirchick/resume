const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imgCompress = require('imagemin-jpeg-recompress');
const sass = require('gulp-sass');


gulp.task('styles', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});

function imgMin() {
    return gulp.src('src/img/**/**/**/**')
        .pipe(imagemin([
            imgCompress({
                loops: 4,
                min: 50, //50
                max: 70,
                quality: 'high'
            }),
            imagemin.gifsicle(),
            imagemin.optipng(),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest('dist/img'));
}

function copyJs() {
    return gulp.src('src/js/*.*')
        .pipe(gulp.dest('dist/js/'));
}

function css() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
}

function copyFonts() {
    return gulp.src('src/fonts/*.*')
        .pipe(gulp.dest('dist/fonts/'));
}


const build = gulp.series(copyJs, copyFonts, css, imgMin);

exports.default = build;