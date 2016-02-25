export const paths = {
  clean: './app',
  jsServer: {
    src: ['./src/**/*.js'],
    dest: './app/src'
  },
  jsPublic: {
    src: ['./public/scripts/**/*.js'],
    dest: './app/public/scripts'
  },
  jade: {
    src: ['./public/views/**/*.jade'],
    dest: './app/public/views'
  },
  less: {
    src: ['./public/styles/**/*.less'],
    dest: './app/public/styles'
  }
};
