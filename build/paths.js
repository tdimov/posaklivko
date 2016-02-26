export const paths = {
  clean: './dist',
  jsServer: {
    src: ['./src/**/*.js'],
    dest: './dist/src'
  },
  jsPublic: {
    src: ['./public/scripts/**/*.js'],
    dest: './dist/public/scripts'
  },
  jade: {
    src: ['./public/views/**/*.jade'],
    dest: './dist/public/views'
  },
  less: {
    src: ['./public/styles/**/*.less'],
    dest: './dist/public/styles'
  }
};
