module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        // jshintrc: '.jshintrc',
        all: ['src/**/*.js', 'test/**/*.js']
    },
    csslint: {
        src: ['src/**/*.css']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');

  // Runnable task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('qa', ['jshint', 'csslint']);
  grunt.registerTask('pre-deploy', []);
};
