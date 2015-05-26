'use strict';

var expect = require('expect.js'),
    joi    = require('joi'),
    schema = require('../src/schema.js');

describe('schema', function() {
    describe('given no directory', function() {
        it('should return default value', function() {
            joi.validate({}, schema, function(_, value) {
                expect(value.directory).to.equal('/src/routes');
            });
        });
    });
});
