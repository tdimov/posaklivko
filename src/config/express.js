import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export class Express {
  constructor(app, config) {
    this._init(app, config);
  }

  _init(app, config) {
    app.use(express.static(config.rootPath + '/public'));
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
  }
}
