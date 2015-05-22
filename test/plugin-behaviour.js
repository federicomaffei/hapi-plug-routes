'use strict';

var expect = require('expect.js'),
    plugin = require('../index.js'),
    sinon = require('sinon');

describe('plugin behaviour', function() {
    var server = { route: function() {} };
    var spy = sinon.spy(server, 'route');

    it('should call the function twice with the test folder', function() {
        plugin.register(server, { directory: '/test/testRoutes/' }, function() {
            expect(spy.calledTwice).to.equal(true);
        });
    });
});
