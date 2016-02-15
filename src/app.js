import express from 'express';
import {Express} from './config/express';
import {Config} from './config/config';

const app = express();
const config = new Config('development').config;

export class App {
  constructor() {}

  start() {
    new Express(app, config);
    app.listen(config.port, () => {
      console.log(`Server is up and running on port ${config.port}`);
    });

    app.get('/', (req, res) => {
      res.send({name: 'tihomir', age: '23'});
    });
  }
}
