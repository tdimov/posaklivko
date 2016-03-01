export class BookRoutes {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    app.get('/books', (req, res) => {
      res.send({books: ['book 1', 'book2', 'book3']});
    });
  }
}
