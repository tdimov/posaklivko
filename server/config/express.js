import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import favicon from 'serve-favicon';

export class Express {
  constructor(app, config) {
    this._init(app, config);
  }

  _init(app, config) {
    app.set('view engine', 'jade');
    app.set('views', config.staticPaths.views);
    app.use(express.static(config.staticPaths.public));
    app.use(express.static(config.staticPaths.jspm));
    app.use(express.static(config.staticPaths.styles));
    app.use(express.static(config.staticPaths.scripts));
    app.use(favicon(config.staticPaths.favicon));
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
