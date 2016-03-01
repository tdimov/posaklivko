export class CategoryRoutes {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    app.get('/categories', (req, res) => {
      res.send({categories: ['category 1', 'category 2', 'category 3']});
    });
  }
}
