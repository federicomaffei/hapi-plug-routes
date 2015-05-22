'use strict';

var expect = require('expect.js'),
    plugin = require('../index.js');

describe('plugin option validation', function() {
    describe('given no directory', function() {
        it('should return error', function() {
            plugin.register(null, {}, function(err) {
                expect(err.toString()).to.equal('ValidationError: child "directory" fails because ["directory" is required]');
            });
        });
    });

    describe('given a directory path that is not a string', function() {
        it('should return error', function() {
            plugin.register(null, { directory: 1234 }, function(err) {
                expect(err.toString()).to.equal('ValidationError: child "directory" fails because ["directory" must be a string]');
            });
        });
    });
});
