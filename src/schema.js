'use strict';

var joi = require('joi');

module.exports = {
    plugin: {
        directory: joi.string().required()
    }
};
