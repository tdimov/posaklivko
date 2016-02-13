import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';

const app = express();
const upload = multer();
const port = 3000;

export class App {
  constructor() {}

  start() {
    app.use(express.static(__dirname + '/../public'));
    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(port, () => {
      console.log('Server is up and running on port ' + port);
    });

    app.get('/', (req, res) => {
      res.send({name: 'tihomir', age: '23'});
    });
  }
}
