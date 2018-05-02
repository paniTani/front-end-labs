var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    watch       = require('gulp-watch'),
    browserSync = require('browser-sync');

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        // .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify : false
    });
});

gulp.task('default', ['watch']);

