import gulp from 'gulp';
import run from 'run-sequence';

gulp.task('default', cb => {
  run('server', 'build', 'watch', cb);
});
