export class ErrorHandler {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    app.use((req, res, next) => {
      res.redirect('/error');
    });
  }
}
