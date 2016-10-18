const Joi = require('joi');
const Handlers = require('../handlers/handlers');

module.exports = [

  // Generic
  {
    method: 'GET',
    path: '/',
    config: {
      handler: Handlers.getServerState,
      description: 'Root of the thing',
      notes: 'Just testing',
      tags: ['api']
    }
  },

  // Login
  {
    method: 'POST',
    path: '/login',
    config: {
      handler: Handlers.notYetImplemented,
      description: 'Login with username and password',
      notes: 'Login with username and password'
    }
  },

  // Profiles
  {
    method: 'GET',
    path: '/api/v1/profile',
    config: {
      handler: Handlers.getProfile,
      description: 'Get profile information',
      notes: 'Just messing around with Swagger really',
      tags: ['api', 'profile']
    }
  },

  {
    method: 'PUT',
    path: '/api/v1/profile',
    config: {
      handler: Handlers.notYetImplemented,
      description: 'Update profile information',
      notes: 'I guess this could be one way to do it',
      tags: ['api', 'profile']
    }
  },

  // Devices
  {
    method: 'GET',
    path: '/api/v1/devices',
    config: {
      handler: Handlers.notYetImplemented,
      description: 'List all devices', 
      notes: 'Add notes here',
      tags: ['api', 'device']
    }
  },

  {
    method: 'GET',
    path: '/api/v1/device/{deviceId}',
    config: {
      handler: Handlers.notYetImplemented,
      description: 'Get information of a device',
      notes: 'Add notes here',
      tags: ['api', 'device']
    }
  },

  {
    method: 'PUT',
    path: '/api/v1/device/{deviceId}',
    config: {
      handler: Handlers.notYetImplemented,
      description: 'Update device information',
      notes: 'Add notes here',
      tags: ['api', 'device']
    }
  },

  {
    method: 'DELETE',
    path: '/api/v1/device/{deviceId}',
    config: {
      handler: Handlers.notYetImplemented,
      description: 'Delete device by Id',
      notes: 'Add notes here',
      tags: ['api', 'device'],
      validate: {
        params: {
         deviceId : Joi.number().required().description('The id for the device')
        }
      }
    }
  }
];
