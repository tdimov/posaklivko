import {HomeRoutes} from './homeRoutes';

export class Routes {
  constructor (app) {
    this._init(app);
  }

  _init(app) {
    new HomeRoutes(app);
  }
}
