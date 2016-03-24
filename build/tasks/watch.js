import gulp from 'gulp';
import {paths} from '../paths';

function reportChange(e) {
  console.log('File ' + e.path + ' was ' + e.type + ', running tasks...');
}

gulp.task('watch', () => {
  gulp.watch(paths.jsServer.src, ['lint', 'babel-server', 'restart']).on('change', reportChange);
  gulp.watch(paths.jsPublic.src, ['lint', 'babel-public']).on('change', reportChange);
  gulp.watch(paths.jade.src, ['jade']).on('change', reportChange);
  gulp.watch(paths.sass.src, ['sass']).on('change', reportChange);
});
