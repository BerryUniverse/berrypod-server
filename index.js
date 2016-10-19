'use strict';

// ------------------------------------------------------------------------------------- //
const Hapi = require('hapi');                     // Hapi.js Framework
const Nes = require('nes');                       // Websocket adapter for Hapi
const Inert = require('inert');                   // Static file and directory handler
const Vision = require('vision');                 // Template rendering plugin
const HapiSwagger = require('hapi-swagger');      // Swagger interface for Hapi
const HapiAuthJwt = require('hapi-auth-jwt');     // JWT authentication plugin for Hapi

const rethink = require('rethinkdb');             // RethinkDB driver
const glob = require('glob');
const path = require('path');
const Pack = require('./package');
// ------------------------------------------------------------------------------------- //

// Create Hapi server instance
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
  HapiAuthJwt,
  Nes,
  Inert,
  Vision,
  { 'register': HapiSwagger, 'options': swaggerOptions }
], (err) => {

  // Add JWT as authentication strategy
  server.auth.strategy('jwt', 'jwt', {
    key: 'insertVerySercretKeyHere',
    verifyOptions: {
      algorithms: ['HS256']
    }
  });

  // Look through the routes in
  // all the subdirectories of API
  // and create a new route for each
  glob.sync('api/**/routes/*.js', {
    root: __dirname
  }).forEach(file => {
    const route = require(path.join(__dirname, file));
    server.route(route);
  });

  // Start the server
  server.start((err) => {
    if (err) throw err;

    console.log('Server running at:', server.info.uri);
    console.log('Connecting to rethinkdb...');

    rethink.connect({ host: 'localhost', port: 28015 }, (err, conn) => {
      if (err) throw err;
      console.log('Successfully connected to RethinkDB @', conn.host + ':' + conn.port);

      /*
      rethink.db('test').tableCreate('tv_shows').run(conn, (err, res) => {
        if (err) throw err;
        console.log(res);
      });
      */
    });

  });
});
