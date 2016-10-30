[![Build Status](https://travis-ci.org/BerryUniverse/berrypod-server.svg?branch=master)](https://travis-ci.org/BerryUniverse/berrypod-server)
[![Node.js Dependencies](https://david-dm.org/BerryUniverse/berrypod-server.svg)](https://david-dm.org/BerryUniverse/berrypod-server)
[![Coverage Status](https://coveralls.io/repos/github/BerryUniverse/berrypod-server/badge.svg?branch=master)](https://coveralls.io/github/BerryUniverse/berrypod-server?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/berryuniverse/projects/d29e924f-5c84-4c95-9b66-4ee1cfc16908/badge)](https://nodesecurity.io/orgs/berryuniverse/projects/d29e924f-5c84-4c95-9b66-4ee1cfc16908)
# BerryPod Server Backend / REST API

## Dependencies

* [Node.js](https://nodejs.org)
* [MongoDB](https://www.mongodb.com/) - Data storage

## Simple usage

Make sure you have MongoDB instance up and running first. Modify the *config.js* file to point to your database instance and change your host port if needed.

Install dependencies:

```
npm install
```
Start the server e.g. with:

```
npm start
```
..or..

```
npm run watch
```
..to start server with _nodemon_ for easier development.