import gulp from 'gulp';
import babel from 'gulp-babel';
import run from 'run-sequence';
import jshint from 'gulp-jshint';
import jade from 'gulp-jade';
import sass from 'gulp-sass';
import {paths} from '../paths';

gulp.task('jshint', () => {
  return gulp.src(paths.jsServer.src, paths.jsPublic.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('jade', () => {
  gulp.src(paths.jade.src)
    .pipe(jade({}))
    .pipe(gulp.dest(paths.jade.dest));
});

gulp.task('sass', function () {
  return gulp.src(paths.sass.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('babel-server', () => {
  return babelBuild(paths.jsServer);
});

gulp.task('babel-public', () => {
  return babelBuild(paths.jsPublic);
});

let babelBuild = paths => {
  return gulp.src(paths.src)
          .pipe(babel({
            presets: ["es2015-node5", "stage-0"]
          }))
          .pipe(gulp.dest(paths.dest));
};

gulp.task('build', cb => {
  run('clean','jade', 'sass', 'jshint', 'babel-server', 'babel-public', 'restart', cb);
});
