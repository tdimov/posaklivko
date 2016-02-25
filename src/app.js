import express from 'express';
import {Express} from './config/express';
import {Mongoose} from './config/mongoose';
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

    app.listen(config.port, () => {
      console.log(`Server is up and running on port ${config.port}`);
    });
  }
}
