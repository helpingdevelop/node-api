const User = require('../models/user');

/**
 * Collect the users information
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 */
const getUsers = (req, res) => {
  User.find({}).then((users) => {
    return res.json({
      message: 'The users where successfully collected',
      users
    });
  }).catch((error) => {
    return res.status(422).json({
      message: 'There was an error collecting the users',
      error
    });
  });
};

/**
 * Update a specific user
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 */
const updateUser = (req, res) => {
  const userId = req.params.userId;
  User.findOne({_id: userId}).update({name: req.body.name}).then((success) => {
    return res.json({
      message: 'The user has been updated'
    });
  }).catch((error) => {
    return res.status(422).json({
      message: 'There was an error collecting the users',
      error
    });
  });
};

module.exports = {
  getUsers,
  updateUser
};