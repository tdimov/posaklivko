import gulp from 'gulp';
import {paths} from '../paths';

gulp.task('watch', () => {
  gulp.watch(paths.jsServer.src, ['babel-server']);
  gulp.watch(paths.jsPublic.src, ['babel-public']);
  gulp.watch(paths.jade.src, ['jade']);
  gulp.watch(paths.sass.src, ['sass']);
});
