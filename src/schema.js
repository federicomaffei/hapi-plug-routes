'use strict';

var joi = require('joi');

module.exports = {
    directory: joi.string().default('/src/routes')
};
