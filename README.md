# hapi-plug-routes

[![Build Status](https://travis-ci.org/federicomaffei/hapi-plug-routes.svg)](https://travis-ci.org/federicomaffei/hapi-plug-routes)[![Dependency Status](https://david-dm.org/federicomaffei/hapi-plug-routes.svg)](https://david-dm.org/federicomaffei/hapi-plug-routes)[![npm version](https://badge.fury.io/js/hapi-plug-routes.svg)](https://www.npmjs.com/package/hapi-plug-routes)

[![NPM](https://nodei.co/npm/hapi-plug-routes.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hapi-plug-routes/)

## What is hapi-plug-routes?

A simple npm module to register routes contained in separated files from a specific folder. Sub-folders will work as well.

By registering this plugin you will be able to specify a folder that contains .js files with hapi.js routes which will then automatically become available to the server.

## Usage
```
$ npm i hapi-plug-routes --save
```

**/src/routes/helloWorld.js**
```
module.exports = {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, World!');
    }
};
```

**/app.js**
```
server.register([
    {
        register: require('hapi-plug-routes'),
        options: {
            directory: '/src/routes/'
        }
    }
], function(err) {
    if (err) {
        console.error('Failed to load plugin:', err);
    }

    server.start();
});
```

## Configuration
- **directory** *(default: '/src/routes')* - path to directory containing routes 

## Release History
- **v1.0.0** (2015-05-24)
    - initial release
