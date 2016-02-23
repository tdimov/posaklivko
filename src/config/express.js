import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export class Express {
  constructor(app, config) {
    this._init(app, config);
  }

  _init(app, config) {
    app.set('view engine', 'jade');
    //app.set('views', config.rootPath + '../public/views');
    app.use(express.static(config.viewsPath));
    app.use(express.static(config.jspmPath));
    app.use(express.static(config.stylesPath));
    app.use(express.static(config.scriptsPath));
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
  }
}
