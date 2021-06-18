const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');
const webserver = require('gulp-webserver');
gulp.task("css", () => {
    // gulp.src('./src/css/demo.css')
    return gulp
        .src('./src/css/**')
        .pipe(autoPrefixer({ overrideBrowserslist: ["last 5 version", "iOS > 3", "Firefox > 2"] }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task("js", () => {
    return gulp
        .src('./src/js/**')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
})
gulp.task('sass', () => {
    return gulp
        .src('./src/sass/**')
        .pipe(sass())
        .pipe(autoPrefixer({ overrideBrowserslist: ["last 5 version", "iOS > 3", "Firefox > 2"] }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'))
})
gulp.task("html", () => {
    return gulp
        .src('./src/pages/**')
        .pipe(htmlmin({
            removeEmptyAttributes: true,//移出空属性
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('./dist/pages'))
})
gulp.task("lib", () => {
    return gulp
        .src('./src/lib/**')
        .pipe(gulp.dest('./dist/lib'))
})
gulp.task("static", () => {
    return gulp
        .src('./src/static/**')
        .pipe(gulp.dest('./dist/static'))
})


gulp.task("clean", () => {
    return gulp
        .src('./dist')
        .pipe(clean())
})
gulp.task("webserver", () => {
    return gulp
        .src('./dist')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            open: './pages/index.html',
            livereload: true,
            proxies: [{
                source: '/geta',
                target: 'http://localhost/biaodanyanzheng/php/form-login.php'
            }]
        }))
})
gulp.task('watch', (cb) => {
    gulp.watch('./src/css/**', gulp.series('css'))
    gulp.watch('./src/pages/**', gulp.series('html'))
    gulp.watch('./src/js/**', gulp.series('js'))
    gulp.watch('./src/sass/**', gulp.series('sass'))
    gulp.watch('./src/lib/**', gulp.series('lib'))
    gulp.watch('./src/static/**', gulp.series('static'))
    cb()
})

gulp.task('default', gulp.series('css', 'js', 'html', 'lib', 'static', 'sass', 'webserver', 'watch'))