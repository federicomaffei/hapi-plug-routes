'use strict';

var expect = require('expect.js'),
    plugin = require('../index.js');

describe('plugin registration', function() {
    var routes = [];

    before(function(done) {
        var server = {
            route: function(route) {
                routes.push(route);
            }
        };

        plugin.register(server, { directory: '/test/test-data' }, done);
    });

    it('should register route 1', function() {
        expect(routes.filter(function(r) { return r.path === '/route1'; }).length).to.equal(1);
    });

    it('should register route 2', function() {
        expect(routes.filter(function(r) { return r.path === '/route2'; }).length).to.equal(1);
    });

    it('should register route 3', function() {
        expect(routes.filter(function(r) { return r.path === '/route3'; }).length).to.equal(1);
    });
});
