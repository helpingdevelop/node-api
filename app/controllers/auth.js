const User = require('../models/user');

/**
 * Sign up a user and save the information into the database
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 */
const signupUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;

  User.create({
    name,
    email,
    age
  }).then((user) => {
    return res.json({
      message: 'You have now signed up.',
      user
    });
  }).catch((error) => {
    if (error.name === 'ValidationError') {
      return res.status(422).json({
        message: 'There was an issue with your request',
        errors: error.errors
      });
    }

    // Some more error handing needs to be here
    console.log(error);
    return res.status(500).json({
      message: 'There was an unexpected error.'
    });
  });
};

module.exports = {
  signupUser
};
