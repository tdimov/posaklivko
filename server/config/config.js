import path from 'path';

export const config = {
  port: process.env.PORT || 9000,
  staticPaths: {
    public: path.normalize(__dirname + '/../../../public'),
    jspm: path.normalize(__dirname + '/../../../public/jspm_packages'),
    views: path.normalize(__dirname + '/../../../public/views'),
    styles: path.normalize(__dirname + '/../../public/styles'),
    scripts: path.normalize(__dirname + '/../../../public/scripts'),
    favicon: path.normalize(__dirname + '/../../../public/images/favicon.ico')
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
