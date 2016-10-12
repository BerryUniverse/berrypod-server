'use strict';

const Hapi = require('hapi');
const Nes = require('nes');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package');

const server = new Hapi.Server();
const routes = require('./config/routes');

server.connection({
  host: 'localhost',
  port: 3000
});

const options = {
  basePath: '/api/v1/',
  info: { 'title': 'BerryPod API Documentation', 'version': Pack.version }
};

server.register([
  Nes,
  Inert,
  Vision,
  {
    'register': HapiSwagger,
    'options': options
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
