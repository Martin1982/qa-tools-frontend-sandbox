module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    htmlhint: {
        src: ['src/**/*.html']
    },
    jshint: {
        // jshintrc: '.jshintrc',
        all: ['src/**/*.js', 'test/**/*.js']
    },
    csslint: {
        src: ['src/**/*.css']
    },
    qunit: {
      all: {
          options: {
              urls: [
                  'http://localhost:8000/tests/first.html',
              ]
          }
      }
    },
    connect: {
      server: {
          options: {
              port: 8000,
              base: '.'
          }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  // Runnable task(s).
  grunt.registerTask('default', ['pre-deploy', 'qa']);
  grunt.registerTask('unittest', ['connect', 'qunit']);
  grunt.registerTask('qa', ['htmlhint' ,'jshint', 'csslint', 'unittest']);
  grunt.registerTask('pre-deploy', []);
};
