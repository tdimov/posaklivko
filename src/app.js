import express from 'express';
import {Express} from './config/express';
import {Mongoose} from './config/mongoose';
import {Routes} from './routes/routes';
import {Config} from './config/config';

const app = express();
const config = new Config('development').config;

export class App {
  constructor() {}

  start() {
    new Express(app, config);
    new Mongoose(config);
    new Routes(app);

    app.listen(config.port, () => {
      console.log(`Server is up and running on port ${config.port}`);
    });
  }
}
