import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

export class Express {
  constructor(app, config) {
    this._init(app, config);
  }

  _init(app, config) {
    app.set('view engine', 'jade');
    app.set('views', config.staticPaths.viewsPath);
    app.use(express.static(config.staticPaths.public));
    app.use(express.static(config.staticPaths.jspmPath));
    app.use(express.static(config.staticPaths.stylesPath));
    app.use(express.static(config.staticPaths.scriptsPath));
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(session({
      secret: 'SET HERE YOUR SESSION SECRET',
      proxy: true,
      resave: true,
      saveUninitialized: true
    }));
  }
}
