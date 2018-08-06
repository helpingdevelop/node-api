const userController = require('../controllers/user');

module.exports = (app) => {
  app.route('/api/v1/users')
    .get(userController.getUsers)

  app.route('/api/v1/users/:userId')
    .post(userController.updateUser)
};
