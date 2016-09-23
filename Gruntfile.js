module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['node_modules/jquery/dist/jquery.min.js', 'assets/js/skel.min.js', 'assets/js/ie/html5shiv.js', 'assets/js/ie/respond.min.js', 'assets/js/main.js'],
        dest: 'dist/build.js'
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb',
        }
      },
    },
    watch: {
      styles: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['compass']
      },
      scripts: {
        files: ['node_modules/jquery/dist/jquery.min.js', 'assets/js/skel.min.js', 'assets/js/ie/html5shiv.js', 'assets/js/ie/respond.min.js', 'assets/js/main.js'],
        tasks: ['concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};