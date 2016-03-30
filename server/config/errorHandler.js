export class ErrorHandler {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    app.use(function(req, res, next) {
      res.status(404).redirect('/error');
    });
  }
}
