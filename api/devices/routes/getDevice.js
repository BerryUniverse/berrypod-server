'use strict';

const Joi = require('joi');

function createGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

module.exports = {
  method: 'GET',
  path: '/api/v1/device/{deviceId}',
  config: {
    pre: [],
    description: 'Get device information',
    notes: 'Get device information',
    tags: ['api'],
    validate: {
        params: {
         deviceId : Joi.string().required().description('The id for the device')
        }
    },
    handler: (req, res) => {
      let device = {
        id: createGuid(),
        name: 'Test Device',
        online: true,
        sensors: []
      }
      res(device).code(200);
    }
  }
}
