'use strict';

// ------------------------------------------------------------------------------------- //
const Hapi = require('hapi');                     // Hapi.js Framework
const Nes = require('nes');                       // Websocket adapter for Hapi
const Inert = require('inert');                   // Static file and directory handler
const Vision = require('vision');                 // Template rendering plugin
const Good = require('good');                     // Process monitoring plugin
const HapiSwagger = require('hapi-swagger');      // Swagger interface for Hapi
const HapiAuthJwt = require('hapi-auth-jwt');     // JWT authentication plugin for Hapi

const mongoose = require('mongoose');
const glob = require('glob');
const path = require('path');

const Config = require('./config');
const Pack = require('./package');
// ------------------------------------------------------------------------------------- //

// Database connection 
const dbUrl = 'mongodb://' + Config.db.host + ':' + Config.db.port + '/' + Config.db.dbName;

// Create Hapi server instance
const server = new Hapi.Server();

// Server address and port
server.connection({
  host: Config.app.host,
  port: Config.app.port
});

// Swagger configuration
const swaggerOptions = {
  basePath: '/api/v1/',
  info: { 'title': 'BerryPod API Documentation', 'version': Pack.version }
};

// Good configuration
const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{
        log: '*',
        response: '*'
      }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

server.register([
  HapiAuthJwt,
  Nes,
  Inert,
  Vision,
  { 'register': Good, 'options': goodOptions },
  { 'register': HapiSwagger, 'options': swaggerOptions }
], (err) => {

  // Add JWT as authentication strategy
  server.auth.strategy('jwt', 'jwt', {
    key: Config.jwtKey,
    verifyOptions: {
      algorithms: ['HS256']
    }
  });

  // Look through the routes in all the subdirectories
  // of API and create a new route for each
  glob.sync('api/**/routes/*.js', {
    root: __dirname
  }).forEach(file => {
    const route = require(path.join(__dirname, file));
    server.route(route);
  });

  // Start the server
  server.start((err) => {
    if (err) throw err;
    console.log('Server running at', server.info.uri);

    // Connect to MongoDB database through Mongoose
    mongoose.connect(dbUrl, {}, (err) => {
      if (err) throw err;
      console.log('Connected to database at', dbUrl);
    });

  });

});
