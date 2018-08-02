const express = require('express');
const dotenv = require('dotenv');

const app = express(); // This is used to create the express app

// Setup the app enviroment variables
dotenv.config({
  path: './.env'
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err); // TODO: Improve error handling
    process.exit(1);
  }

  console.log(`Server is now running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
});