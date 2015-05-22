'use strict';

var fs  = require('fs'),
    joi = require('joi');

exports.register = function(plugin, options, next) {
    var pluginOptionValidationResult = joi.validate(options, require('./schema').plugin);
    if(pluginOptionValidationResult.error) {
        return next(pluginOptionValidationResult.error);
    }

    fs.readdir(process.cwd() + options.directory, function(routeLookupError, files) {
        if(routeLookupError) {
            throw routeLookupError;
        }

        files.forEach(function(file) {
            plugin.route(require(process.cwd() + options.directory + file));
        });
        next();
    });
};
