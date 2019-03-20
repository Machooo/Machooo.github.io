const gulp         = require('gulp'),
      babel        = require('gulp-babel'),
      sass         = require('gulp-sass'),
      browserSync  = require('browser-sync'),
      concat       = require('gulp-concat'),
      concatCss    = require('gulp-concat-css');
      uglify       = require('gulp-uglifyjs'),
      cssnano      = require('gulp-cssnano'),
      rename       = require('gulp-rename'),
      del          = require('del'),
      imagemin     = require('gulp-imagemin'),
      jpgmin       = require('imagemin-jpegoptim'),
      pngmin       = require('imagemin-pngquant'),
      cache        = require('gulp-cache'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%']))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('img', function() {
  return gulp.src('app/images/**/*')
  .pipe(cache(imagemin([
    imagemin.gifsicle({interlaced: true}),
    jpgmin({
      progressive: true,
      max: 85,
      stripAll: true
    }),
    pngmin({
      quality: '68'
    }),
    imagemin.svgo({
      plugins: [
        {removeViewBox: true},
        {cleanupIDs: false}
      ]
    })
  ])))

  .pipe(gulp.dest('dist/images'));
});

gulp.task('clear', function () {
    return cache.clearAll();
});


// Huyak huyak and to production
gulp.task('build', ['clean', 'clear', 'img', 'sass'], function() {

    let buildCss = gulp.src('app/css/**/*')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))

    let buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    let buildJs = gulp.src('app/js/**/*')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))

    let buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

gulp.task('default', ['watch']);
