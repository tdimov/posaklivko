import path from 'path';

export class Config {
  constructor(configuration) {
    this.rootPath = path.normalize(__dirname + '/../../');
    this.configuration = configuration;
  }

  get config() {
    let configurations = {
      development: {
        rootPath: this.rootPath,
        dbConnectionString: 'mongodb://localhost/my_local_db',
        port: process.env.PORT || 3000
      },
      production: {
        rootPath: this.rootPath,
        dbConnectionString: 'SET HERE YOUR CONNECTION STRING TO DATABASE FOR PRODUCTION',
        port: process.env.PORT || 3000
      }
    };
    
    return configurations[this.configuration];
  }
}
