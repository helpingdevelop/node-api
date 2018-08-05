const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express(); // return instance of the app

// Tell the app to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up the dotenv config
dotenv.config({
  path: './.env'
});

// Setup the routing
fs.readdirSync(`${__dirname}/routes`).map((file) => {
  require(`./routes/${file}`)(app);
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err); // TODO: improve the error handling
    process.exit(1);
  }

  require('./utils/db');

  console.log(`Server is now running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});