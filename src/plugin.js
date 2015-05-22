'use strict';

var fs = require('fs');

exports.register = function(plugin, options, next) {
    fs.readdir(process.cwd() + '/src/routes', function(routeLookupError, files) {
        if(routeLookupError) {
            throw routeLookupError;
        }

        files.forEach(function(file) {
            plugin.route(require(process.cwd() + '/src/routes/' + file));
        });
        next();
    });
};
