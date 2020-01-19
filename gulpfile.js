const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imgCompress = require('imagemin-jpeg-recompress');
const sass = require('gulp-sass');
const minify = require('gulp-minify');




gulp.task('compressJs', function () {
    return gulp.src('src/js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist/js/'));
});
gulp.watch('src/js/*.js', gulp.series('compressJs'));


gulp.task('styles', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/css/'));
});
gulp.watch('src/sass/*.scss', gulp.series('styles'));

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

function VideoPrevMin() {
    return gulp.src('src/video/*.jpg')
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
        .pipe(gulp.dest('dist/video'));
}

function copyJs() {
    return gulp.src('src/js/*.*')
        .pipe(gulp.dest('dist/js/'));
}

function cssMin() {
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


const build = gulp.series(copyJs, copyFonts, cssMin, imgMin, VideoPrevMin);
exports.default = build;
gulp.task('basic-watch', gulp.series('styles', 'compressJs'));