const mongoose = require('mongoose');
const validator = require("email-validator");

const validateEmail = (value) => {
  return validator.validate(value);
};

const emailIsUnique = async (value) => {
  const count = await mongoose.model('User').count({ email: value});
  return count === 0;
};

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name.']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter an email address'],
    validate: [
      {validator: validateEmail, message: '{VALUE} was an invalid email.'},
      {validator: emailIsUnique, message: '{VALUE} is already in use.'}
    ]
  },
  age: {
    type: Number,
    required: [true, 'Please give us your age'],
    min: [16, 'You must be at least 16']
  },
});
