'use strict';

module.exports = {
    method: 'GET',
    path: '/route1',
    handler: function(request, reply) {
        reply().code(200);
    }
};
