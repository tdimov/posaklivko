import mongoose from 'mongoose';

export class Mongoose {
  constructor(config) {
    this._init(config);
  }

  _init(config) {
    mongoose.connect(config.conectionString);

    let db = mongoose.connection;

    db.once('open', err => {
      if (err) {
        console.log(`Database connection could not be opened: \n ${err}`);
        return;
      }

      console.log('Database is up and running...');
    });

    db.on('error', err => {
      console.log(err);
    });
  }
}
