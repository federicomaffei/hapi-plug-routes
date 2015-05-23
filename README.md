# hapi-plug-routes

## What is hapi-plug-routes?
A simple npm module to register routes contained in separated files from a specific folder. 

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

    {
        register: require('hapi-plug-routes'),
        options: {
            directory: '/src/routes/'
        }
    }

You can add as many files as you wish as long as they are the relevant folder.

## Validation

The plugin will throw an error if: 

1. The directory does not exist
2. The directory is not a valid string 