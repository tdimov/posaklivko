import {HomeController} from '../controllers/homeController';

export class HomeRoutes {
  constructor (app) {
    this.homeController = new HomeController();
    this._init(app);
  }

  _init(app) {
    app.get('/', this.homeController.getHome);

    app.get('/about', this.homeController.getAbout);

    app.get('/contact', this.homeController.getContact);

    app.post('/contact', this.homeController.postContact);
  }
}
