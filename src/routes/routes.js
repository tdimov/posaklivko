import {CategoryRoutes} from './categoryRoutes';
import {BookRoutes} from './bookRoutes';

export class Routes {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    app.get('/', (req, res) => {
      res.send({name: 'tihomir', age: '23'});
    });

    new CategoryRoutes(app);
    new BookRoutes(app);
  }
}
