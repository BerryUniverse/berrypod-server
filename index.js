'use strict';

const Hapi = require('hapi');
const Fs = require('fs');
const Nes = require('nes');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const routes = require('./config/routes');
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 80
});

const swaggerOptions = {
  basePath: '/api/v1/',
  info: { 'title': 'BerryPod API Documentation', 'version': Pack.version }
};

server.register([
  Nes,
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': swaggerOptions
  }], (err) => {
    server.start( (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Server running at:', server.info.uri);
      }
    });
  });

server.route(routes);
