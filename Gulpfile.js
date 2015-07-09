var gulp = require('gulp');
var browserify = require('./node_modules/browserify/index.js');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var envify = require('envify/custom');


gulp.task('build', function () {
    browserify({
        entries: './src/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
        .transform(babelify)
        .transform(envify({
            NODE_ENV: 'production'
        }))
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('src/**', ['build']);
});

gulp.task('default', ['build', 'watch']);
