'use strict';

module.exports = {
  method: 'GET',
  path: '/api/v1/profile',
  config: {
    pre: [],
    description: 'Get profile information',
    notes: 'Just messing around with Swagger really',
    tags: ['api'],
    handler: (req, res) => {
      res('OK!').code(200);
    }
  }
}
