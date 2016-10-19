'use strict';

const Boom = require('boom');
const r = require('rethinkdb');

module.exports = {
  method: 'GET',
  path: '/api/v1/profile',
  config: {
    pre: [],
    description: 'Get profile information',
    notes: 'Just messing around with Swagger really',
    tags: ['api'],
    handler: (req, res) => {
      /*
      r.table('tv_shows').run(conn, (err, cursor) => {
        if (err) throw Boom.badRequest(err);
        cursor.toArray( (err, result) => {
          res(result);
        });
      });
      */
      res('Yolo!').code(200);
    }
  }
}
