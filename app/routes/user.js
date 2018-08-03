module.exports = (app) => {
  app.route('/api/v1/user')
    .get((req, res) => {
      return res.json({
        name: 'Joseph Smith',
        age: 23
      });
    })
    .post((req, res) => {
      const name = req.body.name;

      if (!name) {
        return res.status(422).json({
          message: 'You need to supply a name.'
        });
      }

      return res.json({
        message: `Your name is ${name}`
      });
    })
};
