'use strict';

const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const jwt = require('jsonwebtoken');
const jwtKey = require('../../../../config').jwtKey;
const User = require('../../../../api/users/model/User');
const createToken = require('../../../../api/users/util/token');

lab.test('create token for a non-admin user', (done) => {
  let user = new User();
  user.email = 'testuser@domain.com',
  user.username = 'testuser',
  user.admin = false;

  let token = createToken(user);
  let decoded = jwt.verify(token, jwtKey);

  Code.expect(decoded.username).to.equal('testuser');
  done();
});

lab.test('create token for an admin user', (done) => {
  let user = new User();
  user.email = 'testuser@domain.com',
  user.username = 'testuser',
  user.admin = true;

  let token = createToken(user);
  let decoded = jwt.verify(token, jwtKey);

  Code.expect(decoded.username).to.equal('testuser');
  Code.expect(decoded.scope).to.equal('admin');
  done();
});
