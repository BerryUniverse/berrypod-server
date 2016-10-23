'use strict';

const bcrypt = require('bcryptjs');
const Boom = require('boom');
const User = require('../model/User');
const createUserSchema = require('../schemas/createUser');
const verifyUniqueUser = require('../util/userFunctions').verifyUniqueUser;
const createToken = require('../util/token');

function hashPassword(password, cb) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
}

module.exports = {
  method: 'POST',
  path: '/api/v1/profile',
  config: {
    description: 'Create new user',
    notes: 'Create new user',
    tags: ['api'],
    pre: [
      { method: verifyUniqueUser }
    ],
    handler: (req, res) => {
      let user = new User();
      user.email = req.payload.email;
      user.username = req.payload.username;
      user.admin = false;
      hashPassword(req.payload.password, (err, hash) => {
        if (err) throw Boom.badRequest(err);

        user.password = hash;
        user.save((err, user) => {
          if (err) throw Boom.badRequest(err);

          // If user creation is successful, issue a JWT
          res({ id_token: createToken(user) }).code(201);
        });
      });
    }
  }
}
