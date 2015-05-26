'use strict';

var joi       = require('joi'),
    recursive = require('recursive-readdir');

exports.register = function(plugin, options, next) {
    var pluginOptionValidationResult = joi.validate(options, require('./schema'));
    if(pluginOptionValidationResult.error) {
        return next(pluginOptionValidationResult.error);
    }

    recursive(process.cwd() + pluginOptionValidationResult.value.directory, function(routeLookupError, files) {
        if(routeLookupError) {
            throw routeLookupError;
        }

        files.forEach(function(file) {
            plugin.route(require(file));
        });

        next();
    });
};
