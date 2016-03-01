import {CategoryRoutes} from './categoryRoutes';
import {BookRoutes} from './bookRoutes';

export class Routes {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    app.get('/', (req, res) => {
      res.render('index');
    });

    app.get('/about', (req, res) => {
      res.render('about');
    });

    new CategoryRoutes(app);
    new BookRoutes(app);
  }
}
