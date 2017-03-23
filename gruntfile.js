module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // concat: {
    //   options: {
    //     separator: ';'
    //   },
    //   dist: {
    //     src: ['js/src/*.js'],
    //     dest: 'js/dist/script.main.js'
    //   }
    // },
    // uglify: {
    //   dist: {
    //     src: ['js/dist/script.main.js'],
    //     dest: 'js/dist/script.main.min.js'
    //   }
    // },
    sass: {
      dist: {
        options: {       
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      },
    },

  });

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // grunt.registerTask('default', ['concat', 'uglify','sass']);
  grunt.registerTask('default', ['sass']);

};