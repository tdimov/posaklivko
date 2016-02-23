import path from 'path';

export class Config {
  constructor(configuration) {
    this.rootPath = path.normalize(__dirname + '/../../'); // remove it if don't need it
    this.jspmPath = path.normalize(__dirname + '/../../../public');
    this.viewsPath = path.normalize(__dirname + '/../../public/views');
    this.stylesPath = path.normalize(__dirname + '/../../public/styles');
    this.scriptsPath = path.normalize(__dirname + '/../../public/scripts');
    this.configuration = configuration;
  }

  get config() {
    let configurations = {
      development: {
        rootPath: this.rootPath,
        jspmPath: this.jspmPath,
        viewsPath: this.viewsPath,
        stylesPath: this.stylesPath,
        scriptsPath: this.scriptsPath,
        dbConnectionString: 'mongodb://localhost/my_local_db',
        port: process.env.PORT || 3000
      },
      production: {
        rootPath: this.rootPath,
        jspmPath: this.jspmPath,
        viewsPath: this.viewsPath,
        stylesPath: this.stylesPath,
        scriptsPath: this.scriptsPath,
        dbConnectionString: 'SET HERE YOUR CONNECTION STRING TO DATABASE FOR PRODUCTION',
        port: process.env.PORT || 3000
      }
    };

    return configurations[this.configuration];
  }
}
