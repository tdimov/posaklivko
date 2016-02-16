import mongoose from 'mongoose';

export class Mongoose {
  constructor(connectionString) {
    this._init(connectionString);
  }

  _init(connectionString) {
    mongoose.connect(connectionString);

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
