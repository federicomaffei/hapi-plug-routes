'use strict';

module.exports = {
    method: 'GET',
    path: '/route2',
    handler: function(request, reply) {
        reply().code(200);
    }
};
