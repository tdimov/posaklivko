import gulp from 'gulp';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import {paths} from '../paths';

gulp.task('clean', cb => {
  return gulp.src([paths.clean])
    .pipe(vinylPaths(del));
});
