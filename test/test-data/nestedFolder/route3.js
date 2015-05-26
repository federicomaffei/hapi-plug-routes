'use strict';

module.exports = {
    method: 'GET',
    path: '/route3',
    handler: function(request, reply) {
        reply().code(200);
    }
};
