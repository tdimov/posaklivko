import express from 'express';
import {Express} from './config/express';
import {Mongoose} from './config/mongoose';
import {ErrorHandler} from './config/errorHandler';
import {Routes} from './routes/routes';
import {config} from './config/config';

const app = express();
const env = process.env.NODE_ENV || 'development';

export class App {
  constructor() {}

  start() {
    new Express(app, config);
    new Mongoose(config[env].dbConnectionString);
    new Routes(app);
    new ErrorHandler(app);

    app.listen(config.port, () => {
      console.log(`Application is up and running...`);
    });
  }
}
