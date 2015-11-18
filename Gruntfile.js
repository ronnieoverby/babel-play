'use strict';

module.exports = function(grunt) {

    grunt.initConfig({

        clean: {
            build: ['dist']
        },

        watch:{
            js:{
                files: 'src/**/*.js',
                tasks:[ 'babel' ],
            }
        },

        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            build: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'dist/',
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('default', ['clean', 'babel']);

}