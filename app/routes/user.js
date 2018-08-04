const userController = require('../controllers/user');

module.exports = (app) => {
  app.route('/api/v1/user')
    .get(userController.getUser)
    .post(userController.whichUser)

  app.route('/api/v1/user/:userId')
    .post(userController.update)
};
