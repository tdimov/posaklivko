import path from 'path';

export const config = {
  port: process.env.PORT || 3000,
  staticPaths: {
    rootPath: path.normalize(__dirname + '/../../'), // remove it if don't need it
    public: path.normalize(__dirname + '/../../../public'),
    jspmPath: path.normalize(__dirname + '/../../../public/jspm_packages'),
    viewsPath: path.normalize(__dirname + '/../../public/views'),
    stylesPath: path.normalize(__dirname + '/../../public/styles'),
    scriptsPath: path.normalize(__dirname + '/../../../public/scripts')
  },
  development: {
    dbConnectionString: 'mongodb://localhost/my_local_db'
  },
  staging: {
    dbConnectionString: 'SET HERE YOUR CONNECTION STRING TO DATABASE FOR STAGING'
  },
  production: {
    dbConnectionString: 'SET HERE YOUR CONNECTION STRING TO DATABASE FOR PRODUCTION'
  }
};
