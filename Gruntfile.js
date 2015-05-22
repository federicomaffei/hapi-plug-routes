'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            options: {
                configFile: '.eslintrc'
            },
            target: [ './*.js', './src', './test' ]
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    require('time-grunt')(grunt);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('build', ['eslint']);
};
