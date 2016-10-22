'use strict';

const jwt = require('jsonwebtoken');
const secret = require('../../../config').jwtKey;

function createToken(user) {
  let scopes;
  // Check if the user object passed in
  // has admin set to true, and if so, set
  // scopes to admin
  if (user.admin) {
    scopes = 'admin';
  }

  // Sign the JWT
  jwt.sign({ id: user._id, username: user.username, scope: scopes }, secret, { algorith: 'HS256', expiresIn: '1h' });
}

module.exports = createToken;
