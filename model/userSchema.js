const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      firstName: 'string',
      lastName: 'string',
      email: 'string',
      contact: 'string',
      address: 'string',
      password: 'string'
  });

  const User = mongoose.model('User', userSchema);
  module.exports = User;

