const express = require('express');
const dotenv = require('dotenv');

const app = express(); // return instance of the app

// Setting up the dotenv config
dotenv.config({
  path: './.env'
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err); // TODO: improve the error handling
    process.exit(1);
  }

  console.log(`Server is now running in ${process.env.NODE_ENV} on port ${process.env.PORT}`);
});