'use strict';

module.exports = {
  method: 'PUT',
  path: '/api/v1/device/{deviceId}',
  config: {
    pre: [],
    description: 'Update device information',
    notes: 'Update device information',
    tags: ['api'],
    handler: (req, res) => {
      res('It\'s fine').code(200);
    }
  }
}
