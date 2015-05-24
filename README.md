# hapi-plug-routes

[![Build Status](https://travis-ci.org/federicomaffei/hapi-plug-routes.svg)](https://travis-ci.org/federicomaffei/hapi-plug-routes) [![npm version](https://badge.fury.io/js/hapi-plug-routes.svg)](https://www.npmjs.com/package/hapi-plug-routes)

[![NPM](https://nodei.co/npm/hapi-plug-routes.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hapi-plug-routes/)

## What is hapi-plug-routes?

A simple npm module to register routes contained in separated files from a specific folder. Sub-folders will work as well.

By registering this plugin you will be able to specify a folder that contains .js files with hapi.js routes which will then automatically become available to the server.

## Installation

    npm install hapi-plug-routes --save

## Example

Create a getHelloWorld.js file in your src/routes folder with the following content:

 
    module.exports = {
	    method: 'GET',
	    path: '/',
	    handler: function (request, reply) {
	        reply('Hello!');
	    }
	};


Register the plugin in the main application server file specifying the routes directory in the options.

    server.register([
        {
            register: require('hapi-plug-routes'),
            options: {
                directory: '/src/routes/'
            }
        }
    ]

You can add as many files as you wish as long as they are the relevant folder.

The plugin allows to put route files in sub-folders, if needed. They will be registered anyway.

## Validation

The plugin will throw an error if: 

1. The directory is not specified in the options.
2. The directory specified is not a string value.