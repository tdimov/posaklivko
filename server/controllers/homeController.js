export class HomeController {
  constructor () {}

  getHome(req, res) {
    res.render('index');
  }

  getAbout(req, res) {
    res.render('home/about');
  }

  getContact(req, res) {
    res.render('home/contact');
  }

  postContact(req, res) {
    let name = req.body.name;
    res.render('home/contact', {name: name});
  }

  errorPage(req, res) {
    res.render('error-page');
  }
}
