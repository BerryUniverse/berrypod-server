'use strict';

module.exports = {
  method: 'DELETE',
  path: '/api/v1/device/{deviceId}',
  config: {
    pre: [],
    description: 'Delete a device',
    notes: 'Delete a device',
    tags: ['api'],
    handler: (req, res) => {
      res('It\'s fine').code(200);
    }
  }
}
