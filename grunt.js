/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-min');
  // Project configuration.
  grunt.initConfig({
    test: {
      all: ['javascripts/fizzbuzz-js/fizzbuzz-test.js']
    },

    concat: {
      dist: {
        src: ['javascripts/fizzbuzz-js/fizzbuzz-test.js', 'javascripts/fizzbuzz-js/fizzbuzz.js'],
        dest: 'javascripts/fizzbuzz-js/fizzplustest.js'
      }
    },

    

    lint: {
      all: [
        'grunt.js',
        'javascripts/fizzbuzz-js/*.js',
        'fizzbuzz/*.html'
      ]
    },

    qunit: {
      all: ['fizzbuzz/fizzbuzz.html']
    }, 

    watch: {
      scripts: {
        files: ['javascripts/fizzbuzz-js/*.js', 'fizzbuzz/*.html'],
        tasks: 'lint test qunit'
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true,
        strict: false
      },
      globals: {}
    }
  });

  // Default task.
  grunt.registerTask('default', 'concat lint test qunit watch');

};
