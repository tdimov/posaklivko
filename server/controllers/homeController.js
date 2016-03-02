export class HomeController {
  constructor () {}

  getHome(req, res) {
    res.render('index');
  }

  getAbout(req, res) {
    res.render('about');
  }

  getContact(req, res) {
    res.render('contact');
  }

  postContact(req, res) {
    let name = req.body.name;
    res.render('contact', {name: name});
  }
}
