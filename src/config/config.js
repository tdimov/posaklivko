import path from 'path';

export class Config {
  constructor(configuration) {
    this.rootPath = path.normalize(__dirname + '/../../');
    this.config = this._configurations[configuration];
  }

  get _configurations() {
    return {
      development: {
        rootPath: this.rootPath,
        dbConnectionString: 'SET HERE YOUR CONNECTION STRING TO DATABASE FOR DEVELOPMENT',
        port: process.env.PORT || 3000
      },
      production: {
        rootPath: this.rootPath,
        dbConnectionString: 'SET HERE YOUR CONNECTION STRING TO DATABASE FOR PRODUCTION',
        port: process.env.PORT || 3000
      }
    };
  }
}
