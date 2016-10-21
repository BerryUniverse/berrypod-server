'use strict';

module.exports = {
  method: 'POST',
  path: '/api/v1/device/{deviceId}',
  config: {
    pre: [],
    description: 'Add a device',
    notes: 'Add a device',
    tags: ['api'],
    handler: (req, res) => {
      res('It\'s fine').code(200);
    }
  }
}
