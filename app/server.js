const express = require('express');

const app = express(); // This is used to create the express app

app.listen(2000, (err) => {
  if (err) {
    console.log(err); // TODO: Improve error handling
    process.exit(1);
  }

  console.log('Your server is now running');
});