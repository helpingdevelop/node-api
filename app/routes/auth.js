const authController = require('../controllers/auth');

module.exports = (app) => {
  app.post('/api/v1/auth/signup', authController.signupUser);
};
