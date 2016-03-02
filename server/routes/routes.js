import {CategoryRoutes} from './categoryRoutes';
import {BookRoutes} from './bookRoutes';
import {HomeRoutes} from './homeRoutes';

export class Routes {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    new HomeRoutes(app);
    new CategoryRoutes(app);
    new BookRoutes(app);
  }
}
