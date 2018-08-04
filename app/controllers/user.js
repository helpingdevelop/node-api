/**
 * Collect the users information
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 */
const getUser = (req, res) => {
  return res.json({
    name: 'Joseph Smith',
    age: 23
  });
};

/**
 * Which user is making the request?
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 */
const whichUser = (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.status(422).json({
      message: 'You need to supply a name.'
    });
  }

  return res.json({
    message: `Your name is ${name}`
  });
};

/**
 * Update a specific user
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 */
const update = (req, res) => {
  const userId = req.params.userId;
  return res.json({
    message: 'The user you want to update is ' + userId
  })
};

module.exports = {
  getUser,
  whichUser,
  update
};