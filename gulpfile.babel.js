import gulp from 'gulp';
import shell from 'gulp-shell';
import babel from 'gulp-babel';
import rimraf from 'rimraf';
import run from 'run-sequence';
import watch from 'gulp-watch';
import server from 'gulp-live-server';
import jshint from 'gulp-jshint';
import jade from 'gulp-jade';

const paths = {
  clean: './app',
  jsServer: {
    src: ['./src/**/*.js'],
    dest: './app/src'
  },
  jsPublic: {
    src: ['./public/scripts/**/*.js'],
    dest: './app/public'
  },
  jade: {
    src: ['./public/views/**/*.jade'],
    dest: './app/public/views'
  }
};

gulp.task('default', cb => {
  run('server', 'build', 'watch', cb);
});

gulp.task('build', cb => {
  run('clean', 'jshint', 'jade', 'babel', 'restart', cb);
});

gulp.task('clean', cb => {
  rimraf(paths.clean, cb);
});

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

/*gulp.task('babel', shell.task([
  'babel src --out-dir app/src'
]));*/

gulp.task('babel', () => {
  return gulp.src(paths.jsServer.src)
          .pipe(babel({
            presets: ["es2015-node5", "stage-0"]
          }))
          .pipe(gulp.dest(paths.jsServer.dest));
});

let express;

gulp.task('server', () => {
  express = server.new(paths.jsServer.dest);
});

gulp.task('restart', () => {
  express.start.bind(express)();
});

gulp.task('watch', () => {
  return watch(paths.jsServer.src, () => {
    gulp.start('build');
  });
});
