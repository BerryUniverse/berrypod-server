'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/v1/profile',
  config: {
    pre: [],
    description: 'Update profile information',
    notes: 'I guess this could be one way to do it',
    tags: ['api'],
    handler: (req, res) => {
      res('OK!').code(200);
    }
  }
}
