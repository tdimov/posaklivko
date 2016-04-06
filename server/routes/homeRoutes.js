import {HomeController} from '../controllers/homeController';
import {FilesUploader} from '../utils/filesUploader';

export class HomeRoutes {
  constructor (app) {
    this.homeController = new HomeController();
    this.filesUploader = new FilesUploader();
    this._init(app);
  }

  _init(app) {
    app.get('/', this.homeController.getHome);

    app.get('/about', this.homeController.getAbout);

    app.get('/contact', this.homeController.getContact);

    app.post('/contact', this.filesUploader.uploadMultipleFiles('files'),  this.homeController.postContact);

    app.get('/error', this.homeController.errorPage);
  }
}
