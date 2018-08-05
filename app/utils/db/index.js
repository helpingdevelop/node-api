const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.then((db) => {
  console.log('The connection to the database was successful.');
  return db;
}).catch((err) => {
  console.log('There was an error connecting to the database', err);
});