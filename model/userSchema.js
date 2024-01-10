const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      userName: 'string',
      role: 'string',
      email: 'string',
      contact: 'string',
      accessToken: 'string',
      password: 'string',
  });

  const User = mongoose.model('User', userSchema);
  module.exports = User;

